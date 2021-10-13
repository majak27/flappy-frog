class Frog {
  constructor(vy, y, gravity, hearts) {
    this.vy = vy;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.x = 150;
    this.gravity = 0.40;
    this.hearts = 3;
  }

  draw() {
    image(fr, this.x, this.y, this.w, this.h);
  }

  move() {
    this.vy += this.gravity;
    this.y += this.vy;
    this.y = constrain(this.y, 0, 350);
  }
}
