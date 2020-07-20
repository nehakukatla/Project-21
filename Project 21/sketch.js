var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="black";
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background("white"); 
  bullet.velocityX=speed;
 //if(wall.x-bullet.x < (bullet.width+wall.width)/2){
 //  bullet.velocityX=0;
 //  var deformation=0.5*weight*speed*speed/22509;
 //  if(deformation>180){
 //    bullet.shapeColor="red";
 //  }
 //  if(deformation<180 && deformation>100){
 //    bullet.shapeColor="yellow";
 //  }
 //   if(deformation<180){
 //     bullet.shapeColor="green";
 //   }
 //}

 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   
   if(damage>10){
     wall.shapeColor = "red";
   }
   if(damage<10){
     wall.shapeColor="green";
   }
  }

  drawSprites();
}