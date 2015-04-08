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
Author: Karan Sharma
Description: This class displays the menu state of the game. 
Last Modified : March 19, 2015
*/

module states {
    // MENU STATE CLASS
    export class Menu {
        // Game Objects         
        public game: createjs.Container;
        public background: objects.Background;
         public gameLogo: createjs.Bitmap;
       
        public playButton: objects.Button;
       
       // public mailPilotLabel: objects.Label;
      //  public label: objects.Label;
        public instructionButton: objects.Button;
        public play: boolean = false;
     
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.background = new objects.Background();
            this.game.addChild(this.background);
            this.gameLogo = new createjs.Bitmap("assets/images/Logo.png");

           

            //Game Over Label
            var mailPilotLabel: objects.Label = new objects.Label("JETPACK JOYRIDE", constants.SCREEN_CENTER_WIDTH, 50);
            mailPilotLabel.setSize(60);
                       mailPilotLabel.regX = mailPilotLabel.getBounds().width * 0.5;
                        mailPilotLabel.regY = mailPilotLabel.getBounds().height * 0.5;
            this.game.addChild(mailPilotLabel);

            //this.label = new objects.Label(320, 40, "TEST NEW INVENTIONS");
            //this.label.font = "40px RetroGirl";
            //this.label.x = 320;
            //this.label.y = 150;
            // this.label.regX = this.label.getMeasuredWidth() * 0.5;
            // this.label.regY = this.label.getMeasuredLineHeight() * 0.5;        
           // this.game.addChild(this.label);

            // instruction button
            this.instructionButton = new objects.Button("instructionButton", 450, 400);
            this.instructionButton.on("click", this.instructionClicked, this);
            this.game.addChild(this.instructionButton);

            this.playButton = new objects.Button("playButton", 130, 400);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);
          

            createjs.Sound.play("back", { loop: -1 });

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
        public instructionClicked() {
            createjs.Sound.play("buttonClick");
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.INSTRUCTION_STATE;
            changeState(currentState);
        }

        playButtonClicked() {
            createjs.Sound.play("buttonClick");
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = constants.PLAY_STATE;
            stateChanged = true;
         //   createjs.Sound.removeAllSounds;
            createjs.Sound.stop();
            
        }


        // UPDATE METHOD
        public update() {
            this.game.addChild(this.gameLogo);
            this.background.update();
           
            stage.update(); // Refreshes our stage

        } // Update Method

    }
}// Menu Class 