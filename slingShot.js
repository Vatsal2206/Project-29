class SlingShot{
    constructor(bodyA,pointB){
       var options = {
           bodyA : bodyA,
           pointB : pointB,
           stiffness : 0.04,
           length : 10
       }
   this.pointB = pointB;
   this.sling = Constraint.create(options)
   World.add(world, this.sling)
    }
   
   fly(){
       this.sling.bodyA = null;
   
   
   }
   
   display(){
       fill(252, 3, 127)
       strokeWeight(5)
       stroke(252, 3, 127)
       if(this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;
           line(pointA.x,pointA.y,pointB.x,pointB.y)   
       }
   
   }
   }