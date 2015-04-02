var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
File: GameObject.ts
Author: Karan Sharma
Description:  This class is the base class for the other class
Last Modified : March 16, 2015
*/
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function GameObject(assetString) {
            _super.call(this, textureAtlas, assetString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.isColliding = false;
        }
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map