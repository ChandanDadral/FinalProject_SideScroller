var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        //Constructor/////////////////////////////////////////////////////////////////////////////
        function Bullet(x, y) {
            _super.call(this, "bullet");
            this.soundString = "coinSound";
            this.x = x;
            this.y = y;
        } //constructor ends
        Bullet.prototype.update = function () {
            this.x += 5;
            //   console.log("bullet moving");
            if (this.x > 700) {
                stage.removeChild(this);
            } //if ends
        };
        Bullet.prototype._reset = function () {
            // set the ring to start at a random x and y value
            this.x = 640 + Math.floor(Math.random() * 640);
            this.y = Math.floor(Math.random() * 480);
        };
        Bullet.prototype.collide = function () {
            stage.removeChild(this);
        }; //method collide ends
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {})); //method update end  
//# sourceMappingURL=bullet.js.map