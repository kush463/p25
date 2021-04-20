class paper{

    constructor(x , y , r)
    {
    var option ={
             isStatic: false,
             friction:0.5,
             restitution:0.3,
             density:1.2
}
     this.x = x;
     this.y = y;
     this.r = r;
     this.body = Bodies.circle(this.x , this.y , this.r/2 , option);
     this.image = loadImage("paper.png");
     World.add(world , this.body);
     
    }
    display()
    {
        var paperposition = this.body.position;
        push();
        translate(paperposition.x , paperposition.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill(128,0,128);
        image(this.image,0,0,this.r , this.r);
        pop();
    }
    

}