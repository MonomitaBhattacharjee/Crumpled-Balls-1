
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground;
var log1, log2, log3;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,570,width,20);
	
	log1=new Dustbin(1200,550,200,20);
	log2=new Dustbin(1100,490,20,100);
    log3=new Dustbin(1300,490,20,100);
	paperBall = new Paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  log1.display();
  log2.display();
  log3.display();
  paperBall.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
	}
}



