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
            this.gameOverLabel = new objects.Label(320, 40, finalText);
            this.gameOverLabel.font = "60px RetroGirl";
            this.gameOverLabel.regX = this.gameOverLabel.getMeasuredWidth() * 0.5;
            this.gameOverLabel.regY = this.gameOverLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.gameOverLabel);
            // Game Win Label
            this.gameWinLabel = new objects.Label(320, 40, finalText);
            this.gameWinLabel.font = "60px RetroGirl";
            this.gameWinLabel.regX = this.gameWinLabel.getMeasuredWidth() * 0.5;
            this.gameWinLabel.regY = this.gameWinLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.gameWinLabel);
            //Final Score Label
            this.finalScoreLabel = new objects.Label(320, 120, ("FINAL SCORE: " + finalScore));
            this.game.addChild(this.finalScoreLabel);
            //Final Score Label
            this.highScoreLabel = new objects.Label(320, 220, ("HIGH SCORE: " + highScore));
            this.game.addChild(this.highScoreLabel);
            //Try Again Button
            this.tryAgainButton = new objects.Button("tryAgainButton", 320, 350);
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
                stage.removeChild(this.game);
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