

let textInput = document.getElementById("myText");
let textNumber = document.getElementById("myNumber");
let textSelect = document.getElementById("mySelect");

let textInputButton = document.getElementById("myButton");

let output = document.getElementById("output");

textInputButton.addEventListener("click", function() {
    console.log("textInput: " + textInput.value);
    console.log("textNumber: " + textNumber.value);
    console.log("textSelect: " + textSelect.value);

    for (let i = 0; i < textNumber.value; i++) {
        output.innerHTML += "<div class='box'>" + textInput.value + "</div>";
    }

    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = textSelect.value;
        boxes[i].style.width = "100px";
        boxes[i].style.height = "100px";
        boxes[i].style.padding = "5px";
        boxes[i].style.margin = "5px";
        boxes[i].style.textAlign = "center";
    }

});