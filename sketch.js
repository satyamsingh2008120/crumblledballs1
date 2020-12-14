
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PaperGlass1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	PaperGlass1=new PaperGlass(200,600);

	dustbin1=new Dustbin(width/2+200,645,10,80);
	dustbin2=new Dustbin(width/2+350,645,10,80);
	dustbin3=new Dustbin(width/2+275,680,140,10);
  
	ground=new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  PaperGlass1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){

    Matter.Body.applyForce(PaperGlass1.body,PaperGlass1.body.position,{x:130,y:-130});

  }
}
