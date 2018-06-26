//constructor for 'Ball'
function Ball(x,y,size,dir,v,color) {
  this.x = x;
  this.y = y;
  this.dir = dir;
  this.v = v;
  this.dx = Math.sin(this.dir)*this.v;
  this.dy = Math.cos(this.dir)*this.v;
  this.size = size;
  this.color = color;
  this.corners = function(){ //0:top left, 1:top right, 2:bottom left, 3:bottom right
    return [[this.x,this.y],[this.x+this.size,this.y],[this.x,this.y+this.size],[this.x+this.size,this.y+this.size]];
  }

  //render function
  this.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.size,this.size);
  }

  //update function (includes collision)
  this.update = function () {

    //if in paddle, reverse x velocity
    /*for (paddle of paddles) {
      if (this.x+this.size>paddle.x && this.x<paddle.x+paddle.l && this.y<paddle.y+paddle.h && this.y+this.size>paddle.y) {
        this.dx = -this.dx
      }
    }

    //if on edge, reverse velocity
    if (this.y<0 || this.y + this.size > c.height){
      this.dy = -this.dy;
    }

    //if out of bounds, return to center, give random velocity
    if (this.x<0 || this.x + this.size >c.width || this.dx == 0) {
      this.x = c.width/2;
      this.y = c.height/2;
      this.dx = rand(0,1) ? rand(3,6) : rand(-6,-3);
      this.dy = rand(-400,400)/50;
    }*/

    //update ball position
    this.dy = Math.sin(this.dir)*this.v;
    this.dx = Math.cos(this.dir)*this.v;
    this.x += this.dx;
    this.y += this.dy;

    //draw the ball
    this.draw();
  }
}
