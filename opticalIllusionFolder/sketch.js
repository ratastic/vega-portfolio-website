//move your mouse around on the canvas

let gridSize = 40;

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  gridGenerator();
}

function gridGenerator(){
  background("#c8ff03");
  
//different blend modes for each quadrant
  if (mouseX < width / 2 && mouseY < height / 2) {
    blendMode(BLEND);
  } else if (mouseX >= width / 2 && mouseY < height / 2) {
    blendMode(DODGE);
  } else if (mouseX < width / 2 && mouseY >= height / 2) {
    blendMode(MULTIPLY); 
  } else {
    blendMode(DIFFERENCE); 
  }
  
//columns and rows; each grid cell is 40px
  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      
      //console.log("current grid cell:", "x:", x, "y:", y);
      
      //how far each grid cell is from the mouse's x and y position; i copied this line from one of the examples- the circles that expand based on the mouse position- you showed us in class.
      let d = dist(x, y, mouseX, mouseY);
      
      //wave pattern determined by distance
      let wavePattern = cos(d * 0.1);
      
      //draw ellipse and rect
      if (wavePattern < 0) {
        fill("#ff007b");
        circle(x + gridSize / 2, y + gridSize / 2, gridSize / 1.5);
      } else if (wavePattern > 0) {
        fill("#2990ff");
        rect(x, y, gridSize, gridSize);
      }
    }
  }
}