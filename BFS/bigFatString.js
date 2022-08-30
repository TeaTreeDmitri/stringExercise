"use strict";

let input = "";
let output = "";
let choice = "";

document.querySelector("#generateOutput").addEventListener("click", run)
//run() - Y
//choose() - Y
//A - Y
//B - Y
//C - Y
//D - Y
//G - Y
//E - Y
//F - Y
//H - !N!
// displayAnswer() - Y


function run() {
    input = document.querySelector("#input").value;
    choice = document.querySelector("#choice").value;
    choose();
}

function choose() {
    if (choice === "a") {
        input.toLowerCase();
        output = input.replace(input[0], input[0].toUpperCase());
        console.log("first option:", output);
        displayAnswer();
        //ABOVE may require revision with assigning value to variables

    } else if (choice === "b") {
        output = input.substring(0, input.indexOf(" "));
        //ABOVE might be necessary to write as input.substring(input.[0], input.indexOf(" "));
        console.log("second option:", output);
        displayAnswer();

    } else if (choice === "c") {
        output = input.substring(0, input.indexOf(" "));
        input.length;
        //ABOVE try slice and find length of [0];
        console.log("third option:", output.length);

    } else if (choice === "d") {
        output = input.substring(input.indexOf(" "), input.lastIndexOf(" "));
        console.log("fourth option:", output);
        displayAnswer();

    } else if (choice === "e") {
        output = input.endsWith(".png"||".jpg");
        console.log("fifth option:", output);
        displayAnswer();

    } else if (choice === "f") {
        output = output.padEnd(input.length, "*");
        console.log("sixth option:", output);
        displayAnswer();

    } else if (choice === "g") {
        output = input.replace(input[2], input[2].toUpperCase());
        console.log("seventh option:", output);
        displayAnswer();

    } else if (choice === "h") {
        //locate " " AND locate "-",
        //substring NEXT character
        //make uppercase
        //research 'while'
        output = input.replace(input.indexOf(" "[+1]), input.indexOf(" "[+1]).toUpperCase());
        output = input.replace(input.indexOf("-"[+1]), input.indexOf("-"[+1]).toUpperCase());
        console.log("eighth option:", output);
        displayAnswer();
    }
}

function displayAnswer() {
    document.querySelector("#output").value = output;
}