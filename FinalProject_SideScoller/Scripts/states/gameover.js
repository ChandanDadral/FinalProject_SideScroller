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
var states;
(function (states) {
    // GAME OVER STATE CLASS
    var GameOver = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            this.tryAgain = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.background = new objects.Background();
            this.game.addChild(this.background);
            //Game Over Label
            var gameOverLabel = new objects.Label("GAME OVER", constants.SCREEN_CENTER_WIDTH, 80);
            gameOverLabel.setSize(60);
            gameOverLabel.regX = gameOverLabel.getBounds().width * 0.5;
            gameOverLabel.regY = gameOverLabel.getBounds().height * 0.5;
            this.game.addChild(gameOverLabel);
            // Game Win Label
            var gameWinLabel = new objects.Label(finalText, constants.SCREEN_CENTER_WIDTH, 150);
            gameOverLabel.setSize(60);
            gameWinLabel.regX = gameWinLabel.getBounds().width * 0.5;
            gameWinLabel.regY = gameWinLabel.getBounds().height * 0.5;
            this.game.addChild(gameWinLabel);
            //Final Score Label
            var finalScoreLabel = new objects.Label("FINAL SCORE: " + finalScore, constants.SCREEN_CENTER_WIDTH, 220);
            this.game.addChild(finalScoreLabel);
            //Final Score Label
            var highScoreLabel = new objects.Label("HIGH SCORE: " + highScore, constants.SCREEN_CENTER_WIDTH, 300);
            this.game.addChild(highScoreLabel);
            //Try Again Button
            this.tryAgainButton = new objects.Button("tryAgainButton", 320, 400);
            this.game.addChild(this.tryAgainButton);
            this.tryAgainButton.on("click", this.tryAgainClicked, this);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        GameOver.prototype.tryAgainClicked = function () {
            this.tryAgain = true;
        };
        // UPDATE METHOD
        GameOver.prototype.update = function () {
            this.background.update();
            if (this.tryAgain) {
                createjs.Sound.play("buttonClick");
                this.game.removeAllChildren();
                this.game.removeAllEventListeners();
                stage.removeChild(this.game);
                lives = 5;
                scores = 0;
                currentState = constants.MENU_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return GameOver;
    })();
    states.GameOver = GameOver; // Game Over Class
})(states || (states = {})); // States Module  
//# sourceMappingURL=gameover.js.map