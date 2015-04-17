

/**
File: background.ts
Author: Karan Sharma and Chandan Dadral
Description: This class the position of the background of the game
Last Modified : March 28, 2015
*/

module objects {

    export class Background extends createjs.Bitmap {
        // PUBLIC VARIABLES
        public width;
        public height;

        // PRIVATE VARIABLE
        private _dx = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("background"));

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

        /**
        This Methods resets the background if it reaches at certain point
        */
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