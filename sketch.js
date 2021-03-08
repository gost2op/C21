var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200, 400, 50, 80);
  car.shapeColor = "green";
  car.debug = true;

  bus = createSprite(400, 400, 50, 80);
  bus.shapeColor = "green";
  bus.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,car)){
    movingRect.shapeColor = "red";
    car.shapeColor = "red";
  }
  else if(isTouching(movingRect,bus)){
    movingRect.shapeColor = "red";
    bus.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    car.shapeColor = "green";
    bus.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(movingRect,fixedRect){

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    return true;
  }
  else {
   return false;
  }
}

//function or methods
//4types of func
//with parameter and with return type
//with parameter and without return type
//without parameter and with return type
//without parameter and without return type
student(aswin,pratham);

student(deepam, raj);

function student(student1,student2){
 
}