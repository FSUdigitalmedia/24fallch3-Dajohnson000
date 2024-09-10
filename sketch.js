let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 3;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 20;      // diameter of the ball
let x2 = 50 // x position of rectangle
let y2 = 20 // y position of rectangle
let x2Speed = 2 // speed in x direction
let y2Speed = 5 // speed in y direction
let d2 = 60 // size of rectangle

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // try commenting this out!
  
 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > height || y1 < 0) {
    y1Speed = y1Speed * -1;  
  }
  y1 = y1 + y1Speed;



  ellipse(x1, y1, d1);
// same as ellipse but for rectangle 
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1; 
  }
  x2 = x2 + x2Speed;
  if (y2 > height || y2 < 0) {
    y2Speed = y2Speed * -1;
  
  }
  y2 = y2 + y2Speed
  
  rect(x2, y2, d2);

}
function keyPressed(){
  if (keyCode == UP_ARROW){
    fill(50,50,50);
  }
  if (keyCode == DOWN_ARROW){
    fill(255,255,255);
  }
}
function mousePressed(){
  console.log("hello")
  fill(random([0], [255]),random([0], [255]),random([0], [255]))
}
