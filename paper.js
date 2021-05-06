class Ball{
    constructor(x, y, r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density :1.2,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r
        World.add(world, this.body);
        }

    
    
    display(){
      var pos =this.body.position;
      fill("brown");
      circle(pos.x, pos.y,2*this.radius);
    }
}