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
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Enemy() {
            _super.call(this, "enemy");
            this.name = "enemy";
            this._dx = 5;
            this._dy = 395;
            this.soundString = "explosion";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Enemy.prototype._reset = function () {
            // set the ring to start at a random x and y value
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = 395;
        };
        Enemy.prototype._checkBounds = function () {
            if (this.x <= 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        // This method updates the rings and call the check bounds method
        Enemy.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map