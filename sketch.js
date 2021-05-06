
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(50,20,10);
	ground = new Ground(400,690,800,5);
	bin = new Bin(650,680,200,20);
	bin1 = new Bin(540,640,20,100);
	bin2 = new Bin(760,640,20,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball.display();
 ground.display();
 bin.display();
 bin1.display();
 bin2.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:15, y:-15});
	}
}



