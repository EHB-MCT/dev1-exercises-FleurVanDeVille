"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let arrayAmount = 1000;
let numbers = Math.random(0, 100) * 100;
let average = 1;
let calculate = [];

calculateAverage();

function calculateAverage(){
    for(let i = 0; i < arrayAmount; i++){
        calculate[i] = numbers;
    }
    console.log(calculateAverage);
}