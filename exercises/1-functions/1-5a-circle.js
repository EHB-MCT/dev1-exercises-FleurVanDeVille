"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawnRectangle();

function drawnRectangle(){
    context.strokeStyle = "orange";
    context.fillStyle = "orange";
    context.beginPath();
    context.rect(50, 50, 300, 200);
    context.fill();
    context.stroke();

    context.strokeStyle = "yellow";
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(200, 250, 100, 50, 100);
    context.fill();
    context.stroke();

    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.beginPath();
    context.rect(50, 250, 300, 100);
    context.fill();
    context.stroke();
}