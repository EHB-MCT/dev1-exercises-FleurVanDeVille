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
/*
let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

drawnLines();
function drawnLines() {
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    context.lineWidth = 2;

    let xSpacing = width / horizontalLines;
    let ySpacing = height / verticalLines;

    for(let i = 0; i < horizontalLines; i++){
        console.log(i)
        Utils.drawLine(i * xSpacing, 0, width - i * xSpacing, height);
        Utils.drawLine(0, i * ySpacing, height, width - i * ySpacing);
    }


    for(let i = 0; i ≤ verticalLines; i++){
        Utils.drawLine(0, i * ySpacing, width - i * ySpacing);
    }

    1 loop:

    for(let i = 0; i < horizontalLines; i++){
        Utils.drawLine(i * xSpacing, 0, width - i * xSpacing, height);
        Utils.drawLine(0, i * (i % 2) * ySpacing, height, width - i * (i % 2) * ySpacing);
        console.log(i % 2);
    }
} */