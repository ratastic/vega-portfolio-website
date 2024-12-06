function setup() {
  createCanvas(600, 600);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background("#2e3863");
  
  console.log (mouseX,mouseY);
  
  push();
    fill("#131a36");
    circle(350, 340, 275);
  pop();
  
  push();
    stroke(41, 34, 12);
    strokeWeight(50);
    fill("#c2a44a");
    circle(300, 390, 275);
  pop();
  
  push();
    stroke(41, 34, 12);
    strokeWeight(5);
    fill("#ded5b8");
    circle(300, 390, 200);
  pop();
  
  push();
    fill(41, 34, 12);
    circle(300, 390, 50);
  pop();
  
  push();
    stroke(41, 34, 12);
    strokeWeight(7);
    translate(300, 390);
  
    for (let i = 0; i < 8; i ++){
      rotate(45);
      line (0, 50, 0, 90);
    }
  pop();
  
  push();
    stroke(41, 34, 12);
    strokeWeight(3);
    translate(300, 390);
  
    for (let i = 0; i < 32; i ++){
      rotate(11.25);
      line (0, 70, 0, 90);
    }
  pop();
  
  push();
    fill("#131a36");
    ellipse(350, 100, 300, 100);
  pop();
  
  push();
    stroke(41, 34, 12);
    strokeWeight(50);
    fill("#85670a");
    ellipse(300, 150, 300, 100);
  pop();
  
  push();
    fill("#85670a");
    rect(275, 215, 50, 25);
  pop();
  
}