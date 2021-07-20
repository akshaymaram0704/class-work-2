const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var cupImg, ballImg, tableImg;
var cup, cup2, cup3, cup4, ball, restingBody
let engine;
let world;













function preload(){
  cupImg = loadImage("cup.png")
  ballImg = loadImage("ball.png")
  tableImg = loadImage("table.png")
  
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  restingBody = Bodies.rectangle(211,460,70,10)
  World.add(world,restingBody);
  restingBody.isStatic = true
  cup = Bodies.rectangle(280,120,70,10)
  World.add(world, cup);
  cup.isStatic = true
  cup2 = Bodies.rectangle(350,120,70,10)
  World.add(world, cup2);
  cup2.isStatic = true
  cup3 = Bodies.rectangle(210,120,70,10)
  World.add(world, cup3);
  cup3.isStatic = true
  cup4 = Bodies.rectangle(140,120,70,10)
  World.add(world, cup4);
  cup4.isStatic = true
  slingshot = new SlingShot(ball, {x:200,y:400})
  
  
  

  
}

function draw() 
{
  background("white");
  background(tableImg);
  Engine.update(engine);
  imageMode(CENTER);
  ellipseMode(RADIUS);
  ball = Bodies.circle(211,414,40)
  ball.isStatic = true
  World.add(world, ball)
  image(ballImg,ball.position.x, ball.position.y, 80,80);
  image(cupImg, cup.position.x, cup.position.y,80,80)
  image(cupImg, cup2.position.x, cup2.position.y,80,80)
  image(cupImg, cup3.position.x, cup3.position.y,80,80)
  image(cupImg, cup4.position.x, cup4.position.y,80,80)
  console.log(cup.speed)
  slingshot.display()
  


  
  
  

  
  
  

  
  drawSprites();


}


function mouseDragged(){
    
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});

}


function mouseReleased(){
slingshot.fly();

}


