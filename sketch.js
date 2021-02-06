
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree1;
var boy1;
var rope;
var stone;
//522var gameState = "onSling";
var mango1, mango2, mango3, mango4, mango5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,650,800,20);
	tree1 = new tree(590,370,450,550);
	boy1 = new Boy(100,585,150,200);
	stone = new Stone(50,600,40,40);
	rope = new Rope(stone.body,{x:50,y:500});
//	mango1 = new mango(550,350,5,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 //mango1.display();
 tree1.display();
 boy1.display();
 stone.display(); 
 rope.display();

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
	
	rope.fly();

}



