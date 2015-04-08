
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

        private _buttonOut(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
            createjs.Sound.play("buttonClick");
        }

        private _buttonOver(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.5;
            createjs.Sound.play("buttonHover");
        }

    }

}   