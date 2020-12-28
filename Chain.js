class Chain{

    //While calling from sketch, body A and body B can be anything
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }

        //Constraint is a rule created for Chain , so constraint create assigned to chain
        this.chain = Constraint.create(options);

        //chain is added to the world
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);

        //line is going to join 2 bodies
        //Body A will have coordinates pointA.x, pointA.y
        //Body B will have coordinates pointB.x,pointB.y 
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}