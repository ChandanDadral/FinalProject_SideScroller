/**
File: background.ts
Author: Karan Sharma
Description: This class the position of the background of the game
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
    var Background = (function (_super) {
        __extends(Background, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Background() {
            _super.call(this, assetLoader.getResult("background"));
            // PRIVATE VARIABLE
            this._dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Background.prototype._reset = function () {
            // set the island to start at a random x value
            this.x = 0;
            this.y = 0;
        };
        Background.prototype._checkBounds = function () {
            if (this.x < -892) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        /**
        * This method updates the backgroud and call the check bounds method
        */
        Background.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map