/**
File: ScoreBoard.ts
Author: Karan Sharma and Chandan Dadral
Description:  This class set the displays the score of the player
Last Modified : March 19, 2015
*/
var objects;
(function (objects) {
    // SCOREBOARD CLASS ++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard(game) {
            //Labels for the Player Lives
            this._livesLabel = new createjs.BitmapText("LIVES: ", fontAtlas);
            this._livesLabel.scaleX = 0.4;
            this._livesLabel.scaleY = 0.4;
            this._livesLabel.x = 10;
            this._livesLabel.y = 10;
            game.addChild(this._livesLabel);
            //Labels for the Player Scores
            this._scoreLabel = new createjs.BitmapText("SCORE: ", fontAtlas);
            this._scoreLabel.scaleX = 0.4;
            this._scoreLabel.scaleY = 0.4;
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