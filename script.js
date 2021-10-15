let pillars = [];
var frog;
var gameState = 0;
var score = 0;
let jump;
var highscore= 0;

function preload() {
  bg = loadImage('pictures/bg.jpg');
  fr = loadImage('pictures/frog.png')
  hrt = loadImage('pictures/heart.png');
  jump = loadSound('audio/jump.mp3');
  ps = loadImage('pictures/paddenstoel.png')
  oswald = loadFont('font/oswald.ttf');
  pepe = loadImage('pictures/pepe2.png')
}

function setup() {
  createCanvas(550, 400);
  frog = new Frog(-0.5, 150, 0.25);
  background(bg);
}

function keyPressed() {
  if (keyCode == 13) {
    if(gameState == 0){ 
      gameState = 1;
    }
  }
  else if (keyCode == 32) {
    if (gameState == 1){
      frog.vy = -5;
      jump.play();
    }
  }
  if (keyCode == 13){
    if (gameState == 2){
      console.log("hey")
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
    fill(0);
    strokeWeight(2);
    text("Press enter to play", 190, 305);
    textSize(25);
    textFont(oswald);
  }
  else if (gameState == 1) {
    clear();
    background(bg);
    frog.draw();
    frog.move();
    if (frameCount % 60 == 0) {
      let randomHeight = random(height - 150);
      pillars.push(new Pillar(550, 0, randomHeight));
      pillars.push(new Pillar(550, randomHeight + 150, 1000));
    }
    pillars.forEach(p => p.drawPillar());
    pillars.forEach(p => p.hit());

    if (pillars.length > 5 && frameCount % 60 == 20) {
      score++;
    }
    text(score, 30, 50);
    textSize(30);
  }
  else if (gameState == 2) {
    gameOver()
  }
}


function gameOver() {
  clear();
  if (score > highscore) {
    highscore = score;
  }
  background(bg);
  image(pepe, 170, 60);
  strokeWeight(8);
  rect(-10, 315, 600, 75);
  fill(255);
  strokeWeight(2);
  stroke(0);
  textSize(20);
  text("score:          " + score, 190, 340);
  text("highscore:          " + highscore, 190, 360);
  textSize(20);
  textFont(oswald);
  text("Press enter to start again.", 190, 380);
}

function reset() {
  clear();
  score = 0;
  pillars = [];
  gameState = 0;
}
