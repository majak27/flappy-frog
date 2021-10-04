let pipes = [];
var gravity = 0.25;
var y = 200;
var vy = -1.0;
var frog;

function preload() {
  bg = loadImage('pictures/ass.jpg');
  ps = loadImage('pictures/paddenstoel.png');
}

class Paddenstoel{
  constructor(x, y, w, h){
    this.x = x;
    this.y= y;
    this.w = 50;
    this.h = random(100,155);
  }
  drawPipe(){
    fill(255);
    rect(this.x, 0, this.w, this.h);
  }

}

class Frog{
  constructor(vy, y, gravity){
    this.vy = vy;
    this.y = y;
    this.gravity = gravity;
  }

  draw(){
    ellipse(150, this.y, 60, 60);
  }

  move(){   
    this.vy += this.gravity;
    this.y += this.vy;

    this.y = constrain(this.y, 30, 370);
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
  var pipe = new Paddenstoel(50,50,50,50);
  pipes.push(pipe);
}

function draw() {
  background(bg);
  frog.draw();
  frog.move();
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].drawPipe();
  }
}