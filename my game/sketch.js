var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var hunters, hunter1, hunter2, hunter3, hunter4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
 
  hunter1_img = loadImage("B1.png");
  hunter2_img = loadImage("B2.png");
  hunter3_img = loadImage("B3.png");
  hunter4_img = loadImage("B4.png");
  ground = loadAnimation("back1.jpg","back2.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
