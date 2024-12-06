let r;
let g;
let b;
let x = 250;
let y = 250;

//let time = 0;

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  //time += deltaTime;
  frameRate(15);
  r = map(x, 500, 0, 0, 255, true);
  g = map(y, 500, 0, 0, 255, true);
  fill(r, g, 100);
  
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  //canvas boundaries
  
  textSize(50);
  text("brain", x, y,);
  
  let jitter = map(mouseX, 0, width, 1, 150);  

  push();
  if (mouseX < 200) {
    background(141, 191, 252, 75);
    x = x + random(-jitter / 150, jitter / 150);  
    y = y + random(-jitter / 150, jitter / 150);
    
    fill(255, 255, 255);
    textSize(100);
    text("☀︎", 20, 100); 
  }
  pop();
  
  push();
  if (mouseX < 400) {
    background(37, 85, 148, 75);
    x = x + random(-jitter / 50, jitter / 50);  
    y = y + random(-jitter / 50, jitter / 50);
  }
  if (mouseX >= 200 && mouseX < 400) {
    fill(255, 255, 255);
    textSize(100);
    text("☁︎", 20, 100); 
  } 
  pop();
  
  push();
  if (mouseX < 600) {
    background(2, 17, 38, 75);
    x = x + random(-jitter * 2, jitter * 2);  
    y = y + random(-jitter * 2, jitter * 2);
  }
  if (mouseX >= 400 && mouseX < 600){
    fill(255, 255, 255);
    textSize(100);
    text("☾⋆⁺₊⋆", 20, 100);
  }
  pop();
}