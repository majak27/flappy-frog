var gravity = 0.1;
var y = 50;
var vy = -1.0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, y, 60, 60);
  vy += gravity;
  y += vy;
  y = constrain(y, 30, 370);

}

function keyPressed() {
  if (keyCode === 32) {
   vy = -5; 
  }  
}