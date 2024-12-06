petalColorsOne = ["#822344", "#8c3e8b", "#b3496c", "#554275", "#295278", "#9c0b3b"];
petalColorsTwo = ["#d9688f", "#c48fc4", "#de9eb3", "#a091ba", "#97b5d1", "#6c9444"];
centerColors = ["#e6c3ce", "#ffe291", "#fcd474", "#e5f0a5", "#fffb80", "#c6eba0", "#99c2b8"];

// don't use magic numbers (hard defined numbers); set as const variables

function setup() {
  createCanvas(500, 550);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
}
  
function mousePressed(){
  background("#e9ebc0");
  
// stem
  push();
    stroke("#548c3e");
    strokeWeight(random(15, 25));
    line(250, 250, 250, 550);
  pop();
  
// leaf
  push();
    translate(250, 500);
    rotate(random(-22.5, -35));
    fill("#548c3e");
    ellipse(100, 5, random(200, 220), random(30, 70));
  pop();
  
// outer petals
  push();
    translate(250, 250);
    stroke(random(petalColorsOne));
    strokeWeight(random(70, 100));
    
    for (let i = 0; i < 8; i ++){
      rotate(45);
      line(40, 0, random(110, 160), 0);
    }
  pop();
  
// inner petals
  push();
    translate(250, 250);
    stroke(random(petalColorsTwo));
    strokeWeight(random(20, 50));
  
   for (let i = 0; i < 8; i ++){
      rotate(45);
      line(40, 0, random(50, 100), 0);
    }
  pop();
  
// pistils  
push();
    translate(250, 250);
    stroke(random(petalColorsOne));
    strokeWeight(random(5, 10));
  
   for (let i = 0; i < 16; i ++){
      rotate(22.5);
      line(40, 0, random(50, 100), 0);
    }
  pop();
    
// seed center
  push();
    fill(random(centerColors));
    circle(250, 250, random(50, 80));
  pop();
}

  
