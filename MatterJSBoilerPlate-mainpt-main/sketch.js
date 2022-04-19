
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2,block3;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800,700);
    
   
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	//Crie os Corpos Aqui.
	var block1_options={
		restitution:0.7,
		
		
	}
	var block2_options={
		restitution:0.01,
		
		
	}
	var block3_options={
		restitution:0.5,
		
		
	}
	var options={
		isStatic: true,
	}
	block1 = Bodies.rectangle(110,50,10,10,block1_options);
    World.add(world,block1);
	
	
	block2 = Bodies.rectangle(350,50,10,10,block2_options);
    World.add(world,block2);

	
	block3 = Bodies.circle(220,10,10,block3_options);
    World.add(world,block3);

	ground = Bodies.rectangle(200,390,400,20,options);
	World.add(world,ground);

rectMode(CENTER);
ellipseMode(RADIUS);
  
}


function draw() {
  background("green");
  Engine.run(engine);
 
  rect(block1.position.x,block1.position.y,10,10);

  rect(block2.position.x,block2.position.y,10,10);

  ellipse(block3.position.x,block3.position.y,10);

  rect(ground.position.x,ground.position.y,400,20);

  
 
 
  drawSprites();

 
}



