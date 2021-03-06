var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var mousex;
var mousey;
document.addEventListener("mousemove", function (e) {
  mousex = e.clientX;
  mousey = e.clientY;
})

// returns random inclusive integers
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//create paddle
function paddle(x,y,l,h,color){
  this.x = x;
  this.y = y;
  this.l = l;
  this.dy = 0;
  this.h = h;
  this.color = color;
  this.update = function(){

    //move paddle to mouse location
    this.y = mousey-this.h/2;

    //draw paddle
    this.draw();
  }

  this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.l,this.h)
  }
}


//create ball
function Ball(x,y,size,dx,dy,color) {
  this.x = x;
  this.y = y;
  this.dx = dy;
  this.dy = dx;
  this.size = size;
  this.color = color;

  //render function
  this.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.size,this.size);
  }

  //update function (includes collision)
  this.update = function () {

    //if in paddle, reverse x velocity
    for (paddle of paddles) {
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
      this.dx = rand(0,1) ? rand(3,6) : rand(-6,-3); // TODO: make it not just integer
      this.dy = rand(-400,400)/50;
    }

    //update velocity
    this.x += this.dx;
    this.y += this.dy;

    //draw
    this.draw();
  }
}

//create paddles
var paddles = [];
paddles.push(new paddle(450,c.width/2,20,70,"green"));
paddles.push(new paddle(30,c.width/2,20,70,"red"));

//create ball
var ball = new Ball(5,5,10,0,0,'blue');

//game loop
function loop() {
  ctx.clearRect(0,0,c.height,c.width)
  for (paddle of paddles) {
    paddle.update();
  }
  ball.update();
}
setInterval(loop, 20);
