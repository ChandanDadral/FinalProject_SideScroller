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

module states {
    // PLAY STATE
    export class Level3 {
        // PUBLIC VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public barry: objects.Barry;
        public coins: objects.Coins;
        public enemy: objects.Enemy;
        public electric: objects.Electric;
        public bee: objects.Bee[] = [];
        public background3: objects.Background_3;
        public info: createjs.Bitmap;
        

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
           

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

            // Add Bee to game
            for (index = constants.BEE_NUM; index > 0; index--) {
                this.bee[index] = new objects.Bee();
                this.game.addChild(this.bee[index]);
            }
            //Added the Label for Level 3 to game
            var levelLabel: objects.Label = new objects.Label("LEVEL 3", constants.SCREEN_CENTER_WIDTH, 240);
            levelLabel.setSize(60);
            levelLabel.regX = levelLabel.getBounds().width * 0.5;
            levelLabel.regY = levelLabel.getBounds().height * 0.5;
            this.game.addChild(levelLabel);
            //Tweened the labels
            createjs.Tween.get(levelLabel, { loop: false })
                .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(2))
                .to({ alpha: 0, y: 75 }, 500, createjs.Ease.getPowInOut(2))
                .to({ alpha: 0, y: 125 }, 100)
          

            this.info = new createjs.Bitmap("assets/images/info.png");

            //Sets the Position for Game logo
            this.info.x = 248;
            this.info.y = 5;

            //Added tweening to Inforamtion Label
            createjs.Tween.get(this.info, { loop: false })
                .to({ x: 200 }, 1000, createjs.Ease.getPowInOut(2))
                .to({ alpha: 0, y: -75 }, 2000, createjs.Ease.getPowInOut(5))

            stage.addEventListener("click", this.bulletClick);

            scoreboard = new objects.ScoreBoard(this.game);

            stage.addChild(this.game);
            createjs.Sound.play("level3", { loop: -1 });

        } // constructor end

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++

        public bulletClick() {
            bullet = new objects.Bullet(stage.mouseX, stage.mouseY);
            bullets.unshift(bullet);
            stage.addChild(bullets[0]);
            createjs.Sound.play("bulletS");

        }

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
                            switch (scores) {
                                //when player has score in thousands then player gets  a life up and different sound is played.
               
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

        //Checking Collision between Bullets and Enemies
        checkCollisionEnemy(collider1: objects.Bullet, collider2: objects.Enemy) {
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
        } // update method end

    }
}     