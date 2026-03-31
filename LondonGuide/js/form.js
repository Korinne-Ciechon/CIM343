"use strict";

let textInput = document.getElementById("myText");
let textNumber = document.getElementById("myNumber");
let textSelect = document.getElementById("mySelect");
let textInputButton = document.getElementById("myButton");
let output = document.getElementById("output");

textInputButton.addEventListener("click", function() {

    console.log("Adding " + textNumber.value + " items to prep list");

    for (let i = 0; i < textNumber.value; i++) {
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.style.backgroundColor = textSelect.value;
        newBox.innerHTML = textInput.value;
        output.appendChild(newBox);
    }

   
});