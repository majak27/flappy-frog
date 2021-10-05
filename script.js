let pipes = [];
var gravity = 0.25;
var y = 200;
var vy = -1.0;
var frog;

function preload() {
  bg = loadImage('pictures/ass.jpg');
  ps = loadImage('pictures/paddenstoel.png');
  fr = loadImage('pictures/frog.png')
}

class Paddenstoel{
  constructor(x, y, w, h, top, bottom, speed){
    this.x = x;
    this.y= y;
    this.w = 50;
    this.h = random(80,140);
    this.top = (200 + (200-this.h));
    this.bottom = (200-this.h);
    this.speed = 1;
    }
  drawPipe(){
    // hoe beide rijen random lengte?
    rect(this.x, this.y, this.w, this.h);
    rect(this.x, 400 - this.h, this.w, this.h);
    noStroke();
    // dit doet t niet voor some reason
    // if (frog.y < this.top || frog.y > height - this.bottom) {
    //   if (frog.x > this.x && frog.x < this.x + this.w) {
    //     fill("red")
    //   }
    // }
  }
  movePipe(){
    this.x -= this.speed;
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
    this.y = constrain(this.y, 200, 400);
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
  if (frameCount % 200 == 0) {
    pipes.push(new Paddenstoel(550,0,this.w,this.h));
  }
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].drawPipe();
    pipes[i].movePipe();
  }
}