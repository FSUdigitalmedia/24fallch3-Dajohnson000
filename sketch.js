let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 3;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 20;      // diameter of the ball
let x2 = 50
let y2 = 20
let x2Speed = 2
let y2Speed = 5
let d2 = 30
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220); // try commenting this out!
 
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

  fill("Yellow")
  
  ellipse(x1, y1, d1);

  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1; 
  }
  x2 = x2 + x2Speed;
  if (y2 > height || y2 < 0) {
    y2Speed = y2Speed * -1;
  }
  y2 = y2 + y2Speed

  fill("Pink")
  
  rect(x2, y2, d2);

}