/**
File: electric.ts
Author: Karan Sharma and Chandan Dadral
Description:  This sets the position of the electric in Level 2 and Level 3 objects
Last Modified : March 19, 2015
*/

module objects {

    export class Electric extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("electric");
            this.name = "electric";
            this._dx = 5;
            this.soundString = "electricS";
            this._reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        public _reset() {
            // set the enemy to start at a random x and y value
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);
        }

        private _checkBounds() {
            if (this.x <= 0) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        // This method updates the electric and call the check bounds method
        public update() {
            this.x -= this._dx;
            this._checkBounds();
        }


    }

}    