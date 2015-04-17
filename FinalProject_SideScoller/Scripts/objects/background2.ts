﻿

/**
File: background2.ts
Author: Karan Sharma and Chandan Dadral
Description: This class the position of the background for level 2 of the game
Last Modified : March 16, 2015
*/

module objects {

    export class Background_2 extends createjs.Bitmap {
        // PUBLIC VARIABLES
        public width;
        public height;

        // PRIVATE VARIABLE
        private _dx = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("background2"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.x = 0;
            this.y = 0;
        }

        private _checkBounds() {
            if (this.x < -892) {
                this._reset();
                
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        /**
        * This method updates the backgroud and call the check bounds method
        */
        public update() {
            this.x -= this._dx;
            this._checkBounds();
        }


    }

}    