
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1 , groundObJ , left ;
var engine;
var world;


function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
  isStatic:false,
  restitution:0.03,
  friction:0,
  density:1.2

	}
  
	ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

	
  ellipseMode(RADIUS);

  ground1 =new Ground(200,390,400,20);

  groundObJ= new Ground(width/2,670,width,20);
  left =new Ground(1100,600,20,120);

  Engine.run(engine);

}


function draw() {
  
  background("red");

  Engine.update(engine);

  rectMode(CENTER);

  groundObJ.display();
  left.display();
  ground1.display();

  ellipse(ball.position.x,ball.position.y,20,20);
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball,{x: 0, y:0},{x:85,y:-85});
  
  }
}
