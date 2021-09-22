let x = 250;
let y = 250;

function setup() {
	createCanvas(500, 500);
  background(50);
}

function draw() {
	ellipse(x,y,50,50)
  if (key===" "){
    y = y - 10
  }
}

