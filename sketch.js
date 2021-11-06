var ball
var ground1
var ground2
var rightG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(850, 750);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;
var ball_options={
	isStatic:false,
	restitution:0.3,
friction:0,
density:1.2
};
ball=Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
	ground1 = new Ground(width/2,670,width,20)
ground2 = new Ground(1100,600,20,120)
rightG = new Ground(1350,600,20,120)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground1.display()
  ground2.display()
  rightG.display()
  //drawSprites();
 
}
function keyPressed() {
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(ball,ball.position,{x:0,y:-85}) 
}
}
