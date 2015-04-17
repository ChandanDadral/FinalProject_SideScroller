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
File: Level3.ts
Author: Karan Sharma and Chandan Dadral
Description: This class displays the plays the game when the user selcts the player 2.
Last Modified : APril 11, 2015
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
            // Add Coins to game
            this.coins = new objects.Coins();
            this.game.addChild(this.coins);
            // Add Barry to game
            this.barry = new objects.Barry();
            this.game.addChild(this.barry);
            //Add Electric to the game
            this.electric = new objects.Electric();
            this.game.addChild(this.electric);
            //Add ememies to the game 
            this.enemy = new objects.Enemy();
            this.game.addChild(this.enemy);
            for (index = constants.BEE_NUM; index > 0; index--) {
                this.bee[index] = new objects.Bee();
                this.game.addChild(this.bee[index]);
            }
            //Added the Label for Level 3 to game
            var levelLabel = new objects.Label("LEVEL 3", constants.SCREEN_CENTER_WIDTH, 240);
            levelLabel.setSize(60);
            levelLabel.regX = levelLabel.getBounds().width * 0.5;
            levelLabel.regY = levelLabel.getBounds().height * 0.5;
            this.game.addChild(levelLabel);
            //Tweened the labels
            createjs.Tween.get(levelLabel, { loop: false }).to({ x: 400 }, 1000, createjs.Ease.getPowInOut(2)).to({ alpha: 0, y: 75 }, 500, createjs.Ease.getPowInOut(2)).to({ alpha: 0, y: 125 }, 100);
            this.info = new createjs.Bitmap("assets/images/info.png");
            //Sets the Position for Game logo
            this.info.x = 248;
            this.info.y = 5;
            //Added tweening to Inforamtion Label
            createjs.Tween.get(this.info, { loop: false }).to({ x: 200 }, 1000, createjs.Ease.getPowInOut(2)).to({ alpha: 0, y: -75 }, 2000, createjs.Ease.getPowInOut(5));
            stage.addEventListener("click", this.bulletClick);
            scoreboard = new objects.ScoreBoard(this.game);
            stage.addChild(this.game);
            createjs.Sound.play("level3", { loop: -1 });
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        Level3.prototype.bulletClick = function () {
            bullet = new objects.Bullet(stage.mouseX, stage.mouseY);
            bullets.unshift(bullet);
            stage.addChild(bullets[0]);
            createjs.Sound.play("bulletS");
        };
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
                            switch (scores) {
                                case 1000:
                                    createjs.Sound.play('lifeUpAudio');
                                    lives += 1;
                                    break;
                                case 2000:
                                    createjs.Sound.play('lifeUpAudio');
                                    lives += 1;
                                    break;
                                case 3000:
                                    createjs.Sound.play('lifeUpAudio');
                                    lives += 1;
                                    break;
                                case 4000:
                                    createjs.Sound.play('lifeUpAudio');
                                    lives += 1;
                                    break;
                                case 5000:
                                    createjs.Sound.play('lifeUpAudio');
                                    lives += 1;
                                    break;
                            }
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
        Level3.prototype.checkCollisionBullet = function (collider1, collider2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = collider1.x;
            p1.y = collider1.y;
            p2.x = collider2.x;
            p2.y = collider2.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((collider1.height * 0.5) + (collider2.height * 0.5))) {
                if (!collider1.isColliding) {
                    createjs.Sound.play(collider1.soundString);
                    collider1.isColliding = true;
                    collider1._reset();
                    collider2._reset();
                }
            }
            else {
                collider1.isColliding = false;
            }
        }; // checkCollision end
        //Checking Collision between Bullets and Enemies
        Level3.prototype.checkCollisionEnemy = function (collider1, collider2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = collider1.x;
            p1.y = collider1.y;
            p2.x = collider2.x;
            p2.y = collider2.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((collider1.height * 0.5) + (collider2.height * 0.5))) {
                if (!collider1.isColliding) {
                    createjs.Sound.play(collider1.soundString);
                    collider1.isColliding = true;
                    collider1._reset();
                    collider2._reset();
                }
            }
            else {
                collider1.isColliding = false;
            }
        }; // checkCollision end
        // UPDATE METHOD
        Level3.prototype.update = function () {
            this.background3.update();
            this.barry.update();
            this.coins.update();
            this.electric.update();
            this.enemy.update();
            this.game.addChild(this.info);
            if (bullet != undefined) {
                for (i = 0; i < bullets.length - 1; i++) {
                    bullets[i].update();
                    for (index = constants.BEE_NUM; index > 0; index--) {
                        this.checkCollisionBullet(bullets[i], this.bee[index]);
                    }
                    this.checkCollisionEnemy(bullets[i], this.enemy);
                }
            }
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
                createjs.Sound.play("gameOverS");
                createjs.Sound.stop();
                this.game.removeAllEventListeners();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                stage.removeAllEventListeners();
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                finalText = "YOU LOST";
                finalScore = scores;
                //Changes the Game State
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            // check if player won
            if (scores >= 5000) {
                createjs.Sound.play("lifeUpSound");
                createjs.Sound.stop();
                this.game.removeAllChildren();
                this.game.removeAllEventListeners();
                stage.removeAllChildren();
                stage.removeAllEventListeners();
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