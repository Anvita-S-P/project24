
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
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(300,490,600,10);
   dustBin1=new dustBin(450,480,190,10);
   dustBin2=new dustBin(350,457,10,55);
   dustBin3=new dustBin(550,457,10,55);
   paper=new Paper(150,50,20);

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
      

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});



	}
}

