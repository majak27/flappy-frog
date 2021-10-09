class Pillar {
  constructor(x, y, h, c, hearts) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = 50;
    this.c = "green";
    this.hearts = 5;
  }

  drawPillar() {
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    this.x -= 3;
  }

  hit() {
    if (frog.x + frog.w - 20 > this.x && frog.x < this.x + this.w) {
      if (frog.y + frog.h > this.y && frog.y < this.y + this.h) {
        this.c = "red";
        gameState =2;
      }
    }
  }
}