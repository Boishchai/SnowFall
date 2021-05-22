var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var bg, boy;
var boyI;
var edge1, edge2;

var snow = [];

function preload()
{
  bg = loadImage("snow1.jpg");
  boyI = loadImage("Boy.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  boy = createSprite(300, 300, 50, 50);
  boy.addImage(boyI);
  boy.scale = 0.1;
  boy.velocityX = -0.5;
  edge1 = createSprite(5,200,10,400);
  edge1.visible = false;
  edge2 = createSprite(795,200,10,400);
  edge2.visible = false;
}

function draw() {
  background(bg);  
  Engine.update(engine);
  if(boy.isTouching(edge1))
  {
    boy.bounceOff(edge1);
  }
  if(boy.isTouching(edge2))
  {
    boy.bounceOff(edge2);
  }
  if(frameCount % 90 === 0)
  {
    snow.push(new Snow(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  for (var m = 0; m < snows.length; m++) {
    snow[m].display();
  }

  drawSprites();
}