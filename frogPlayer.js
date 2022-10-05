class FrogPlayer {
  constructor(vy, y, w, h, x, gravity) {
    this.vy = vy;
    this.y = y;
    this.y = 125;
    this.w = 50;
    this.h = 50;
    this.x = 150;
    this.gravity = 0.30;
  }

  draw() {
    image(bee, this.x, this.y, this.w, this.h);

    if (this.y == 350) {
      gameState = 2;
    }
  }

  move() {
    this.vy += this.gravity;
    this.y += this.vy;
    this.y = constrain(this.y, 0, 350);
  }
}