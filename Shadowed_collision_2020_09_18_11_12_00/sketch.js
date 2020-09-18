var player,bananaGroup,obstaclesGroup,invisibleGround,ground,spawnClouds;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  console.log(gameState);

  var survivalTime=0;

stroke("white");
textSize(20);
fill("white");
text("Score: " + Score,500,50);

  if(gameState === PLAY){
    ground.velocityX = -(6 + 3*count/100);
    Score=Score+Math.round(World.frameRate/60);
    
    if (ground.x < 100){
      ground.x = ground.width/2;
    }
    
   if(keyDown("space") && player.y >= 359){
      player.velocityY = -12 ;
      playSound("jump.mp3");
    }
  
    player.velocityY = player.velocityY + 0.8;
    
    spawnClouds();
  
    spawnObstacles();
    
    if(ObstaclesGroup.isTouching(monkey)){
      gameState = END;
      player.scale=0.2;
    }
  }
  
  else if(gameState === END) {
    
    ground.velocityX = 0;
    player.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    BananaGroup.setVelocityXEach(0);
    
    ObstaclesGroup.setLifetimeEach(-1);
    BananaGroup.setLifetimeEach(-1);
    
    
  }
  
  player.collide(invisibleGround);
  
  drawSprites();

}