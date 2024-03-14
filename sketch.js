const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,tower;// CREAR VARIABLE TOWER



function preload() {
//PRIMERO CARGAR IMAGEN DE FONDO
 backgroundImage=loadImage("./assets/background.gif")
}
function setup() {
//TERCERO CONFIGURAR TAMAÑO DEL CANVAS 
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  //SEXTO CREAR EL OBJETO TORRE
  tower=new Tower(150,350,160,310)
  
 
}

function draw() {
  background(189);
 //SEGUNDO MOSTRAR IMAGEN DE FONDO, CREAR ARCHIVO TOWER
 image (backgroundImage,0,0,width,height);
  Engine.update(engine);
  //SÉPTIMO MOSTRAR EL OBJETO TORRE --- CARGAR IMAGEN EN LA CLASE TORRE
  tower.display();
  
   
}
