/// <reference path="../constants.ts" />

/**
File: Label.ts
Author: Karan Sharma
Description: This class contains all the details to initialize the Label objects
Last Modified : March 19, 2015
*/
module objects {
    // LABEL CLASS
    export class Label extends createjs.BitmapText {
        // INSTANCE VARIALBES
        public width: number;
        public height: number;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(labelString: string, x: number, y: number) {
            super(labelString, fontAtlas);

            this.setSize(40); // set default font size to 40 px;

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = x;
            this.y = y;
        }

        setSize(newSize: number) {
            var fontSize: number = newSize / 100;
            this.scaleX = fontSize;
            this.scaleY = fontSize;
        }
    }
}