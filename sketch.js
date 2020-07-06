


var wall,thickness;
var bullet,speed,weight;


function setup() {

createCanvas (1300,400);

  thickness=Random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
   
  speed=Random(223,321);
  weight=Random(30,52);
}

function draw() {
  background("lightblue");  

  if (hasCollided(bullet,wall)) {
    
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10) {
      wall.shapeColor=color(255,0,0);
    }
    
    if (damage<10) {
      wall.shapeColor=color(0,255,0);
    }


  }
  

  drawSprites();
}

