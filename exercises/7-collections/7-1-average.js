"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let numbers = [];
let average = 0;
let arrayAmount = 1000;

setup();

function setup(){
    for(let i = 0; i < arrayAmount; i++){
        numbers[i] = Utils.randomNumber(0, 100);
    }
    console.log(calculateAverage(numbers));
}

function calculateAverage(list){
    average += list[i];
    average = average / arrayAmount;
    return average;
}
