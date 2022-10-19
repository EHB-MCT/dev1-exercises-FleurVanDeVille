"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 2;
    while (i < 11) {
        console.log(i);
        Utils.drawLine(75, 50 + i * 25, 325, 50 + i * 25 );
        i ++;
    }
}
