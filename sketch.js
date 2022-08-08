var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                        //C41// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels,bk_song, powerCoins, obstacle1,obstacle2; // C41//SA
var cars = [];
var blastImage;                   //C42// SA

function preload() {
  backgroundImage = loadImage("./assets/frofla.png");
  car1_img = loadImage("./assets/run_girl new.png");
  car2_img = loadImage("./assets/run_boy new.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/water.png");
  powerCoinImage = loadImage("./assets/plastic.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/car game.png"); // C41//SA
  obstacle2Image = loadImage("./assets/obstacle2.png"); // C41//SA
  blastImage = loadImage("./assets/tired.png"); //C42 //SA
  bk_song = loadSound('./assets/cheerful.mp3');
  sad_song = loadSound('./assets/sad.wav');


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   
 bk_song.play();
 bk_song.setVolume(0.3);
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
