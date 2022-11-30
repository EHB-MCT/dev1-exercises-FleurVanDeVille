"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let bubble = {
    hue: 100,
    speed: 20
}

context.fillStyle = "lightblue";
context.fillRect(0, 0, width, height);

let hue = Utils.randomNumber(0, 60);

drawnBalloon();
moveBalloon();

function drawnBalloon(){
    for(let i = 0; i < 50; i++){
    let x = Utils.randomNumber(0, width);
    let y = Utils.randomNumber(0, height);
    context.fillStyle = Utils.hsl(hue, 100, 50);
    Utils.fillEllipse(x, y, 20, 30);
    context.lineWidth = 2;
    Utils.drawLine(x, y+30, x, y+60);
}
}

function moveBalloon(){

}