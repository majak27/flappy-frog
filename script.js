let pillars = [];
var gravity = 0.35;
var y = 200;
var vy = -1.0;
var frog;


function preload() {
  bg = loadImage('pictures/bg.gif');
  fr = loadImage('pictures/frog.png')
}


class Pillar {
  constructor(x, y, h, top, bottom) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.top = (200 + (200-this.h));
    this.bottom = (200-this.h);
  }
  
  drawPillar() {
    fill("#b2d4bd");
    noStroke();
    rect(this.x, this.y, 50, this.h);
    this.x -= 3;
    // dit doet t niet voor some reason
    // if (frog.y < this.top || frog.y > height - this.bottom) {
    //   if (frog.x > this.x && frog.x < this.x + this.w) {
    //     fill("red")
    // }
    //}
  }
}

class Frog{
  constructor(vy, y, gravity){
    this.vy = vy;
    this.y = y;
    this.gravity = gravity;
  }

  draw(){
    image(fr, 150, this.y, 60, 60);
  }

  move(){   
    this.vy += this.gravity;
    this.y += this.vy;
    // dit hieronder doet raar met de foto als frog
    this.y = constrain(this.y, 0, 400);
  } 
}

function keyPressed(){
  if(keyCode == 32){
    frog.vy = -5; 
  }
}

function setup() {
  createCanvas(550, 400);
  frog = new Frog(-0.5, 150, 0.25);
}

function draw() {
  background(bg);
  frog.draw();
  frog.move();
  if(frameCount % 60 == 0){   
    let randomHeight = random(height - 150)

    pillars.push(new Pillar(550,0, randomHeight));
    pillars.push(new Pillar(550,randomHeight + 150, 1000));
  }

  pillars.forEach(p => p.drawPillar());
}