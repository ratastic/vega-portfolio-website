function setup() {
  createCanvas(400, 600);
  strokeWeight(2);
  angleMode(DEGREES);
}

function draw() {
  background("#3b0924");
  console.log(mouseX, mouseY);
  
  push();
    strokeWeight(50);
    stroke("#4d4147");
    line(82, 242, -10, 430);
    line(318, 242, 410, 430);
  pop();
  
  catLegs(140, 363, 100, 530, 100, 530, 120);
  catLegs(260, 363, 300, 530, 300, 530, 120);
  
//waist ring
  push();
    strokeWeight(20);
    stroke("#4d4147");
    noFill();
    ellipse(200, 362, 280, 70);
    ellipse(200, 342, 310, 70);
  pop();
  
//lower chest
  push();
    let rows = 13;
    let rectWidth = 250;
    let rectHeight = 10;
    
    translate(75, 230);
    for (let i = 0; i < rows; i++) {
      let y = i * rectHeight;
      strokeWeight(2);
      stroke("#dbcca4")
      fill("#f2e5c2");
      rect(0, y, rectWidth, rectHeight);
    }
  pop();
  
//eye and face
  push();
    noStroke();
    fill("#f2e5c2");
    ellipse(200, 110, 110, 150);
  
    fill("#faf8f2");
    circle(170, 110, 40);
    fill("#2b061a");
    circle(170, 110, 25);
    fill("#dbcca4");
    circle(230, 110, 40);
  pop();
  
//nose
  push();
    stroke("#dbcca4");
    strokeWeight(20);
    line(200, 100, 200, 150);
  pop();
  
  headRings(145, 180, 255, 180);
  headRings(140, 200, 260, 200);
  headRings(145, 60, 255, 60);
  headRings(150, 45, 250, 45);
  headRings(155, 30, 245, 30);
  
//can't believe it rotates based on the previous one, now each one needs it's own push pop confinement. Bruh. Lol. there must be a prettier way to write this....
  push();
    shoulderBoxes(30, 200, -10, "#d6c38d", 0, 0, 50, 95);
  pop();
  
  push();
    shoulderBoxes(130, 190, 5, "#ad9a63", 0, 0, 50, 90);
  pop();
  
  push();
    shoulderBoxes(80, 200, -5, "#c7b175", 0, 0, 50, 80);
  pop();
  
  push();
    shoulderBoxes(179, 195, 5, "#c7b175", 0, 0, 50, 80);
  pop();
  
  push();
    shoulderBoxes(220, 195, -5, "#ad9a63", 0, 0, 50, 90);
  pop();
  
  push();
    shoulderBoxes(300, 200, -5, "#c7b175", 0, 0, 50, 90);
  pop();
  
  push();
    shoulderBoxes(270, 190, 5, "#d6c38d", 0, 0, 50, 90);
  pop();
}

function headRings(x1, y1, x2, y2){
  stroke("#703f5a");
  strokeWeight(20);
  line(x1, y1, x2, y2);
}

//shoulders function
function shoulderBoxes(coordX, coordY, rectAngle, rectColor, rectX, rectY, rectW, rectH){
  translate(coordX, coordY);
  rotate(rectAngle);
  strokeWeight(2);
  stroke("#c7b175");
  fill(rectColor);
  rect(rectX, rectY, rectW, rectH);
}

function catLegs(legX1, legY1, legX2, legY2, footX, footY, footD){
  strokeWeight(100);
  stroke("#f2e5c2");
  line(legX1, legY1, legX2, legY2);
  push();
    noStroke();
    fill("#f2e5c2");
    circle(footX, footY, footD);
  pop();
}


