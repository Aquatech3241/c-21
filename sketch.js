
var fixedRect, movingRect;
var gameObject1, gameObject2;
var cloud1, cloud2, cloud3;

function setup() {
  createCanvas(1200,800);
 
  cloud1 = createSprite(600,50,50,25);
  cloud1.shapeColor = "cyan";

  cloud2 = createSprite(1000,100,50,25);
  cloud2.shapeColor = "cyan";

  cloud3 = createSprite(400,75,50,25);
  cloud3.shapeColor = "cyan";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "red";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "red";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,cloud1)){
    movingRect.shapeColor = "blue";
    cloud1.shapeColor = "blue";
  }
  else if(isTouching(movingRect,cloud2)){
    movingRect.shapeColor = "blue";
    cloud2.shapeColor = "blue";
  }
  else if(isTouching(movingRect,cloud3)){
    movingRect.shapeColor = "blue";
    cloud3.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    cloud1.shapeColor = "cyan";
    cloud2.shapeColor = "cyan";
    cloud3.shapeColor = "cyan";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


