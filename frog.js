function mutate(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}

class Frog {
  constructor(brain) {
    this.vy = 0;
    this.y = 125;
    this.w = 50;
    this.h = 50;
    this.x = 150;
    this.gravity = 0.3;

    if (brain instanceof NeuralNetwork) {
      this.brain = brain.copy();
      this.brain.mutate(mutate);
    } else {
      this.brain = new NeuralNetwork(5, 50, 2);
    }
  }

  //haalt de frog die dood is uit de lijst met levende frogs
  hit() {
    let idx = activeFrogs.indexOf(this);
    activeFrogs.splice(idx, 1);
  }

  //laat de kikker zien
  draw() {
    image(fr, this.x, this.y, this.w, this.h);
  }

  think(pillars) {
    if (!pillars || pillars.length < 1) {
      return;
    }

    // First find the closest pipe
    let closestPipe = null;
    let record = Infinity;

    for (let i = 0; i < pillars.length; i++) {
      let diff = pillars[i].x - this.x;
      if (diff > 0 && diff < record) {
        record = diff;
        closestPipe = pillars[i];
      }
    }

    if (closestPipe != null) {
      // Now create the inputs to the neural network
      let inputs = [];
      // x position of closest pipe
      inputs[0] = map(closestPipe.x, this.x, width, 0, 1);
      // top of closest pipe opening
      inputs[1] = map(closestPipe.y, 0, height, 0, 1);
      // bottom of closest pipe opening
      inputs[2] = map(closestPipe.GetBottom(), 0, height, 0, 1);
      // frog's y position
      inputs[3] = map(this.y, 0, height, 0, 1);
      // frog's y velocity
      inputs[4] = map(this.vy, -5, 5, 0, 1);

      // Get the outputs from the network
      let action = this.brain.predict(inputs);

      //console.log(action)
      // Decide to jump or not!
      if (action[1] > action[0]) {
        this.vy = -5;
      }
    }
  }


  move() {
    this.vy += this.gravity;
    this.y += this.vy;
    this.y = constrain(this.y, 0, 350);
  }
}
