class Bob {
    constructor(x,y){
        var options={
            isStatic:false,
            density:1
        }
        this.body=Bodies.circle(x,y,20,options);
        this.radius=20;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("purple");
        var pos=this.body.position;
        ellipse(pos.x,pos.y,20,20);
        
    }
}