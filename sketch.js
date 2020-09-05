var car, wall, wallimg;
var speed, weight, deformation;
var carcolor = prompt("Choose your car color between: Blue, Orange, and Purple");

function preload(){
wallimg = loadImage("wall.png");
}

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  if (carcolor==="blue"||carcolor==="Blue"){
    car.shapeColor = "blue";
}
if (carcolor==="orange"||carcolor==="Orange"){
  car.shapeColor = "orange";
}
if (carcolor==="Purple"||carcolor==="purple"){
car.shapeColor = "purple";
}

  wall = createSprite(1500, 200, 60, height/2);
  wall.addImage("wallimg", wallimg);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background("black");

  if(wall.x-car.x<(car.width+wall.width/2)){
    car.velocityX = 0;
    deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor = rgb(255,0,0);
      text("You have a lethal car", 800, 300);
    }
    if(deformation<180&&deformation>80){
      car.shapeColor = rgb(230,230,0);
      text("You have an average car",800, 300);
    }
    if(deformation<80){
      car.shapeColor = rgb(0,255,0);
      text("You have a good car",800, 300);
    }
  }

  drawSprites();
}