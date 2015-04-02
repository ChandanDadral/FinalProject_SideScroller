/// <reference path="states/level3.ts" />
/// <reference path="objects/bee.ts" />

/**
File: game.ts
Author: Karan Sharma
Description: This game Nemo Fighter is created with the extensive use of javascript.
At the begining of the game user will see the two buttons, one is for the instructions
which tells the user how to play this game and about the controls and other button is
to selct the player of the game. Once user select his player then game will start and
it displays the score board at the top of the screen and also displays the message 
When player wins or lost.
Last Modified : March 19, 2015

*/


/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />


/// <reference path="objects/electric.ts" />
/// <reference path="objects/background2.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="constants.ts" />

/// <reference path="objects/background.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="objects/barry.ts" />
/// <reference path="objects/missles.ts" />
/// <reference path="objects/coins.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/level3.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />

/// <reference path="states/gameplay.ts" />



// Game Variables
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;
var textureAtlas: createjs.SpriteSheet;

// Score Variables
var finalScore: number = 0;
var highScore = 0;
var score: objects.ScoreBoard;
var finalText: string;

var index: number;

// state variables
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;

var scoreboard: objects.ScoreBoard;
 var lives: number = 5;
 var scores: number = 0;
         

// Game Objects
var gameOver: states.GameOver;

var menu: states.Menu;
var instruction: states.Instruction;
var level_2: states.Level2;
var level_3: states.Level2;
var playGame: states.GamePlay;

// asset manifest - array of asset objects
var manifest = [
    { id: "missles", src: "assets/images/missles.png" },
    { id: "coins", src: "assets/images/StarCoin.png" },
    { id: "background", src: "assets/images/background.png" },
  //  { id: "barry", src: "assets/images/game_char.png" },
    { id: "bullet", src: "assets/images/bull.png" },
    { id: "playButton", src: "assets/images/playButton.png" },
    { id: "instructionButton", src: "assets/images/instructionsButton.png" },
    { id: "okButton", src: "assets/images/okButton.png" },
    { id: "background2", src: "assets/images/background2.png" },
  //  { id: "electric", src: "assets/images/electric2.png" },
    { id: "bee", src: "assets/images/bee.png" },
    { id: "mainMenuSound", src: "assets/audio/mainMenu.mp3" },
    { id: "lifeUpSound", src: "assets/audio/lifeUp.mp3" },
    { id: "buttonHover", src: "assets/audio/hover.mp3" },
    { id: "explosionSound", src: "assets/audio/Explosion.mp3" },
    { id: "coinSound", src: "assets/audio/coin_collect.mp3" },
    { id: "backSound", src: "assets/audio/backsound.mp3" },
    { id: "buttonClick", src: "assets/audio/buttonClick.mp3" },
    

   
    { id: "tryAgainButton", src: "assets/images/playAgainButton.png" },
   
    { id: "bullet", src: "assets/images/bull.png" },
];

var imageData =
    {
        "images": ["assets/images/atlas.png"],
        "frames": [

            [2, 147, 330, 25],
            [334, 2, 120, 49],
            [334, 53, 120, 49],
            [334, 104, 120, 49],
            [2, 2, 141, 143],
            [145, 2, 141, 143]
        ],
        "animations": {

            "electric": [1],
            "barry": [4]
          //  "electric": {
          //      "frames": [1,2,3],
          //      "speed": 0.2
          //  },
          //  "Barry": {        
          //  "frames": [4, 5],
          //  "speed": 0.2
          //},
        }
    }

/*
 * This function preloads all of the assets in the game.
 */
function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest

    textureAtlas = new createjs.SpriteSheet(imageData);
}

/*
 * This function initializes the game by setting up the canvas, FPS and enabling mouseover
 */
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// UTILITY METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupStats() {
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}

/*
 * This function updates the game as it is being played.
 */
function gameLoop() {
    stats.begin(); // Begin metering

    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    }
    else {
        currentStateFunction.update();
    }

    stage.update();
    stats.end(); // End metering
}

/*
 * This function call the different states.
 */
function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {

        case constants.MENU_STATE:
            // instantiate menu screen
            menu = new states.Menu();
            currentStateFunction = menu;
            break;

        case constants.PLAY_STATE:
            // instantiate game play screen
            playGame = new states.GamePlay();
            currentStateFunction = playGame;
            break;

       
        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;

        case constants.INSTRUCTION_STATE:
            // instantiate game over screen
            instruction = new states.Instruction();
            currentStateFunction = instruction;
            break;

      

        case constants.LEVEL_2:
            // instantiate game play screen
            level_2 = new states.Level2();
            currentStateFunction = level_2;
            break;

        case constants.LEVEL_3:
            // instantiate game play screen
            level_3 = new states.Level3();
            currentStateFunction = level_3;
            break;

      

    }
}

