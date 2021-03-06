class Pillar {
  constructor(x, y, h, w, c) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = 50;
    this.c = "#2d6b4e";
  }

  drawPillar() {
    fill(this.c);
    stroke("white");
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h);
    this.x -= 3;
  }

  hit() {
    if (frog.x + frog.w - 20 > this.x && frog.x < this.x + this.w) {
      if (frog.y + frog.h > this.y && frog.y < this.y + this.h) {
        gameState = 2;
      }
    }
  }
}

