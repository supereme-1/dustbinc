const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var agam,ground,stand,standc;
var engine,world;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;

var block9;
var gameState = "onSling";
function preload(){

}
function setup(){
  if(gameState = "onSling"){
createCanvas(1000, 500);
engine = Engine.create();
world = engine.world;
ground = new Ground(500,450,1000,10);



stone = new Stone(100,200,35);

point1 = new Ground(800,430,150,10);
point2 = new Ground(725,330,10,200);
point3 = new Ground(875,330,10,200);
slingshot = new SlingShot(stone.body,{x:300, y:100});
}
}
function draw() {
  background("green"); 
  Engine.update(engine) 
  ground.display();

  point3.display();
 point2.display();
  stone.display();
  point1.display();
 slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
