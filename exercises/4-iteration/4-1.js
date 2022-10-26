"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawnLines();

function drawnLines() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    let step = 10;
    let amount = width / step; 
    for(let i= 0; i < 142; i++){
        Utils.drawLine(step * i, 0, width - (step * i), height);
    }
    for(let i= 0; i < 73; i++){
        Utils.drawLine(0, step * i, width,  height - (step * i));
    }
}