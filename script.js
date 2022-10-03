let pillars = [];
let activeFrogs = [];
let allFrogs = [];
var totalPopulation = 50;
let frog;
var gameState = 0;
var score = 0;
var highscore = 0;
var smartestFrog;

function preload() {
  bg = loadImage('pictures/bg.jpg');
  fr = loadImage('pictures/frog.png')
  ps = loadImage('pictures/paddenstoel.png')
  jump = loadSound('audio/jump.mp3');
  oswald = loadFont('font/oswald.ttf');
  pepe = loadImage('pictures/pepe2.png')
  go = loadImage('pictures/gameover.png')
}

function setup() {
  createCanvas(550, 400);
  //frog = new Frog(-0.5, 150, 0.25);
  background(bg);
  newFrogs();
}

function keyPressed() {
  if (keyCode == 13) {
    if (gameState == 0) {
      gameState = 1;
    }
  }
  // else if (keyCode == 32) {
  //   if (gameState == 1) {
  //     frog.vy = -5;
  //     jump.play();
  //   }
  // }
  if (keyCode == 13) {
    if (gameState == 2) {
      reset();
    }
  }
}

function draw() {
  if (gameState == 0) {
    background(bg);
    image(ps, 50, -25, 450, 450);

    strokeWeight(8);
    fill(255);
    rect(-10, 265, 600, 70);
    stroke(0);

    strokeWeight(1);
    fill(0);
    textSize(30);
    textFont(oswald);
    text("Press enter to play", 175, 310);

  } else if (gameState == 1) {
    clear();

    background(bg);

    activeFrogs.forEach(frog => {
      frog.draw();
      frog.move();
      frog.think(pillars);
    })

    if (frameCount % 60 == 0) {
      let randomHeight = random(height - 150);
      pillars.push(new Pillar(550, 0, randomHeight));
      pillars.push(new Pillar(550, randomHeight + 150, 1000));
    }

    pillars.forEach(p => p.drawPillar());
    pillars.forEach(p => {
      allFrogs.forEach(frog => {
        p.hit(frog);
      });
    });

    if (pillars.length > 5 && frameCount % 60 == 20) {
      score++;
    }

    // one left? Then this is the smartest bird
    if (activeFrogs.length == 1) {
      smartestFrog = activeFrogs[0];
    }

    // If we're out of birds go to the next generation
    if (activeFrogs.length == 0) {
      reset();
    }
    
    text(score, 30, 50);
    textSize(30);
  } else if (gameState == 2) {
    reset();
  }
}


function gameOver() {
  clear();
  if (score > highscore) {
    highscore = score;
  }
  background(bg);
  image(pepe, 170, 60);
  image(go, 170, 8)

  strokeWeight(8);
  fill(255);
  rect(-10, 315, 600, 75);

  fill(255);
  strokeWeight(2);
  stroke(0);
  textSize(24);
  text("score:          " + score, 190, 340);
  text("highscore:   " + highscore, 190, 365);

  textSize(15);
  textFont(oswald);
  strokeWeight(1.5);
  text("press enter to play again", 190, 380);
}

function reset() {
  clear();
  score = 0;
  pillars = [];

  gameState = 1;

  newFrogs();
}

function newFrogs() {
  for (let i = 0; i < totalPopulation; i++) {
    
    let frog
    if(smartestFrog){
      frog = new Frog(smartestFrog.brain);
    } 
    else {
      frog = new Frog();
    }
    
    activeFrogs[i] = frog;
    allFrogs[i] = frog;
  }
}