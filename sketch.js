
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,bg,bg1;
var ground;
var state;
var b1

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bg=loadImage("download.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
   //bg1=createSprite(300,300,600,600);
 // bg1.addImage(bg);
//bg1.scale=3;
//  bg1.velocityX=-4;
//  bg1.x=bg1.width/2;
  
  monkey=createSprite(80,480,600,600);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.2;

  
  ground=createSprite(250,550,600,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
  score=0;
  b1=0
}


function draw() {
  background(20)
  //if(bg1.x<0){
  // bg1.x=bg1.width/2
    //}

  if(ground.x<0){
   ground.x=ground.width/2
    }
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX=0;
   monkey.velocityX=0;
obstacleGroup.setVelocityEach(0);
    FoodGroup.setVelocityEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    b1=b1+1;
  }
 
  drawSprites();
  ob();
  b();
  textSize(20);
  text("Survival Time:"+score,200,100);
  score=score+Math.round(getFrameRate()/60); 
  textSize(20);
  text("Banana:"+b1,200,150);
}
function ob(){
  
if (frameCount%300===0){
  obstacle=createSprite(Math.round(random(100,600)),530,20,20)
  obstacle.velocityX=-4;
  obstacle.lifetime=150;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacleGroup.add(obstacle);
}
}
function b(){
  if(frameCount%80===0){
    banana=createSprite(Math.round(random(100,600)),Math.round(random(320,400)),20,20);
    banana.velocityX=-4;
    banana.lifetime=150;
  banana.addImage(bananaImage);
  banana.scale=0.1;
    FoodGroup.add(banana);
  }
}


