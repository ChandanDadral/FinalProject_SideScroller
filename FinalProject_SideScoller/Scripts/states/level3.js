/// <reference path="../objects/coins.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/missles.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/barry.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/background2.ts" />
/// <reference path="../objects/bee.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../constants.ts" />
/// <reference path="../objects/background3.ts" />
/// <reference path="../game.ts" />
/// <reference path="gameover.ts" />
/// <reference path="../objects/electric.ts" />
/**
File: gamePlay.ts
Author: Karan Sharma and Chandan Dadral
Description: This class displays the plays the game when the user selcts the player 2.
Last Modified : March 19, 2015
*/
var states;
(function (states) {
    // PLAY STATE
    var Level3 = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Level3() {
            this.bee = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add background to game
            this.background3 = new objects.Background_3();
            this.game.addChild(this.background3);
            // Add ring to game
            this.coins = new objects.Coins();
            this.game.addChild(this.coins);
            // Add nemo to game
            this.barry = new objects.Barry();
            this.game.addChild(this.barry);
            this.electric = new objects.Electric();
            this.game.addChild(this.electric);
            this.enemy = new objects.Enemy();
            this.game.addChild(this.enemy);
            for (index = constants.BEE_NUM; index > 0; index--) {
                this.bee[index] = new objects.Bee();
                this.game.addChild(this.bee[index]);
            }
            scoreboard = new objects.ScoreBoard(this.game);
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Calculate the distance between two points
        Level3.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; // distance end
        // CHeck Collision Method
        Level3.prototype.checkCollision = function (collider) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.barry.x;
            p1.y = this.barry.y;
            p2.x = collider.x;
            p2.y = collider.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((this.barry.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) {
                    createjs.Sound.play(collider.soundString);
                    collider.isColliding = true;
                    switch (collider.name) {
                        case "coins":
                            scores += 100;
                            this.coins._reset();
                            break;
                        case "electric":
                            lives--;
                            this.electric._reset();
                            break;
                        case "bee":
                            lives--;
                            this.bee[index]._reset();
                            break;
                        case "enemy":
                            lives--;
                            this.enemy._reset();
                            break;
                    }
                }
            }
            else {
                collider.isColliding = false;
            }
        }; // checkCollision end
        // UPDATE METHOD
        Level3.prototype.update = function () {
            this.background3.update();
            this.barry.update();
            this.coins.update();
            this.electric.update();
            this.enemy.update();
            if (lives > 0) {
                for (index = constants.BEE_NUM; index > 0; index--) {
                    this.bee[index].update();
                    this.checkCollision(this.bee[index]);
                }
                this.checkCollision(this.electric);
                this.checkCollision(this.coins);
                this.checkCollision(this.enemy);
            }
            scoreboard.update();
            // check if player lost 
            if (lives < 1) {
                createjs.Sound.play("coinSound");
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                finalText = "YOU LOST";
                finalScore = scores;
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            // check if player won
            if (scores >= 5000) {
                createjs.Sound.play("lifeUpSound");
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                finalText = "YOU WON";
                finalScore = scores;
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
        }; // update method end
        return Level3;
    })();
    states.Level3 = Level3;
})(states || (states = {}));
//# sourceMappingURL=level3.js.map