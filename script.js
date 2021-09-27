var gravity = 0.25;
var y = 200;
var vy = -1.0;

function setup() {
  createCanvas(400, 400);
  bg = loadImage("ass.jpg")
}

function draw() {
  background(bg);
  ellipse(100, y, 60, 60);
  vy += gravity;
  y += vy;
  y = constrain(y, 30, 370);
}

class Paddenstoel(){
  constructor(bottom, height,v){
    this.bottom = bottom;
    this.height = height;
    this.v = v;
  }
}

function keyPressed() {
  if (keyCode === 32) {
   vy = -5; 
  }  
}