//Database variables
var database
//Environment variables
var ground
//Characters variables
var player1,player2


function setup() {
  createCanvas(1536,800);

  ground = createSprite(windowWidth/2,700,1536,50)

  player1 = createSprite(200,600,50,100);
  player1.scale = 0.5;
  
}

function draw() {
  background(0,0,0); 
  
  //Character physics
  player1.collide(ground);

  //Gravity
  player1.position.y += 5.4   

  //Charcter control
  if (keyIsDown(39)) {
    player1.position.x += 5;
  }

  if (keyIsDown(37)) {
    player1.position.x -= 5
  }

  if (keyIsDown(38)) {
    player1.position.y -= 10
  } 
  drawSprites();

}