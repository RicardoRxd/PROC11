var ship, shipAni
var sea, seaImg
function preload(){
  seaImg = loadImage("sea.png"); 
shipAni = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
createCanvas(400,400);
sea = createSprite(1,1,1,1)
 sea.addImage("sea",seaImg);
  sea.x = sea.width /2;
 ship = createSprite (120,120)
ship.addAnimation ("ship", shipAni)
sea.scale = 1

ship.scale = 0.3
}

function draw() {
  background("blue");
 
  drawSprites()
}