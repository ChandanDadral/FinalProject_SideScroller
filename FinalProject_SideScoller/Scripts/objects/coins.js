/**
File: Ring.ts
Author: Karan Sharma
Description:  This sets the position of the ring objects
Last Modified : March 19, 2015
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Coins = (function (_super) {
        __extends(Coins, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Coins() {
            _super.call(this, "coins");
            this.name = "coins";
            this._dx = 5;
            this.soundString = "coinSound";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Coins.prototype._reset = function () {
            // set the ring to start at a random x and y value
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);
        };
        Coins.prototype._checkBounds = function () {
            if (this.x <= 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        // This method updates the rings and call the check bounds method
        Coins.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Coins;
    })(objects.GameObject);
    objects.Coins = Coins;
})(objects || (objects = {}));
//# sourceMappingURL=coins.js.map