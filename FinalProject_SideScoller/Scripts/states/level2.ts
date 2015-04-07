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
/// <reference path="../constants.ts" />
/// <reference path="../objects/bullet.ts" />

/// <reference path="../game.ts" />
/// <reference path="gameover.ts" />
/// <reference path="../objects/electric.ts" />



/**
File: gamePlay.ts
Author: Karan Sharma and Chandan Dadral
Description: This class displays the plays the game when the user selcts the player 2. 
Last Modified : March 19, 2015
*/

module states {
    // PLAY STATE
    export class Level2 {
        // PUBLIC VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public barry: objects.Barry;
        public coins: objects.Coins;
        public electric: objects.Electric;
        public bee: objects.Bee[] = [];
        public background2: objects.Background_2;
       
        

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add background to game
            this.background2 = new objects.Background_2();
            this.game.addChild(this.background2);


            // Add ring to game
            this.coins = new objects.Coins();
            this.game.addChild(this.coins);


            // Add nemo to game
            this.barry = new objects.Barry();
            this.game.addChild(this.barry);

            this.electric = new objects.Electric();
            this.game.addChild(this.electric);

            // Add clouds to game
            for (index = constants.BEE_NUM; index > 0; index--) {
                this.bee[index] = new objects.Bee();
                this.game.addChild(this.bee[index]);
            }

            scoreboard = new objects.ScoreBoard(this.game);

            stage.addEventListener("click", this.bulletClick);

            stage.addChild(this.game);

        } // constructor end

        public bulletClick() {
            bullet = new objects.Bullet(80, stage.mouseY);
            bullets.unshift(bullet);
            stage.addChild(bullets[0]);

        }

       
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++

        // Calculate the distance between two points
        distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } // distance end

     
        // CHeck Collision Method
        checkCollision(collider: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.barry.x;
            p1.y = this.barry.y;
            p2.x = collider.x;
            p2.y = collider.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((this.barry.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) { // Collision has occurred
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
                        case "bullet":
                            bullet.collide();
                            break;
                    }
                }
            } else {
                collider.isColliding = false;
            }
        } // checkCollision end


        checkCollisionBullet(collider1: objects.Bullet, collider2: objects.Bee) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = collider1.x;
            p1.y = collider1.y;
            p2.x = collider2.x;
            p2.y = collider2.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((collider1.height * 0.5) + (collider2.height * 0.5))) {
                if (!collider1.isColliding) { // Collision has occurred
                    createjs.Sound.play(collider1.soundString);
                    collider1.isColliding = true;
                    collider1._reset();
                    collider2._reset();
                }
            } else {
                collider1.isColliding = false;
            }
        } // checkCollision end
        // UPDATE METHOD
        public update() {
            this.background2.update();
            this.barry.update();
            this.coins.update();
            this.electric.update();

            if (bullet != undefined) {
                for (i = 0; i < bullets.length - 1; i++) {
                    bullets[i].update();

                    for (index = constants.BEE_NUM; index > 0; index--) {
                        this.checkCollisionBullet(bullets[i], this.bee[index]);
                    }

                }

            }
           

            if (lives > 0) {
                for (index = constants.BEE_NUM; index > 0; index--) {
                    this.bee[index].update();
                    this.checkCollision(this.bee[index]);
                }

                this.checkCollision(this.electric);
                this.checkCollision(this.coins);

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
                this.game.removeAllEventListeners();
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            // check if player won
            if (scores == 500) {
                createjs.Sound.play("lifeUpSound");

                this.game.removeAllChildren();
                this.game.removeAllEventListeners();
                stage.removeAllChildren();

                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                
                currentState = constants.LEVEL_3;
                stateChanged = true;

            }
        } // update method end

    }
}    
