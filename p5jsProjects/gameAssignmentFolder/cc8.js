//explore the environment and interact with the red cubes

let forestLeftImage = null;
let forestMiddleImage = null;
let forestRightImage = null;

let grassyLeftImage = null;
let grassyTopImage = null;
let grassyBottomImage = null;

let beachLeftImage = null;
let beachMiddleImage = null;
let beachRightImage = null;

function preload() {
  playerW = loadImage("backPlayerW.png");
  playerA = loadImage("leftPlayerA.png");
  playerS = loadImage("frontPlayerS.png");
  playerD = loadImage("rightPlayerD.png");
  
  roomDrop = loadImage("concreteFloor.jpg");
    mattress = loadImage("bed.png");
    keyboard = loadImage("pxKeyboard.png");
    roomDoor = loadImage("door.png");
  
  stoneDrop = loadImage("townFloor.jpg");
    beachSign = loadImage("beachSign.png");
    grassySign = loadImage("grassySign.png");
    forestSign = loadImage("forestSign.png");
  
  grassDrop = loadImage("grassyField.jpg");
    leftSign = loadImage("leftArrow.png");
    earthworm = loadImage("folder/earthworm.png");
    grasshopper = loadImage("folder/grasshopper.png");
    buttercup = loadImage("folder/buttercup.png");
    pillBug = loadImage("folder/pillBug.png");
    hagStone = loadImage("folder/hagStone.png");
    redClover = loadImage("folder/redClover.png");
    redNettle = loadImage("folder/redNettle.png");
    squirrelMandible = loadImage("folder/squirrelMandible.png");
    monarchButterfly = loadImage("folder/monarchButterfly.png");
    
  forestDrop = loadImage("forest.jpg");
    downSign = loadImage("downArrow.png");
    bananaSlug = loadImage("folder/bananaSlug.png");
    foxSkull = loadImage("folder/foxSkull.png");
    puffball = loadImage("folder/puffball.png");
    woodFrog = loadImage("folder/woodFrog.png");
    chokeBerry = loadImage("folder/chokeBerry.png");
    damselfly = loadImage("folder/damselfly.png");
    poisonIvy = loadImage("folder/poisonIvy.png");
    polypore = loadImage("folder/polypore.png");
    deerScapula = loadImage("folder/deerScapula.png");
  
  beachDrop = loadImage("beach.jpg");
    upSign = loadImage("upArrow.png");
    mussleShell = loadImage("folder/mussleShell.png");
    moonShell = loadImage("folder/moonShell.png");
    seaGlass = loadImage("folder/seaGlass.png");
    jingleShell = loadImage("folder/jingleShell.png");
    mermaidsPurse = loadImage("folder/mermaidsPurse.png");
    bladderwrack = loadImage("folder/bladderwrack.png");
    scallopShell = loadImage("folder/scallop.png");
    ladyCrab = loadImage("folder/ladyCrab.png");
    moleCrab = loadImage("folder/moleCrab.png");
  
forestLeft = [foxSkull, polypore, chokeBerry];
forestMiddle = [puffball, woodFrog, damselfly];
forestRight = [poisonIvy, bananaSlug, deerScapula];

grassyLeft = [grasshopper, buttercup, redNettle];
grassyTop = [hagStone, pillBug, squirrelMandible];
grassyBottom = [redClover, earthworm, monarchButterfly];

beachLeft = [scallopShell, jingleShell, seaGlass];
beachMiddle = [moleCrab, ladyCrab, mermaidsPurse];
beachRight = [bladderwrack, moonShell, mussleShell];
}

class Player { //defines player properties
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.currentImage = playerS;
  }

  move() { //accounts for player movement and piano block zone
    if (keyIsDown(87) && !isCollidingWithBlockingZone("up")) { // W key
      this.y -= this.speed;
      this.currentImage = playerW;
    }
    if (keyIsDown(65) && !isCollidingWithBlockingZone("left")) { // A key
      this.x -= this.speed;
      this.currentImage = playerA;
    }
    if (keyIsDown(83) && !isCollidingWithBlockingZone("down")) { // S key
      this.y += this.speed;
      this.currentImage = playerS;
    }
    if (keyIsDown(68) && !isCollidingWithBlockingZone("right")) { // D key
      this.x += this.speed;
      this.currentImage = playerD;
    }
  }

  draw() { //plasters the player onto the canvas
    image(this.currentImage, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }

  resetPosition(x, y) { //spawn point after scene change
    this.x = x;
    this.y = y;
  }
}

class CollisionZone { //defines collision zone properties
  constructor(x, y, width, height, nextScene, resetX, resetY) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.nextScene = nextScene;
    this.resetX = resetX;
    this.resetY = resetY;
  }

  checkCollision(player) { //checks collision zone
    return (
      player.x + player.size / 2 > this.x &&
      player.x - player.size / 2 < this.x + this.width &&
      player.y + player.size / 2 > this.y &&
      player.y - player.size / 2 < this.y + this.height
    );
  }
}

let redCollisions = {
  x1: 150, y1: 300,
  x2: 530, y2: 320,
  x3: 375, y3: 270,
  x4: 470, y4: 155,
  x5: 220, y5: 240,
  x6: 495, y6: 280,
  x7: 35, y7: 100,
  x8: 195, y8: 205,
  x9: 515, y9: 125
}

let z = 20;

class Scene { //defines scene properties
  constructor(background, zones, playerSize) {
    this.background = background;
    this.zones = zones;
    this.playerSize = playerSize;
  }

  display() { //for displaying the background
    background(this.background);

    if (currentScene === 1){ //objects specific to scene one
      push();
        fill(0, 0, 0, 0); //seems unecessary since it's within a push pop but i could not find what was painting the collision box red
        noStroke();
        rect(blockingZoneX, blockingZoneY, blockingZoneWidth, blockingZoneHeight);  
      pop();
      
      push()
        image(mattress, 5, 10, mattress.width * 0.09, mattress.height * 0.09); 
        image(roomDoor, 508, 10, roomDoor.width * 0.09, roomDoor.height * 0.09);
      pop();
  
      push();
        translate(300, 200);
        image(keyboard, 5, 120, keyboard.width * 0.07, keyboard.height * 0.07); 
      pop();
      
      push();
        fill("red");
        textFont('Courier New');
        textSize(20);
        textStyle(BOLD);
        text("Look at my boring room... the ugly blue bed, concrete floor, and piano that can't make music... perhaps I should explore outside.", 20, 250, 300, 300);
      pop();
    }
    
    if (currentScene === 2){
      image(grassySign, 520, 200, grassySign.width * 0.07, grassySign.height * 0.07);
      image(beachSign, 190, 320, beachSign.width * 0.07, beachSign.height * 0.07);
      image(forestSign, 190, 10, forestSign.width * 0.07, forestSign.height * 0.07);
      
      push();
        fill("red");
        textFont('Courier New');
        textSize(20);
        textStyle(BOLD);
        text("...And this boring town... Wow", 380, 10, 300, 300);
      pop();
    }
    
     if (currentScene === 3) {
      image(downSign, 230, 360, downSign.width * 0.03, downSign.height * 0.03);
      fill(255, 0, 0); 
      noStroke();
      rect(redCollisions.x1, redCollisions.y1, z, z); 
      rect(redCollisions.x2, redCollisions.y2, z, z); 
      rect(redCollisions.x3, redCollisions.y3, z, z); 
      checkForestCollision();
    }
    
    if (currentScene === 4) {
      image(leftSign, 6, 168, leftSign.width * 0.03, leftSign.height * 0.03);
      fill(255, 0, 0);
      noStroke();
      rect(redCollisions.x4, redCollisions.y4, z, z); 
      rect(redCollisions.x5, redCollisions.y5, z, z);
      rect(redCollisions.x6, redCollisions.y6, z, z); 
      checkGrassyCollision();
    }
    
    if (currentScene === 5) {
      image(upSign, 227, 7, upSign.width * 0.03, forestSign.height * 0.03);
      fill(255, 0, 0); 
      noStroke();
      rect(redCollisions.x7, redCollisions.y7, z, z); 
      rect(redCollisions.x8, redCollisions.y8, z, z);
      rect(redCollisions.x9, redCollisions.y9, z, z); 
      checkBeachCollision();
    }
  }

  checkCollisions(player) { //change scene and set spawn point
    for (let zone of this.zones) {
      if (zone.checkCollision(player)) {
        player.resetPosition(zone.resetX, zone.resetY);
        return zone.nextScene;
      }
    }
    return null;
  }
}

let player;
let scenes;
let currentScene = 1;

let blockingZoneX = 310, blockingZoneY = 320; //piano block
let blockingZoneWidth = 0, blockingZoneHeight = 0;

function setup() {
  createCanvas(600, 400);
  player = new Player(width / 2, height / 2, 80, 6);

  scenes = { //builds the scenes... so much text.. scary
    1: new Scene(roomDrop, [new CollisionZone(600, 20, 50, 50, 2, 60, 100)], 120),
    2: new Scene(stoneDrop, [
      new CollisionZone(270, -50, 50, 50, 3, 300, 350),
      new CollisionZone(600, 250, 50, 50, 4, 50, 200),
      new CollisionZone(250, 400, 50, 50, 5, 300, 50),
      new CollisionZone(-50, 20, 50, 50, 1, 500, 70)
    ], 120),
    3: new Scene(forestDrop, [new CollisionZone(275, 430, 50, 50, 2, 270, 100)], 60),
    4: new Scene(grassDrop, [new CollisionZone(-50, 200, 50, 50, 2, 540, 280)], 60),
    5: new Scene(beachDrop, [new CollisionZone(275, -50, 50, 50, 2, 280, 330)], 60)
  };

  player.size = scenes[currentScene].playerSize; //change player size depending on scene

  blockingZoneWidth = keyboard.width * 0.07; //block properties
  blockingZoneHeight = keyboard.height * 0.07;
}

function draw() { //redraws player in each scene
  //console.log(mouseX, mouseY);
  scenes[currentScene].display();
  player.move();

  player.draw();

  const nextScene = scenes[currentScene].checkCollisions(player);
  if (nextScene) {
    currentScene = nextScene;
    player.size = scenes[currentScene].playerSize;
  }
}

function isCollidingWithBlockingZone(direction) { //was having issues with this collision checking function so i'll admit, i did run it through chatgpt to fix this 
  if (currentScene === 1) {
    let nextX = player.x;
    let nextY = player.y; 
    if (direction === "up") nextY -= player.speed;
    if (direction === "down") nextY += player.speed;
    if (direction === "left") nextX -= player.speed;
    if (direction === "right") nextX += player.speed;

    return checkCollision(nextX, nextY, player.size, blockingZoneX, blockingZoneY, blockingZoneWidth, blockingZoneHeight);
  }
  return false;
}

let isCollidingForestLeft = false; 
let isCollidingForestMiddle = false;
let isCollidingForestRight = false;

function checkForestCollision() {
  if (
    player.x + player.size / 2 > redCollisions.x1 &&
    player.x - player.size / 2 < redCollisions.x1 + z &&
    player.y + player.size / 2 > redCollisions.y1 &&
    player.y - player.size / 2 < redCollisions.y1 + z
  ) {
    if (!isCollidingForestLeft) {
      forestLeftImage = random(forestLeft);
      isCollidingForestLeft = true;
    }
    image(forestLeftImage, 20, 20, forestLeftImage.width * 0.2, forestLeftImage.height * 0.2);
  } else {
    isCollidingForestLeft = false;
  }

  if (
      player.x + player.size / 2 > redCollisions.x2 &&
      player.x - player.size / 2 < redCollisions.x2 + z &&
      player.y + player.size / 2 > redCollisions.y2 &&
      player.y - player.size / 2 < redCollisions.y2 + z
    ){
      if (!isCollidingForestRight) {
        forestRightImage = random(forestRight);
        isCollidingForestRight = true;
    }
    image(forestRightImage, 20, 20, forestRightImage.width * 0.2, forestRightImage.height * 0.2);
  } else {
    isCollidingForestRight = false;
  }
    
  if (
      player.x + player.size / 2 > redCollisions.x3 &&
      player.x - player.size / 2 < redCollisions.x3 + z &&
      player.y + player.size / 2 > redCollisions.y3 &&
      player.y - player.size / 2 < redCollisions.y3 + z
    ){
      if (!isCollidingForestMiddle) {
        forestMiddleImage = random(forestMiddle);
        isCollidingForestMiddle = true;
    }
    image(forestMiddleImage, 20, 20, forestMiddleImage.width * 0.2, forestMiddleImage.height * 0.2);
  } else {
    isCollidingForestMiddle = false;
  }
}

let isCollidingGrassyLeft = false;
let isCollidingGrassyTop = false;
let isCollidingGrassyBottom = false;

function checkGrassyCollision(){
  if (
      player.x + player.size / 2 > redCollisions.x4 &&
      player.x - player.size / 2 < redCollisions.x4 + z &&
      player.y + player.size / 2 > redCollisions.y4 &&
      player.y - player.size / 2 < redCollisions.y4 + z
    ){
      if (!isCollidingGrassyTop) {
        grassyTopImage = random(grassyTop);
        isCollidingGrassyTop = true;
    }
    image(grassyTopImage, 20, 230, grassyTopImage.width * 0.2, grassyTopImage.height * 0.2);
  } else {
    isCollidingGrassyTop = false;
  }
  
  if (
      player.x + player.size / 2 > redCollisions.x5 &&
      player.x - player.size / 2 < redCollisions.x5 + z &&
      player.y + player.size / 2 > redCollisions.y5 &&
      player.y - player.size / 2 < redCollisions.y5 + z
    ){
      if (!isCollidingGrassyLeft) {
        grassyLeftImage = random(grassyLeft);
        isCollidingGrassyLeft = true;
    }
    image(grassyLeftImage, 20, 230, grassyLeftImage.width * 0.2, grassyLeftImage.height * 0.2);
  } else {
    isCollidingGrassyLeft = false;
  }

  if (
      player.x + player.size / 2 > redCollisions.x6 &&
      player.x - player.size / 2 < redCollisions.x6 + z &&
      player.y + player.size / 2 > redCollisions.y6 &&
      player.y - player.size / 2 < redCollisions.y6 + z
    ){
        if (!isCollidingGrassyBottom) {
        grassyBottomImage = random(grassyBottom);
        isCollidingGrassyBottom = true;
    }
    image(grassyBottomImage, 20, 230, grassyBottomImage.width * 0.2, grassyBottomImage.height * 0.2);
  } else {
    isCollidingGrassyBottom = false;
  }
}

let isCollidingBeachLeft = false;
let isCollidingBeachMiddle = false;
let isCollidingBeachRight = false;

function checkBeachCollision(){
  if (
      player.x + player.size / 2 > redCollisions.x7 &&
      player.x - player.size / 2 < redCollisions.x7 + z &&
      player.y + player.size / 2 > redCollisions.y7 &&
      player.y - player.size / 2 < redCollisions.y7 + z
    ){
      if (!isCollidingBeachLeft) {
        beachLeftImage = random(beachLeft);
        isCollidingBeachLeft = true;
    }
    image(beachLeftImage, 400, 230, beachLeftImage.width * 0.2, beachLeftImage.height * 0.2);
  } else {
    isCollidingBeachLeft = false;
     }
    
  if (
      player.x + player.size / 2 > redCollisions.x8 &&
      player.x - player.size / 2 < redCollisions.x8 + z &&
      player.y + player.size / 2 > redCollisions.y8 &&
      player.y - player.size / 2 < redCollisions.y8 + z
    ){
      if (!isCollidingBeachMiddle) {
        beachMiddleImage = random(beachMiddle);
        isCollidingBeachMiddle = true;
    }
    image(beachMiddleImage, 400, 230, beachMiddleImage.width * 0.2, beachMiddleImage.height * 0.2);
  } else {
    isCollidingBeachMiddle = false;
     }
    
  if (
      player.x + player.size / 2 > redCollisions.x9 &&
      player.x - player.size / 2 < redCollisions.x9 + z &&
      player.y + player.size / 2 > redCollisions.y9 &&
      player.y - player.size / 2 < redCollisions.y9 + z
    ){
      if (!isCollidingBeachRight) {
        beachRightImage = random(beachRight);
        isCollidingBeachRight = true;
    }
    image(beachRightImage, 400, 230, beachRightImage.width * 0.2, beachRightImage.height * 0.2);
  } else {
    isCollidingBeachRight = false;
     }
}

function checkCollision(px, py, pSize, bx, by, bWidth, bHeight) {
  return (
    px + pSize / 2 > bx &&
    px - pSize / 2 < bx + bWidth &&
    py + pSize / 2 > by &&
    py - pSize / 2 < by + bHeight
  );
}
