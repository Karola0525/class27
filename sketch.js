const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,tower;



function preload() {

 backgroundImage=loadImage("./assets/background.gif")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
 
  
  
 
}

function draw() {
  background(189);
 image (backgroundImage,0,0,width,height);
  Engine.update(engine);

  
   
}
