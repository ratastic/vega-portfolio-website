// i am referencing this p5 sketch  https://editor.p5js.org/ilay.skutelsky/sketches/Q0FRpE2kB7
// asked my friend for a bit of help with hoverMouse and how to add week numbers

musicData = [984, 968, 803, 1442, 2021, 951, 417, 777, 1052, 334, 572, 1018, 560, 594, 588, 1033, 425, 675, 673, 948];
weeks = Array.from({ length: musicData.length }, (_, i) => `Week ${i + 1}`);
let hoveredIndex = -1; // initially set to -1 to indicate a no hover state; -1 makes it null;

function setup() {
  createCanvas(600, 600);
  fill("#f70094");
  stroke(255);
  ellipseMode(CENTER); // from reference; makes it so that x and y represent the center of the circle; not sure why this line is necessary since the code works fine without it
  strokeWeight(3);
  maxMinutes = max(musicData); // grabs the maximum value from the array; largest circle will use the greatest number from the array
}

function draw() {
  background(0, 0, 0, 50);
  translate(width / 2, height / 2); //centers everything

  hoveredMouse = -1; // refreshes

  for (let i = 0; i < musicData.length; i++) {
    size = map(musicData[i], 0, maxMinutes, 10, 50); // takes number from musicData array and scales it between 10 and 50 pixels based on maxMinutes; this is so that the circles aren't freakishly large lol

    scaleFactor = sin(frameCount * 0.08) + 2; // from reference; turned it into a variable; 0.08 accounts for oscillation speed and smoothness, and the +2 makes it so that the circle begins at a certain size

    angle = map(i, 0, musicData.length, 0, TWO_PI); // maps the angle between 0 and 2pi radians; evenly spaces out the circles
    let x = cos(angle) * 200; //cos of an angle gives us the x value
    let y = sin(angle) * 200; //sin of an angle gives us the y value

    ellipse(x, y, size * scaleFactor, size * scaleFactor); // so much set up was required for these goddamn circles

    // Check if mouse is over the circle to set hovered index
    if (dist(mouseX - width / 2, mouseY - height / 2, x, y) < (size * scaleFactor) / 2) {
      hoveredMouse = i; // hoverMouse updates by referencing the for loop; checks whether on not hovering is occuring based on dist; mouseX and mouse Y are adjusted based on canvas translation; x and y are the circle coords; (size * scaleFactor) / 2 accounts for the changing circle sizes; if the distance from the mouse to the center of the circle is less than the circle's radius print text
    }
  }

  push();
    translate(-300, -290); // lol
    textAlign(LEFT);
    textSize(40);
  
    if (hoveredMouse !== -1) {
      text(`${weeks[hoveredMouse]}: ${musicData[hoveredMouse]} min`, 10, 30); // if isn't -1, print text
    } else {
      text("Hover over a circle", 10, 30); // otherwise, print default text
    }
  pop();
}
