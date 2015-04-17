/**
File: Button.ts
Author: Karan Sharma Chandan Dadral
Description:  This class has the Functionalty of the Buttons
Last Modified : March 16, 2015
*/
module objects {
    export class Button extends objects.GameObject{

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++

        constructor(stringPath: string, x: number, y: number) {

            super(stringPath);
            this.regX = this.getBounds().width * 0.5;
            this.regY= this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;

            this.addEventListener("mouseover", this._buttonOver);
            this.addEventListener("mouseout", this._buttonOut);
        }

        // EVENT HANDLERS
        //if mouse outs from the Button
        private _buttonOut(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
            createjs.Sound.play("buttonClick");
        }

        //if mouse is on the Button
        private _buttonOver(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.5;
            createjs.Sound.play("buttonHover");
        }

    }

}   