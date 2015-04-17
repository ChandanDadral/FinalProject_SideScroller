/**
File: Coins.ts
Author: Karan Sharma and Chandan Dadral
Description:  This sets the position of the Coins objects
Last Modified : March 19, 2015
*/

module objects {

    export class Coins extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("coins");
            this.name = "coins";
            this._dx = 5;
            this.soundString = "coinSound";
            this._reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        public _reset() {
            // set the coins to start at a random x and y value
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);
        }

        private _checkBounds() {
            if (this.x <= 0) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        // This method updates the coins and call the check bounds method
        public update() {
            this.x -= this._dx;
            this._checkBounds();
        }


    }

}    