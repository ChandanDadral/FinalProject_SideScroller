/**
File: GameObject.ts
Author: Karan Sharma and Chandan Dadral
Description:  This class is the base class for the other class it has the functanility for the other game objects
Last Modified : March 16, 2015
*/
module objects {

    export class GameObject extends createjs.Sprite {
        // PUBLIC VARIABLES
        public width: number;
        public height: number;
        public isColliding: boolean;
        public soundString: string;

        // PRIVATE VARIABLE
        protected _dy;
        protected _dx;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(assetString: string) {
            super(textureAtlas, assetString);

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.isColliding = false;
        }


    }

}    