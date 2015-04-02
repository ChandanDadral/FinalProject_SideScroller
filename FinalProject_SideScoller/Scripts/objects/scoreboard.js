/**
File: ScoreBoard.ts
Author: Karan Sharma
Description:  This class set the displays the score of the player
Last Modified : March 19, 2015
*/
var objects;
(function (objects) {
    // SCOREBOARD CLASS ++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard(game) {
            this._livesLabel = new createjs.Text("Lives: ", "40px Consolas", "#ffff00");
            this._livesLabel.x = 10;
            this._livesLabel.y = 10;
            game.addChild(this._livesLabel);
            this._scoreLabel = new createjs.Text("Score: ", "40px Consolas", "#ffff00");
            this._scoreLabel.x = 400;
            this._scoreLabel.y = 10;
            game.addChild(this._scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "Lives: " + lives;
            this._scoreLabel.text = "Score: " + scores;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map