/**
File: Constants.ts
Author: Karan Sharma and Chandan Dadral
Description: This class has all constant variables that are used in the game
Last Modified : March 19, 2015
*/
var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTION_STATE = 3;
    constants.LEVEL_2 = 4;
    constants.LEVEL_3 = 5;
    // Font Constants
    constants.FONT_SIZE = "40px";
    constants.FONT_FAMILY = "RetroGirl";
    constants.FONT_COLOUR = "#FFFF00";
    // Stage Constants
    constants.SCREEN_WIDTH = 640;
    constants.SCREEN_HEIGHT = 480;
    constants.SCREEN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCREEN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    // Game Constants
    constants.CLOUD_NUM = 4;
    constants.BEE_NUM = 3;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.PLANE_LIVES = 3;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map