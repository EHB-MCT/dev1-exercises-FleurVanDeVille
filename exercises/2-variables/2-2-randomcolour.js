"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

drawRect(50, 300);
drawRect(70, 260);
drawRect(90, 220);
drawRect(110, 180);
drawRect(130, 140);
drawRect(150, 100);
drawRect(170, 60);
drawRect(190, 20);


function drawRect(pos, size){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb( " + r +  "," + g + "," + b + ")";

    context.fillStyle = color;
    context.fillRect( pos, pos, size, size);
}
