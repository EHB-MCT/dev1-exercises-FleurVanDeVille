"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawnRectangle();

function drawnRectangle(){
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "lightblue";
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
    context.stroke();

    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "lightblue";
    context.beginPath();
    context.rect(50, 50, 250, 250);
    context.fill();
    context.stroke();

    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "lightblue";
    context.beginPath();
    context.rect(100, 50, 200, 200);
    context.fill();
    context.stroke();

    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "lightblue";
    context.beginPath();
    context.rect(150, 100, 150, 150);
    context.fill();
    context.stroke();

    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "lightblue";
    context.beginPath();
    context.rect(150, 150, 100, 100);
    context.fill();
    context.stroke();
}