/**
File: Constants.ts
Author: Karan Sharma and Chandan Dadral
Description: This class has all constant variables that are used in the game 
Last Modified : March 19, 2015
*/

module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTION_STATE: number = 3;
    export var LEVEL_2: number = 4;
    export var LEVEL_3: number = 5;

    

    // Font Constants
    export var FONT_SIZE: string = "40px";
    export var FONT_FAMILY: string = "RetroGirl";
    export var FONT_COLOUR: string = "#FFFF00";

    // Stage Constants
    export var SCREEN_WIDTH: number = 640;
    export var SCREEN_HEIGHT: number = 480;
    export var SCREEN_CENTER_WIDTH: number = SCREEN_WIDTH * 0.5;
    export var SCREEN_CENTER_HEIGHT: number = SCREEN_HEIGHT * 0.5;
    // Game Constants
    export var CLOUD_NUM: number = 4;
    export var BEE_NUM: number = 3;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var PLANE_LIVES = 3;
}   