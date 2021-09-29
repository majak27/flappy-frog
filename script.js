var gravity = 0.25;
var y = 200;
var vy = -1.0;
var frog;


class Paddenstoel{
  constructor(bottom, height,v){
    this.bottom = bottom;
    this.height = height;
    this.v = v;
  }
}

class Frog{
  constructor(vy, y, gravity){
    this.vy = vy;
    this.y = y;
    this.gravity = gravity;
  }

  draw(){
    ellipse(100, this.y, 60, 60);
  }
  move(){
    this.vy += this.gravity;
    this.y += this.vy;

    console.log(this.vy)

    this.y = constrain(this.y, 30, 370);
  } 
}

function keyPressed(){
  if(keyCode == 32){
    frog.vy = -5; 
  }
}

function setup() {
  createCanvas(500, 400);
  bg = loadImage("ass.jpg");
  frog = new Frog(-0.5, 150, 0.25);
}

function draw() {
  background(bg);
  frog.draw();
  frog.move();
}



