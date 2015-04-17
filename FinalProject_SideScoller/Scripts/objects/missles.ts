/**
File: Missles.ts
Author: Karan Sharma and Chandan Dadral
Description:  This class set the position of the Missles objects
Last Modified : March 16, 2015
*/

module objects {

    export class Missles extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("missles");
            this.name = "missles";
            this.soundString = "explosionSound";

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        public _reset() {
            this._dx = Math.floor(Math.random() * 5) + 7;
            this._dy = Math.floor(Math.random() * 4) - 2;

            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);
        }

        private _checkBounds() {
            if (this.x <= 0) {
                this._reset();
            }
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dx;
            this._checkBounds();
        }


    }

}    