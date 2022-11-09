"use strict";

import context from "./context.js";

/**
 * Draws a line between 2 points
 * @param {Number} x1 X coordinate of the starting point
 * @param {Number} y1 Y coordinate of the starting point
 * @param {Number} x2 X coordinate of the end point
 * @param {Number} y2 Y coordinate of the end point
 */

export function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function rgb(r, g, b){
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

export function strokeCircle(x, y, radius){
    strokeEllipse(x, y, radius);
}

export function fillAndStrokeEllipse(x, y, rX, rY) {
    fillEllipse(x, y, rX, rY);
    strokeEllipse(x, y, rX, rY);
}

function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
}

function strokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.stroke();
}

export function fillCircle(x, y, radius){
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.fill();
}

