
// -------------------P5.JS sketch to create background------------------------

var numBalls = 700;
var spring = 0.005;
var gravity = 0.03;
var friction = -0.5;
var balls = [numBalls];
 
function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
  smooth();
  for (var i = 0; i < numBalls; i++) {
    balls[i] = new Ball(random(width), random(height), random(5, 15), i, balls);
  }
}
 
function draw() {
  background(249, 253, 252);
  for (var i = 0; i < numBalls; i++) {
  
      balls[i].collide();
      balls[i].move();
      balls[i].display();
  
  }
}
 
function Ball(xin, yin, din, idin, oin) {
  this.vx = 0;
  this.vy = 0;
  this.x = xin;
  this.y = yin;
  this.diameter = din;
  this.id = idin;
  this.others = oin;
   
  this.collide = function() {
    for (var i = this.id + 1; i < numBalls; i++) {
      this.dx = this.others[i].x - this.x;
      this.dy = this.others[i].y - this.y;
      this.distance = sqrt(this.dx*this.dx + this.dy*this.dy);
      var d = this.diameter/2;
      var minDist = this.others[i].d + d;
      if (this.distance < minDist) {
        var angle = atan2(this.dy, this.dx);
        var targetX = this.x + cos(angle) * minDist;
        var targetY = this.y + sin(angle) * minDist;
        var ax = (targetX - this.others[i].x) * spring;
        var ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].this.vx += ax;
        this.others[i].this.vy += ay;
      }
    }  
  }
   
  this.move = function() {
    //vy -= gravity;
    this.y = this.y - 1;
    if (this.y < 0) {
      this.y = height;
    }
    this.x += this.vx/2;
    this.y += this.vy/2;
  }
   
  this.display = function() {
    var alpha = map (this.y, 0, height-50, 0, 255);
    var r = map(this.y, 0 ,height, 247, 192);
    var g = map(this.y, 0 ,height, 248, 226);
    var b = map(this.y, 0 ,height, 155, 242);
    fill(r, g, b, alpha);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
