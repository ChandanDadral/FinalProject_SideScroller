/**
File: electric.ts
Author: Karan Sharma and Chandan Dadral
Description:  This sets the position of the electric in Level 2 and Level 3 objects
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
    var Electric = (function (_super) {
        __extends(Electric, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Electric() {
            _super.call(this, "electric");
            this.name = "electric";
            this._dx = 5;
            this.soundString = "electricS";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Electric.prototype._reset = function () {
            // set the enemy to start at a random x and y value
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);
        };
        Electric.prototype._checkBounds = function () {
            if (this.x <= 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        // This method updates the electric and call the check bounds method
        Electric.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Electric;
    })(objects.GameObject);
    objects.Electric = Electric;
})(objects || (objects = {}));
//# sourceMappingURL=electric.js.map