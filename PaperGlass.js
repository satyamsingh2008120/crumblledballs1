class PaperGlass {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 30,options);
      this.radius = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(1);
      stroke("green");
      fill("green");
      ellipseMode(CENTER);
      ellipse(0, 0, this.radius);
      pop();
    }
  };