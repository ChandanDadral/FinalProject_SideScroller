/**
File: enemy.ts
Author: Karan Sharma and Chandan Dadral
Description:  This sets the position of the enemy objects
Last Modified : April 01, 2015
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
            //sets the x and y postion for the enemy so that they can come from the Track 
            this._dx = 7;
            this._dy = 395;
            this.soundString = "enemyS";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Enemy.prototype._reset = function () {
            // set the enemy to start at a random x and y value
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = 395;
        };
        Enemy.prototype._checkBounds = function () {
            if (this.x <= 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        // This method updates the enemy and call the check bounds method
        Enemy.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map