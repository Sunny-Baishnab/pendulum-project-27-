
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var constraintrope1;
function preload()
{
	backgroundImg = loadImage("Images.jpg");
}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
    roof = new Roof(400,100,500,20);
    bob1 = new Bob(20,300);
    bobDiameter=40;
    rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);

    bob2 = new Bob(20,300);
    bobDiameter=40;
    rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);

    bob3 = new Bob(20,300);
    bobDiameter = 40;
    rope3 = new Rope(bob3.body,roof.body,0,0);

    bob4 = new Bob(20,300);
    bobDiameter=40;
    rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0);

    bob5 = new Bob(20,300);
    bobDiameter=40;
    rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);
  
  roof.display();
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  bob3.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();
  drawSprites();
  if(keyDown(UP_ARROW)){
	  keypressed();
  }
}
function keypressed(){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
}


