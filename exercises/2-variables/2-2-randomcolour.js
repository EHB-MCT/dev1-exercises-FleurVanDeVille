"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

let size = 400;

drawRect(50, 50, 300, 300);
drawRect(70, 70, 260, 260);
drawRect(90, 90, 220, 220);
drawRect(110, 110, 180, 180);
drawRect(130, 130, 140, 140);
drawRect(150, 150, 100, 100);
drawRect(170, 170, 60, 60);
drawRect(190, 190, 20, 20);


function drawRect(x, y, size){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb( " + r +  "," + g + "," + b + ")";

    context.fillStyle = color;
    context.fillRect( x, y, size, size);
}
