var boy,laser,hallway,boyImage,laserImage,hallwayImage

function preload(){

boyImage = loadImage("sprites/boy.png");
laserImage = loadImage("sprtites/laser.png");
hallwayImage = loadImage("sprites/hallway.png");

}

function setup() {
createCanvas(1400,700);
bg = createSprite(700,350,1400,700);
bg.addImage(hallwayImage);

boy = createSprite(200,100,20,20);
boy.addImage(boyImage);


} 

function draw() {
  background(0);
bg.velocityX = -10
 if(bg.x < 0){
 bg.x = 700;
 }

 if(keyDown("up")){
boy.velocityY = -15;
 }
 boy.velocityY = boy.velocityY + 8; 

  drawSprites();
}