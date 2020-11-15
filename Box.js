//name of the class.
class Box {


constructor (x,y,width,height) {//constructor take x,y,width and height.

    var options={// properties for the box.
        
        restitution:0.8,
        density:1,
        friction:1

    }
  this.body=Bodies.rectangle(x,y,width,height,options);//making box(this.body) using bodies.
  this.width=width;//giving width and height
  this.height=height;
  World.add(world1,this.body);// adding box (this.body) into world 1.

}
 
display(){

    var pos=this.body.position;// taking postion of this.body men box
    var angle = this.body.angle;// taking angle of body this.body
    push();// so that  box is only at angle
    translate(pos.x,pos.y);// shift the box
     rotate(angle);//rotate the box 
    rectMode(CENTER);
     fill("yellow");
     rect(0,0,this.width,this.height);//when we are writting translate then x,y becomes 0.s
    pop();
}

}