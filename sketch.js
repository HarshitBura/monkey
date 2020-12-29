
var monkey , monkey_running;
var banana , bananaImage, bananaGroup; 
var obstacle, obstacleImage, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
  
monkey = createSprite(70,300,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.10; 

ground = createSprite(200,335,800,10);
ground.velocityX= -2;
  
bananaGroup = createGroup();  
obstacleGroup = createGroup();   
  
  
  score=0;
 var survivalTime=0;
}


function draw() {
background("white");
  
if(keyDown("space")){
  monkey.velocityY=-12;
} 
  
monkey.velocityY = monkey.velocityY + 0.8
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
monkey.collide(ground);  
 
food();
obstacles(); 
  
 stroke("white");
 textSize(20);
 fill("black");
 text("score:"+score,300,50); 
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
 
 if(obstacleGroup.isTouching(monkey)){
  
   obstacleGroup.setLifetimeEach(-1);
   bananaGroup.setLifetimeEach(-1);
    bananaGroup.setVelocityXEach(0);
     obstacleGroup.setVelocityXEach(0);
 }
drawSprites();  
}

function food(){

if(frameCount%80===0){
  
 banana = createSprite(430,200,20,20); 
 banana.velocityX=-2;
 banana.y = Math.round(random(120,200));
 banana.addImage("left",bananaImage); 
 banana.scale=0.1;
 banana.lifetime=200;
 bananaGroup.add(banana);
  
}
}

function obstacles(){
 
 if(frameCount%300===0) {
obstacle = createSprite(430,310,20,20);
obstacle.addImage("hi",obstacleImage);
obstacle.scale= 0.1; 
obstacle.velocityX=-2;   
obstacle.lifetime=200;
obstacleGroup.add(obstacle);

 }

}


