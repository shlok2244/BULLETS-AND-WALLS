function setup() {
  createCanvas(1600,400);
  bulletspeed=random(223,321);
  bulletweight=random(30,52);
  thickness=random(22,83)
  bullet=createSprite(50,200,20,20);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=bulletspeed;
}
var bullet,wall;
var speed,weight;
var thickness;
function draw() {
  background(255,255,255);  
  
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*bulletweight*bulletspeed*bulletspeed/(thickness*thickness*thickness)
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0); 
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
}