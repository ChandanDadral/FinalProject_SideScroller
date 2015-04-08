/// <reference path="../objects/coins.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/missles.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/barry.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../constants.ts" />
/// <reference path="level2.ts" />

/// <reference path="gameover.ts" />
/// <reference path="../objects/barry.ts" />



/**
File: gamePlay.ts
Author: Karan Sharma
Description: This class displays the plays the game when the user selcts the player 2. 
Last Modified : March 19, 2015
*/

module states {
    // PLAY STATE
    export class GamePlay {
        // PUBLIC VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public barry: objects.Barry;
        public coins: objects.Coins;
        public missles: objects.Missles[] = [];
        public background: objects.Background;
       

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add background to game
            this.background = new objects.Background();
            this.game.addChild(this.background);


            // Add ring to game
            this.coins = new objects.Coins();
            this.game.addChild(this.coins);


            // Add nemo to game
            this.barry = new objects.Barry();
            this.game.addChild(this.barry);

        

            // Add clouds to game
            for (index = constants.CLOUD_NUM; index > 0; index--) {
                this.missles[index] = new objects.Missles();
                this.game.addChild(this.missles[index]);

                createjs.Sound.play("backSound", { loop: -1 });
            }

            scoreboard = new objects.ScoreBoard(this.game);

            stage.addChild(this.game);
            stage.cursor = "none";

        } // constructor end

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
                        case "missles":
                            lives--;
                            this.missles[index]._reset();
                            break;
                        
                    }
                }
            } else {
                collider.isColliding = false;
            }
        } // checkCollision end

        // UPDATE METHOD
        public update() {
            this.background.update();
            this.barry.update();
            this.coins.update();
           
            
            // check collisions
            if (lives > 0) {
                for (index = constants.CLOUD_NUM; index > 0; index--) {
                    this.missles[index].update();
                    this.checkCollision(this.missles[index]);
                }

                this.checkCollision(this.coins);
              
            }

            scoreboard.update();
            // check if player lost 

            if (lives < 1) {
                createjs.Sound.play("gameOverS");
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
            if (scores == 200) {
                createjs.Sound.play("lifeUpSound");
                createjs.Sound.play("level3Up");
                
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();

                if (finalScore > highScore) {
                    highScore = finalScore;
                }

                currentState = constants.LEVEL_2;
                stateChanged = true;

            }
        } // update method end

    }
}    