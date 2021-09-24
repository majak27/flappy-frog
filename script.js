let y = 250;

function setup() {
	createCanvas(500, 500);
  background(100);
}

function draw() {

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  ellipse(250, y, 50, 50);
}

