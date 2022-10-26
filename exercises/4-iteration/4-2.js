"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawnBubbles();

function drawnBubbles() {
    for (let i = 0; i < 80; i++) {
        context.beginPath();
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        console.log(r, g, b);
        let color = "rgb( " + r +  "," + g + "," + b + ")";
        let radius = Math.random() * 40;
        let x = Math.random() * width - 200;
        let y = Math.random() * height - 200;
        context.ellipse(x, y, radius, radius, 0, 0, 360);
        context.fillStyle = color;
        context.fill();

    }
}