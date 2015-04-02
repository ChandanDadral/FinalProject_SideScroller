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
            this.x = x;
            this.y = y;
        } //constructor ends
        Bullet.prototype.update = function () {
            this.x += 5;
            console.log("bullet moving");
            if (this.x > 700) {
                stage.removeChild(this);
            } //if ends
        };
        Bullet.prototype.collide = function () {
            stage.removeChild(this); //remove the bullet from the game
        }; //method collide ends
        return Bullet;
    })(createjs.Bitmap);
    objects.Bullet = Bullet;
})(objects || (objects = {})); //method update end  
//# sourceMappingURL=bullet.js.map