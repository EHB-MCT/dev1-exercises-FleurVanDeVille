"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawnRect();

function drawnRect(){
    context.beginPath();
    context.rect(50, 100, 120, 50);
    context.fill();
}