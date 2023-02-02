class Cannon{
    constructor(x,y,widht,height,angle){
        this.x=x;
        this.y=y;
        this.widht=widht;
        this.height=height;
        this.angle=angle;
        this.image=loadImage("assets/CANON.png");
        this.base=loadImage("assets/cannon_base.png");
    } 
    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.widht,this.height);
        pop();
        image(this.base,70,20,200,200);

        noFill();
    }
    
    
}
