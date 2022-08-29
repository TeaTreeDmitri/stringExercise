"use strict";

let input = "";
let process = "";
let output = "";
const choice = document.querySelector("#choice");

document.querySelector("#generateOutput").addEventListener("click", run)


function run() {
    input = document.querySelector("#input").textContent;
    choice();
}

function choice() {
    if (choice.value === "a") {
        input.toLowerCase;
        output = input.substring(0, 1).toUpperCase;
        console.log("first option:", output)
        //ABOVE may require revision with assigning value to variables

    } else if (choice.value === "b") {
        output = input.substring(0, input.indexOf(" "));
        //ABOVE might be necessary to write as input.substring(input.[0], input.indexOf(" "));
        console.log("second option:", output);

    } else if (choice.value === "c") {
        output = length(input.substring(0, input.indexOf(" ")))
        console.log("third option:", length);

    } else if (choice.value === "d") {
        output = input.substring(input.indexOf(""), );
        console.log("fourth option:", output);

    } else if (choice.value === "e") {
        output = input.endsWith(".png"||".jpg");
        console.log("fifth option:", output);

    } else if (choice.value === "f") {
        output = input.padEnd(input.length, "*");
        console.log("sixth option:", output);

    } else if (choice.value === "g") {
        output = input[2].toUpperCase;
        console.log("seventh option:", output);

    } else if (choice.value === "h") {
        //locate " " AND locate "-",
        //substring NEXT character
        //make uppercase
        console.log("eighth option:", output);
    }

    displayAnswer();
}

function displayAnswer() {
    document.querySelector("#output").textContent = output;
}