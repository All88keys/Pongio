//create paddle
function Paddle(x,y,l,h,color){
  this.x = x;
  this.y = y;
  this.l = l;
  this.h = h;
  this.dy = 0;//// TODO: Add this.oldY to calculate this, to change the ball speed when it hits the paddle.
  this.color = color;
  this.corners = function(){ //0:top left, 1:top right, 2:bottom left, 3:bottom right
    return [[this.x,this.y],[this.x+this.l,this.y],[this.x,this.y+this.h],[this.x+this.l,this.y+this.h]];
  }
  this.update = function(){
    //move paddle to mouse location
    this.y = mouseY-this.h/2;

    //draw paddle
    this.draw();
  }

  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.l,this.h)
  }
}
