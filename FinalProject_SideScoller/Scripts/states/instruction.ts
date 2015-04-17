/// <reference path="../objects/background.ts" />

/// <reference path="../objects/button.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/label.ts" />

/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../constants.ts" />



/**
File: Instruction.ts
Author: Karan Sharma and Chandan Dadral
Description: This class displays the insruction of the game. 
Last Modified : April 01, 2015
*/

module states {
    export class Instruction {
        // Game objects
        public game: createjs.Container;
        public background: objects.Background;
        public instructionText: createjs.Text;
        public instructionPic: createjs.Bitmap;
        public backButton: objects.Button;
        public play: boolean = false;

        constructor() {
            
            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.background = new objects.Background();
            this.game.addChild(this.background);
            
            //Shows the Image of the Instruction which is Created
            this.instructionPic = new createjs.Bitmap("assets/images/instructionPic.png");
            this.game.addChild(this.instructionPic);
            this.instructionPic.x = 0;
            this.instructionPic.y = 0;
 
            //back Button
            this.backButton = new objects.Button("okButton", 300, 420);
            this.backButton.on("click", this.backClicked, this);
            this.game.addChild(this.backButton);

            stage.addChild(this.game);
        }

        //If back button clicked
        public backClicked() {
            this.play = true;
        }

        // UPDATE METHOD
        public update() {

            this.background.update();
            
            // instructionText.visible = true;  
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                createjs.Sound.stop();
                //changes the State back to Menu State
                currentState = constants.MENU_STATE;
                stateChanged = true;
            }
            stage.update();

        }
    }
} 