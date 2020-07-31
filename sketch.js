var database;
var canvas
var gameState=0;
var playerCount;
var allPlayers;
var boat1, boat2, boat3, boat4;
var boat1img, boat2img,boat3img, boat4img;
var boats;
var oceanimg;
var shoreimg;
//var backGroundimg;
var playerCount=0;
var form, player, game;
distance=0;


function preload()
{
	boat1img=loadImage("boat1.png");
	boat2img=loadImage("boat2.png");
	boat3img=loadImage("boat3.png");
	boat4img=loadImage("boat4.png");
	oceanimg=loadImage("ocean.jpg");
	shoreimg=loadImage("shore.jpg");
	//backGroundimg=loadImage("bgimg.jpg")
}

function setup() {
	canvas = createCanvas(displayWidth - 20, displayHeight-30);
	
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
	//background(backGroundimg);
    if(playerCount === 4){
		game.update(1);
	  }
	  if(gameState === 1){
		clear();
		game.play(0);
	  }
	  if(gameState===2){
		game.end();
	  }
  
 // drawSprites();
 
}