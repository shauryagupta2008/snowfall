const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var Engine,World
var bg
var fall=[]
function preload(){
bg=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
 engine=Engine.create();
world=engine.world
}

function draw() {
  background(255,255,255);  
  background(bg);
  Engine.update(engine);   
  
 if(frameCount%5===0){
   fall.push(snowfall=new Snowfall())
 }
  
 for(var i=0;i<fall,length;i++){
   fall
 }
  drawSprites();
}