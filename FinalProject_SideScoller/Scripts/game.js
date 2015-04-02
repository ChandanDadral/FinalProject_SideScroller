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
/// <reference path="objects/enemy.ts" />
/// <reference path="states/gameplay.ts" />
// Game Variables
var stats = new Stats();
var canvas;
var stage;
var assetLoader;
var textureAtlas;
// Score Variables
var finalScore = 0;
var highScore = 0;
var score;
var finalText;
var index;
// state variables
var currentState;
var currentStateFunction;
var stateChanged = false;
var scoreboard;
var lives = 5;
var scores = 0;
// Game Objects
var gameOver;
var menu;
var instruction;
var level_2;
var level_3;
var playGame;
// asset manifest - array of asset objects
var manifest = [
    { id: "background", src: "assets/images/background.png" },
    { id: "bullet", src: "assets/images/bull.png" },
    { id: "background2", src: "assets/images/background2.png" },
    { id: "mainMenuSound", src: "assets/audio/mainMenu.mp3" },
    { id: "lifeUpSound", src: "assets/audio/lifeUp.mp3" },
    { id: "buttonHover", src: "assets/audio/hover.mp3" },
    { id: "explosionSound", src: "assets/audio/Explosion.mp3" },
    { id: "coinSound", src: "assets/audio/coin_collect.mp3" },
    { id: "backSound", src: "assets/audio/backsound.mp3" },
    { id: "buttonClick", src: "assets/audio/buttonClick.mp3" },
    { id: "bullet", src: "assets/images/bull.png" },
];
var imageData = {
    "images": ["assets/images/atlas.png"],
    "frames": [
        [376, 53, 47, 58],
        [442, 85, 47, 58],
        [491, 85, 47, 58],
        [508, 2, 47, 58],
        [448, 187, 47, 58],
        [497, 187, 47, 58],
        [546, 177, 47, 58],
        [540, 62, 47, 58],
        [557, 2, 47, 58],
        [589, 62, 47, 58],
        [426, 2, 80, 81],
        [376, 113, 31, 30],
        [288, 115, 31, 30],
        [321, 115, 31, 30],
        [409, 113, 31, 30],
        [520, 145, 31, 30],
        [606, 2, 31, 30],
        [553, 122, 31, 30],
        [586, 122, 31, 30],
        [595, 154, 31, 30],
        [595, 186, 31, 30],
        [2, 205, 120, 49],
        [124, 205, 120, 49],
        [288, 2, 120, 49],
        [2, 2, 141, 143],
        [145, 2, 141, 143],
        [2, 147, 220, 56],
        [426, 145, 92, 40],
        [288, 53, 86, 60],
        [224, 147, 200, 51],
        [246, 200, 200, 51]
    ],
    "animations": {
        "enemy": {
            "frames": [0, 2, 3, 4, 5, 6, 7, 8, 9, 1],
            "speed": .10
        },
        "1": [0],
        "10": [1],
        "2": [2],
        "3": [3],
        "4": [4],
        "5": [5],
        "6": [6],
        "7": [7],
        "8": [8],
        "9": [9],
        "bee": [10],
        "coins": {
            "frames": [11, 13, 14, 15, 16, 17, 18, 19, 20, 12],
            "speed": .30
        },
        "electric": {
            "frames": [21, 22, 23],
            "speed": .10
        },
        "barry": {
            "frames": [24, 25],
            "speed": 0.10
        },
        "instructionButton": [26],
        "missles": [27],
        "okButton": [28],
        "tryAgainButton": [29],
        "playButton": [30]
    }
};
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
function changeState(state) {
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
//# sourceMappingURL=game.js.map