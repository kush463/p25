const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1 , dustbin2 , dustbin3;
var ground1 ;

function preload()
{
 
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  dustbin1 = new dustbin(1200 , 650);
  ground1 = new ground(800,650,1600,20);
  paperObject = new paper(100 , 450 , 70);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255, 255, 255 );
  
  drawSprites();

  ground1.display();
  dustbin1.display();
  paperObject.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paperObject.body , paperObject.body.position ,{x:280 , y:-310});
  }
}
