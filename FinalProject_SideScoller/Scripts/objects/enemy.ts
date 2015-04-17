/**
File: enemy.ts
Author: Karan Sharma and Chandan Dadral
Description:  This sets the position of the enemy objects
Last Modified : April 01, 2015
*/

module objects {

    export class Enemy extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("enemy");
            this.name = "enemy";
            //sets the x and y postion for the enemy so that they can come from the Track 
            this._dx = 7;
            this._dy = 395;
            this.soundString = "enemyS";
            this._reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        public _reset() {

            // set the enemy to start at a random x and y value
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = 395;
        }

        private _checkBounds() {
            if (this.x <= 0) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        // This method updates the enemy and call the check bounds method
        public update() {
            this.x -= this._dx;
            this._checkBounds();
        }


    }

}    