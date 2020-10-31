
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var engine,world;
var paper;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(400,690,800,10);
   dustBin1=new dustBin(650,654,190,10);
   dustBin2=new dustBin(550,630,10,55);
   dustBin3=new dustBin(750,630,10,55);
   paper=new Paper(200,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 dustBin1.display();
 dustBin2.display();
 dustBin3.display();
 paper.display();
}

function keyPreesed(){
	if( keyCode===UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paper.body.position,{x:85,y:-85});



	}
}

