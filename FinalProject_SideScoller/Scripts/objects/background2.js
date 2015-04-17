/**
File: background2.ts
Author: Karan Sharma and Chandan Dadral
Description: This class the position of the background for level 2 of the game
Last Modified : March 16, 2015
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Background_2 = (function (_super) {
        __extends(Background_2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Background_2() {
            _super.call(this, assetLoader.getResult("background2"));
            // PRIVATE VARIABLE
            this._dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Background_2.prototype._reset = function () {
            // set the island to start at a random x value
            this.x = 0;
            this.y = 0;
        };
        Background_2.prototype._checkBounds = function () {
            if (this.x < -892) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        /**
        * This method updates the backgroud and call the check bounds method
        */
        Background_2.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Background_2;
    })(createjs.Bitmap);
    objects.Background_2 = Background_2;
})(objects || (objects = {}));
//# sourceMappingURL=background2.js.map