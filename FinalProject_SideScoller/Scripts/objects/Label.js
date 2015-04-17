/// <reference path="../constants.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
File: Label.ts
Author: Karan Sharma and Chandan Dadral
Description: This class contains all the details to initialize the Label objects
Last Modified : March 19, 2015
*/
var objects;
(function (objects) {
    // LABEL CLASS
    var Label = (function (_super) {
        __extends(Label, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Label(labelString, x, y) {
            _super.call(this, labelString, fontAtlas);
            this.setSize(40); // set default font size to 40 px;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = x;
            this.y = y;
        }
        //sets the size for the label 
        Label.prototype.setSize = function (newSize) {
            var fontSize = newSize / 100;
            this.scaleX = fontSize;
            this.scaleY = fontSize;
        };
        return Label;
    })(createjs.BitmapText);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map