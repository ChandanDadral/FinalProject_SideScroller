var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
File: Button.ts
Author: Karan Sharma Chandan Dadral
Description:  This class has the Functionalty of the Buttons
Last Modified : March 16, 2015
*/
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++
        function Button(stringPath, x, y) {
            _super.call(this, stringPath);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = x;
            this.y = y;
            this.addEventListener("mouseover", this._buttonOver);
            this.addEventListener("mouseout", this._buttonOut);
        }
        // EVENT HANDLERS
        //if mouse outs from the Button
        Button.prototype._buttonOut = function (event) {
            event.currentTarget.alpha = 1.0;
            createjs.Sound.play("buttonClick");
        };
        //if mouse is on the Button
        Button.prototype._buttonOver = function (event) {
            event.currentTarget.alpha = 0.5;
            createjs.Sound.play("buttonHover");
        };
        return Button;
    })(objects.GameObject);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map