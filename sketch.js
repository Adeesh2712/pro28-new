
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paper1;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	paper1=new Paper(123,200,101,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();
  
  kewPreesed();

}

function kewPreesed(){

if(keyDown("up")){
	paper1.body.position.y=paper1.body.position.y-12;
	paper1.body.position.x=paper1.body.position.x+7.5;
}
}






