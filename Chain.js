class Rope{
    constructor(Body1,Body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:Body1,
            bodyB:Body2,
            stiffness:1,
            length:200,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Rope=Constraint.create(options);
        World.add(world,this.Rope);
    }
    display(){
        var pointA=this.Rope.bodyA.position;
        var pointB=this.Rope.bodyB.position;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
    }
}