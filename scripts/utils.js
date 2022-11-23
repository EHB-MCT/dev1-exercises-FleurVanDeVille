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

/**
 * function that returns a random whole number between a minimum and a maximumm value
 * @param {number} min minimum value
 * @param {number} max maximum value
 */
 export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** function that formats an hsl value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */
 export function hsl(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
}