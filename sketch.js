var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var score = 0;
var database;

var form, player, game;

var players, iceMan1, iceMan2, iceMan3, iceMan4, iceMan5;
var fireMan, fireball;
var iceMenscore =0;

var lavaland,  iceMan1_img, iceMan2_img, iceMan3_img, iceMan4_img, iceMan5_img;
var meltingIce_ani;
var fireMan_ani, fireball_ani;
function preload(){
  lavaland = loadImage("../images/lavaland/lava1.pang");

  //iceMan1_img = loadImages("../images/ice/leftWalkIceMan.png","../images/ice/rightWalkIceMan.png",)

  fireball_ani = loadAnimation("../images/fireball/fireBall1.png", "../images/fireball/fireBall2.png", "../images/fireball/fireBall3.png");

  fireMan_ani = loadAnimation("../images/fire/leftWalkFireMan","../images/fire/rightWalkFireMan","../images/fire/standingWalkFireMan");

  meltingIce_ani = loadAnimation("../images/meltingIce/meltingIce1","../images/meltingIce/meltingIce2","../images/meltingIce/meltingIce3",
  "../images/meltingIce/meltingIce4","../images/meltingIce/meltingIce5", "../images/meltingIce/meltingIce6","../images/meltingIce/meltingIce7",
  "../images/meltingIce/meltingIce8","../images/meltingIce/meltingIce9","../images/meltingIce/meltingIce10", "../images/meltingIce/meltingIce11",
  "../images/meltingIce/meltingIce12","../images/meltingIce/meltingIce13","../images/meltingIce/meltingIce14","../images/meltingIce/meltingIce16",
  "../images/meltingIce/meltingIce17");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
 //canvas = createCanvas(400,400);


  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {

  if(playerCount === 5){
    game.update(1);
  }
  
  if(gameState === 1){
    clear();
    game.play();
  }
  

}

