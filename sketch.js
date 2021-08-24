
var blower,ball,blowerMouth



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ball=new Ball(50,50)
  blower=new Blower(150,250,20,50)
  blowerMouth=new Blowermouth(100,200,50,50)
}

function draw() {
  background(255,255,255); 
  ball.show()
  blower.show()
  blowerMouth.show()
  drawSprites();
}