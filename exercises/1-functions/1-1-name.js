"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawnLine();

function drawnLine(){
    //Letter F
    context.lineWidth = 3;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(80, 50);
    context.lineTo(80, 120);
    context.lineTo(150, 120);
    context.lineTo(80, 120);
    context.lineTo(80, 200);
    context.stroke();

    //Letter l
    context.lineWidth = 3;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(250, 50);
    context.lineTo(250, 200);
    context.stroke();
    
    //Letter e
    context.lineWidth = 3;
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(300, 200);
    context.lineTo(300, 110);
    context.lineTo(350, 110);
    context.lineTo(350, 160);
    context.lineTo(300, 160);
    context.lineTo(300, 200);
    context.lineTo(350, 200);
    context.stroke();

    //Letter u
    context.lineWidth = 3;
    context.strokeStyle = "orange";
    context.beginPath();
    context.moveTo(400, 110);
    context.lineTo(400, 200);
    context.lineTo(460, 200);
    context.lineTo(460, 110);
    context.stroke();

    //Letter r
    context.lineWidth = 3;
    context.strokeStyle = "pink";
    context.beginPath();
    context.moveTo(510, 200);
    context.lineTo(510, 110);
    context.lineTo(560, 110);
    context.lineTo(560, 160);
    context.lineTo(510, 160);
    context.lineTo(560, 200);
    context.stroke();
}