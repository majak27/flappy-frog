let pillars = [];
var gravity = 0.35;
var y = 200;
var vy = -1.0;
var frog;
var gameState = 0;

function setup() {
  createCanvas(550, 400);
  frog = new Frog(-0.5, 150, 0.25);

}


function draw() {
  if (gameState == 0){
    background("red");
    function keyPressed() {

    if (keyCode == 32) {
      gameState = 1;
    }

    // if (keyCode == 50) {
    //   gameState = 2;
    // }

    // if (keyCode == 51) {
    //   gameState = 0;
    // }
}
  }
  else if (gameState == 1){
    game();
    background(bg);
    frog.draw();
    frog.move();
    if(frameCount % 60 == 0){   
      let randomHeight = random(height - 150);

      pillars.push(new Pillar(550,0, randomHeight));
      pillars.push(new Pillar(550,randomHeight + 150, 1000));
    }
    pillars.forEach(p => p.drawPillar());
  }


}

function game(){}
  function preload() {
    bg = loadImage('pictures/bg.gif');
    fr = loadImage('pictures/frog.png')
  }


  class Pillar {
    constructor(x, y, h, top, bottom) {
      this.x = x;
      this.y = y;
      this.h = h;
      this.w = 50;
      this.top = (200 + (200-this.h));
      this.bottom = (200-this.h);
      this.c = "#b2d4bd";
    }
    
    drawPillar() {
      fill(this.c);
      noStroke();
      rect(this.x, this.y, this.w, this.h);
      this.x -= 3;    
      
      // dit doet t niet voor some reason
      if (frog.x + frog.w > this.x && frog.x < this.x + this.w) {
        if (frog.y + frog.h > this.y && frog.y < this.y + this.h) {
          this.c = "red";
        }
        }
        else{
          this.c = "green";
        }
      
      // if (frog.y < this.top && frog.y > height - this.bottom) {
      //   this.c = "orange";      
      // }
    }
  }

  class Frog{
    constructor(vy, y, gravity){
      this.vy = vy;
      this.y = y;
      this.w = 60;
      this.h = 60;
      this.x = 150;
      this.gravity = gravity;
    }

    draw(){
      image(fr, this.x, this.y, this.w, this.h);
    }

    move(){   
      this.vy += this.gravity;
      this.y += this.vy;
      // dit hieronder doet raar met de foto als frog
      this.y = constrain(this.y, 0, 400);
    } 
  }

  function keyPressed(){
    if(keyCode == 32){
      frog.vy = -5; 
    }
  }

