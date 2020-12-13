// to create variables for car and wall
var car, wall;
// to create variables for speed and weight 
var speed, weight;
// creating the setup function 
function setup() {
  // to create the canvas of the size we want 
  createCanvas(600,400);
  // To create a sprite for wall 
  car = createSprite(50,200,50,50);
  // To create sprite for wall 
  wall = createSprite(500,200,60,height/2);
  // to set random number for speed 
  speed = random(55,90);
  // to set random number for weight 
  weight = random(400,1500);
}
// Creating the draw function 
function draw() {
  // Assigning the background color 
  background(255,255,255);
 // setting the velocity for the car 
  car.velocityX = speed;
 // writing if conditions for color changing when hit to wall 
 // writing if condition to write the code of deformation if the symbol is "greate than"
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityY = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor = (255,0,0);
      car.velocityX=0;
    }
    // wrotong if else condition to write the code of deformation if the symbol is "lesser than"
    else if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
      car.velocityX = 0;
    }
    else if(deformation<100){
      car.shapeColor = color(0,255,0);
      car.velocityX = 0;
    }
  }
  
  drawSprites();
} 








//  ---------------- END OF PROJECT CODE PLEASE CHECK THE LINK SUBMITTED TO GET THE OUTPUT ---------------------------------------