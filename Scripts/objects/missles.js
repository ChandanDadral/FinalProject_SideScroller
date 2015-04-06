/**
File: Bee.ts
Author: Karan Sharma
Description:  This class set the position of the bee objects
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
    var Missles = (function (_super) {
        __extends(Missles, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Missles() {
            _super.call(this, "missles");
            this.name = "missles";
            this.soundString = "explosionSound";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Missles.prototype._reset = function () {
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);
        };
        Missles.prototype._checkBounds = function () {
            if (this.x <= 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Missles.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Missles;
    })(objects.GameObject);
    objects.Missles = Missles;
})(objects || (objects = {}));
//# sourceMappingURL=missles.js.map