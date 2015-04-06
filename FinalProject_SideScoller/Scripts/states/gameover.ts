/// <reference path="../objects/background.ts" />
/// <reference path="../objects/barry.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/coins.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/missles.ts" />
/// <reference path="../objects/scoreboard.ts" />



/**
File: gameOver.ts
Author: Karan Sharma
Description: This class displays the game over state when player lost or won. 
Last Modified : March 19, 2015
*/

module states {
    // GAME OVER STATE CLASS
    export class GameOver {
        // Game Objects 
        public game: createjs.Container;
        public background: objects.Background;
      //  public gameOverLabel: objects.Label;
        //public gameWinLabel: objects.Label;
       // public finalScoreLabel: objects.Label;
        //public highScoreLabel: objects.Label;
        public tryAgainButton: objects.Button;
        public tryAgain: boolean = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.background = new objects.Background();
            this.game.addChild(this.background);

            //Game Over Label
            var gameOverLabel: objects.Label = new objects.Label("GAME OVER", constants.SCREEN_CENTER_WIDTH, 80);
            gameOverLabel.setSize(60);
            gameOverLabel.regX = gameOverLabel.getBounds().width * 0.5;
            gameOverLabel.regY = gameOverLabel.getBounds().height * 0.5;
            this.game.addChild(gameOverLabel);

            // Game Win Label
            var gameWinLabel: objects.Label = new objects.Label(finalText, constants.SCREEN_CENTER_WIDTH, 150);
            gameOverLabel.setSize(60);
            gameWinLabel.regX = gameWinLabel.getBounds().width * 0.5;
            gameWinLabel.regY = gameWinLabel.getBounds().height * 0.5;
            this.game.addChild(gameWinLabel);

            //Final Score Label
            var finalScoreLabel: objects.Label = new objects.Label("FINAL SCORE: " + finalScore, constants.SCREEN_CENTER_WIDTH, 220);
            this.game.addChild(finalScoreLabel);

            //Final Score Label
           var highScoreLabel: objects.Label = new objects.Label("HIGH SCORE: " + highScore, constants.SCREEN_CENTER_WIDTH, 300);
            this.game.addChild(highScoreLabel);

            //Try Again Button
            this.tryAgainButton = new objects.Button("tryAgainButton", 320, 400);
            this.game.addChild(this.tryAgainButton);
            this.tryAgainButton.on("click", this.tryAgainClicked, this);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public tryAgainClicked() {
            this.tryAgain = true;
        }

        // UPDATE METHOD
        public update() {

            this.background.update();

            if (this.tryAgain) {
                createjs.Sound.play("buttonClick");
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                lives = 5;
                scores = 0;
                currentState = constants.MENU_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // Game Over Class


} // States Module  