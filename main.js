let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

//mouse input
let mouseX;
let mouseY;
document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

//returns random numbers
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// returns random inclusive integers
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//create paddles
let paddles = [];
paddles.push(new Paddle(450,c.width/2-35,20,70,"pink"));
paddles.push(new Paddle(30,c.width/2-35,20,70,"#ABCDEF"));

//create ball
let ball = new Ball(c.width/2,c.height/2,10,rand(0,Math.PI/4 ),rand(3,8),'blue');

//game loop
function loop() {
  ctx.clearRect(0,0,c.height,c.width)
  for (paddle of paddles) {
    paddle.update();
  }
  ball.update();
  requestAnimationFrame(loop);
}

//start loop
requestAnimationFrame(loop);
