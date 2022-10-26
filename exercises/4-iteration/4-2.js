"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width - 400;
let height = context.canvas.height - 400;

drawnBubbles();

function drawnBubbles() {
    for (let i = 0; i < 80; i++) {
        context.beginPath();
        let h = Math.random() * 255;
        let color = "hsla(" + h +", 100%, 50%, .5)";
        let radius = Math.random() * 50;
        let x = Math.random() * width;
        let y = Math.random() * height;
        context.ellipse(x + 200, y + 200, radius, radius, 0, 0, 360);
        context.fillStyle = color;
        context.fill();
    }
}