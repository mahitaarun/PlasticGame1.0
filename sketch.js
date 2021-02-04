const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var bg_image,bg
var engine, world




function preload(){
bg_image = loadImage("characters/image.jpg");
}


function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world
  bg = createSprite(200,100,50,50)
  //createSprite(400, 200, 50, 50);
  waterBottle = new Recyclable(450,200,50,60);
  ground = new Ground(600,height,1530,100);
  //bg_image.resize(50,50);
  Pizza1 = new Pizza(500,150,30,40);
  Pizza2 = new Pizza(200,300,30,40);
  waterBottle2 = new Recyclable(350,100,50,60);
  Rotten1 = new Rotten(950,110,50,60);
  Log1 = new Log(600,210,50,60);
  Apple1 = new Apple(750,110,50,60);
  Girl = new Girl(1100,110,150,200);
  Plastic1 = new Plastic(100,110,50,60);
  Recycle = new Blue(400,210,150,200);
  Green = new Green(690,110,150,200);
  Yellow = new Yellow(950,110,150,200);

  

}

function draw() {
  background(bg_image); 
  Engine.update(engine) 
  bg_image.resize(50,50)
  waterBottle.display();
  ground.display();
  Pizza1.display();
  Pizza2.display();
  waterBottle2.display();
  Rotten1.display();
  Log1.display();
  Apple1.display();
  Girl.display();
  Plastic1.display();
  Recycle.display();
  Green.display();
  Yellow.display();

}
