const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    

    box=new Box(200,200,50,20);
    box1=new Box(230,100,30,40);
    ground=new Ground();
}
function draw(){
    background(0);
    Engine.update(engine);
    
   box.display();
   box1.display();   
   ground.display(); 
}