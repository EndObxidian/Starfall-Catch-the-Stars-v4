var database;
var bkgImg;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var starImg, meteorImg;
var playerImg;
var stars, meteors;
var player1score =0;
var player2score =0;
var count = 0;

function preload(){
  bkgImg = loadImage("images/galaxywallpaper3.png");
  player_img = loadImage("images/darkcup.png") 
  starImg = loadImage("images/star.png");
  meteorImg = loadImage("images/meteorclipart.png");
  meteorGroup = new Group();
  starGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(bkgImg);
  
   if (playerCount === 2) {
     game.update(1);
   }

   if (gameState === 1) {
     clear(); 
     game.play();
   }
   
   if (gameState === 2) {
    
     game.end();
   }
}