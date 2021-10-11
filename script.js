let pillars = [];
var frog;
var gameState = 0;
var score = 0;
let jump;

function preload() {
  bg = loadImage('pictures/bg.jpg');
  fr = loadImage('pictures/frog.png')
  hrt = loadImage('pictures/heart.png');
  jump = loadSound('audio/jump.mp3');
  ps = loadImage('pictures/paddenstoel.png')
  oswald = loadFont('font/oswald.ttf');
}

function setup() {
  createCanvas(550, 400);
  frog = new Frog(-0.5, 150, 0.25);
  background(bg);
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
    image(ps, 50, -25, 450, 450);
    strokeWeight(8);
    fill(255);
    rect(-10, 265, 600, 70);
    fill(0);
    text("Press enter to play", 190, 305);
    textSize(25);
    textFont(oswald)
  }
  else if (gameState == 1) {
    clear();
    background(bg);
    text(score, 30, 50);
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

    if(pillars.length > 4 && frameCount % 60 == 30){
      score++;
    }

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

function gameOver() {
  clear();
  background(bg);
  text("game over..", 100, 100)
}

