const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var box1
var box2
var ground1
function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world
 box1=new box(30,80,50,50)
 box2=new box(50,50,50,50)
ground1=new ground(400,350,800,20)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  box1.display()
  box2.display()
  ground1.display()
}
