/**
File: Barry.ts
Author: Karan Sharma chandan Dadral
Description: This file class the position of the Nemo 
Last Modified : March 19, 2015
*/

module objects {

    export class Barry extends objects.GameObject{
       
        public name: string;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This constructor creates creates nemo(player) at its position
         */
        constructor() {
            super("barry");

            this.name = "barry";

            this.x = 80;
            
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method updates the player position
         */
        public update() {
            this.y = stage.mouseY;
            this.x = stage.mouseX;
        }
    }

}  