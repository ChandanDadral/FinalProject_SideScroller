/// <reference path="../objects/background.ts" />
/// <reference path="../objects/missles.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/barry.ts" />
/// <reference path="../objects/coins.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../constants.ts" />
/// <reference path="instruction.ts" />
/**
File: Menu.ts
Author: Karan Sharma and Chandan Dadral
Description: This class displays the menu state of the game.
Last Modified : April 06, 2015
*/
var states;
(function (states) {
    // MENU STATE CLASS
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Background object
            this.background = new objects.Background();
            this.game.addChild(this.background);
            this.gameLogo = new createjs.Bitmap("assets/images/Logo.png");
            // instruction button
            this.instructionButton = new objects.Button("instructionButton", 450, 400);
            this.instructionButton.on("click", this.instructionClicked, this);
            this.game.addChild(this.instructionButton);
            //Play Button
            this.playButton = new objects.Button("playButton", 130, 400);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);
            createjs.Sound.play("back", { loop: -1 });
            //Sets the Position for Game logo
            this.gameLogo.x = 110;
            this.gameLogo.y = 80;
            // Add Game Container to Stage
            stage.addChild(this.game);
            stage.cursor = "default";
        } // Constructor
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method displays the instruction state
         */
        Menu.prototype.instructionClicked = function () {
            createjs.Sound.play("buttonClick");
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.INSTRUCTION_STATE;
            changeState(currentState);
        };
        Menu.prototype.playButtonClicked = function () {
            createjs.Sound.play("buttonClick");
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
            //   createjs.Sound.removeAllSounds;
            createjs.Sound.stop();
        };
        // UPDATE METHOD
        Menu.prototype.update = function () {
            this.game.addChild(this.gameLogo);
            this.background.update();
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {})); // Menu Class 
//# sourceMappingURL=menu.js.map