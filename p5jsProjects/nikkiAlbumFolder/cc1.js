x2 = 200;
y2 = 380;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(122, 132, 153);
  
  console.log(mouseX, mouseY);
  
  push();
    fill(54, 70, 99);
    ellipse(300, 100, 400);
  pop();
  
  push();
    fill(255);
    textSize(20);
    text("MONOBODY", 275, 25);
  pop();
  
  push();
    fill(0, 0, 0, 90);
    ellipse(100, 250, 150);
  pop();
  
  push();
    stroke("#d6dae1");
    strokeWeight(2);
    line(100, 176, x2, y2);
    line(75, 179, x2 - 39, y2 - 25);
  pop();
}
