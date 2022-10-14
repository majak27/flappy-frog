class Pillar {
  constructor(x, y, h, w, c) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = 50;
    this.c = "#2d6b4e";
  }

  //onderkant van de pillars voor in de think
  GetBottom() {
    return this.y + this.h;
  }

  // laat de pillars zien
  drawPillar() {
    fill(this.c);
    stroke("white");
    strokeWeight(2);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.y, this.w, this.h);
    this.x -= 3;
  }

  isColliding(frog) {
    if (frog.x + frog.w - 20 > this.x && frog.x < this.x + this.w) {
      if (frog.y + frog.h > this.y && frog.y < this.y + this.h) {
        return true
      }
    }
    return false
  }
}

