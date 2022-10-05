let pillars = [];
let activeFrogs = [];
let allFrogs = [];
var totalPopulation = 500;
let frog;
let player;
var gameState = 0;
var score = 0;
var highscore = 0;
var smartestFrog;
var generation = 1;

function preload() {
  bg = loadImage('pictures/bg.jpg');
  fr = loadImage('pictures/frog.png')
  ps = loadImage('pictures/paddenstoel.png')
  jump = loadSound('audio/jump.mp3');
  oswald = loadFont('font/oswald.ttf');
  pepe = loadImage('pictures/pepe2.png');
  go = loadImage('pictures/gameover.png');
  bee = loadImage('pictures/bee.png');
}

function setup() {
  createCanvas(550, 400);
  player = new FrogPlayer(-0.5, 150, 0.25);
  background(bg);
  newFrogs();
}

function keyPressed() {
  if (keyCode == 13) {
    if (gameState == 0) {
      gameState = 1;
    }
  }
  else if (keyCode == 32) {
    if (gameState == 1) {
      player.vy = -5;
      jump.play();
    }
  }
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

    // player.draw();
    // player.move(); 
    
    if (frameCount % 100 == 0) {
      let randomHeight = random(height - 150);
      pillars.push(new Pillar(550, 0, randomHeight));
      pillars.push(new Pillar(550, randomHeight + 150, 1000));
    }

    pillars.forEach(p => p.drawPillar());

    pillars.forEach((p) => {
      activeFrogs.forEach(frog => {
        if (p.isColliding(frog)) {
          frog.hit();
        }
      });
    });


    if ( pillars.length > 3 && frameCount % 100 == 33) {
      score++;
    }

    // one left? Then this is the smartest frog
    if (activeFrogs.length == 1) {
      smartestFrog = activeFrogs[0];
      localStorage.setItem("smartestFrog", JSON.stringify(smartestFrog));
    }

    // If we're out of frogs go to the next generation
    if (activeFrogs.length == 0) {
      reset();
    }

    text('generation:' + generation, 10, 20);
    text('score:' + score, 10, 30);
    text('highscore:' + highscore, 10, 40);
    text('living frogs:' + activeFrogs.length, 10, 50);
    textSize(10);
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
  if (score > highscore) {
    highscore = score;
  }
  clear();
  score = 0;
  pillars = [];
  gameState = 1;
  newFrogs();
  generation++;
  player.y = 125;
  player.vy = -5;   

}

function newFrogs() {
  for (let i = 0; i < totalPopulation; i++) {

    let frog
    if (smartestFrog) {
      frog = new Frog(smartestFrog.brain);
    }
    else {
      frog = new Frog();
    }
    activeFrogs[i] = frog;
    allFrogs[i] = frog;
  }
}