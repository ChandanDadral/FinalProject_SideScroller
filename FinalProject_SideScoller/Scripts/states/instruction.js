/// <reference path="../objects/background.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../constants.ts" />
/**
File: Select.ts
Author: Karan Sharma
Description: This class displays the insruction of the game.
Last Modified : March 19, 2015
*/
var states;
(function (states) {
    var Instruction = (function () {
        function Instruction() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.background = new objects.Background();
            this.game.addChild(this.background);
            this.instructionPic = new createjs.Bitmap("assets/images/instructionPic.png");
            this.game.addChild(this.instructionPic);
            this.instructionPic.x = 0;
            this.instructionPic.y = 0;
            // instruction message
            //var instructionsMessage: string = "Welcome to JetPack Joyride game,Barry Labortary was attacked, "
            //    + "you need to save barry from the missiles, electric and enemies and save his life. "
            //    + "In order to win this game,you need to collect 5000 points!"
            //    + "Each coin gives 100 points. "
            //    + "Steer with the mouse, Lets See how many points you can Get!";
            //this.instructionText = new createjs.Text(instructionsMessage, "25px Consolas", constants.LABEL_COLOUR);
            //// setting thre position of the instruction message
            //this.instructionText.y = 15;
            //this.instructionText.x = 25;
            //this.instructionText.lineHeight = 35;
            //this.instructionText.lineWidth = 600;
            //this.game.addChild(this.instructionText);
            //back Button
            this.backButton = new objects.Button("okButton", 300, 420);
            this.backButton.on("click", this.backClicked, this);
            this.game.addChild(this.backButton);
            stage.addChild(this.game);
        }
        Instruction.prototype.backClicked = function () {
            this.play = true;
        };
        // UPDATE METHOD
        Instruction.prototype.update = function () {
            this.background.update();
            // instructionText.visible = true;  
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                createjs.Sound.stop();
                currentState = constants.MENU_STATE;
                stateChanged = true;
            }
            stage.update();
        };
        return Instruction;
    })();
    states.Instruction = Instruction;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map