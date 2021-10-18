class Snowfall{
    constructor()
  {      
     this.snowfall=Bodies.rectangle(random(1,800),10,10);
     this.snowimage=loadImage("snow4.webp");
     World.add(world,this.snowfall);

  
}
display()
{

    ImageBitmapRenderingContext(CENTER);
    Image(this.snowimage,this.snowfall.position.x,this.snowfall.position.y,10,10);

}
}