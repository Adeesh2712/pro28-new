class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:2,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
    
      var pos =this.body.position;
      var angle = this.body.angle;  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  