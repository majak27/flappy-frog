let pillars = [];
var gravity = 0.35;
var y = 200;
var vy = -1.0;
var frog;
var gameState = 0;
var a = "red";
var hearts = 5;
let jump;

function preload() {
  bg1 = loadImage('pictures/ass.jpg')
  bg2 = loadImage('pictures/bg.gif');
  fr = loadImage('pictures/frog.png')
  jump = loadSound('audio/jump.mp3');
}

function setup() {
  createCanvas(550, 400);
  frog = new Frog(-0.5, 150, 0.25);
  background(bg1);
}

if (gameState == 0) {
  function keyPressed() {
    if (keyCode == 13) {
      gameState = 1;
    } else if (keyCode = 32) {
      frog.vy = -5;
      jump.play();
    }
  }
}

function draw() {
  if (gameState == 0) {
    image(fr, 50, -25, 450, 450);
    text("Press enter to play", 170, 200);
    textSize(25);
  } 
  else if (gameState == 1) {
    background(bg2);
    text(hearts, 30, 50);
    textSize(30);
    frog.draw();
    frog.move();
    if (frameCount % 60 == 0) {
      let randomHeight = random(height - 150);
      pillars.push(new Pillar(550, 0, randomHeight));
      pillars.push(new Pillar(550, randomHeight + 150, 1000));
    }
    pillars.forEach(p => p.drawPillar());
    pillars.forEach(p => p.hit());
  } 
  else if (gameState == 2) {
    gameOver()
  }
}

function keyPressed() {
  if (keyCode == 32) {
    frog.vy = -5;
  }
}

function gameOver(){
  clear();
  background(bg2);
  text("game over..", 100, 100)
}

