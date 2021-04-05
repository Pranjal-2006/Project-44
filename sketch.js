var mons1, mons2, mons3,mario;
var groundImage, ground;

function preload(){
  bg = loadImage("background.JPG");
  ma = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
  groundImage = loadImage("ground2.png");
  obsImg = loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png")

}



function setup() {
 createCanvas(600,350);
  mario = createSprite(50,350,20,50);
  mario.addImage("running",ma);
  ground = createSprite(200,330,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2;
  ground.velocityX = (-2);

 
  
}
function draw() {
  background(bg)
  drawSprites();
}