"use strict"

let redClickBox = document.getElementById("redClick");

redClickBox.classList.add("clickBox");

redClickBox.addEventListener("click", function(){
    //action that I want to do when I click on the red box
    document.querySelector("body").style.backgroundColor = "blueviolet";
    redClickBox.style.backgroundColor = "orange";
});

redClickBox.addEventListener("mouseover", function(){
    redClickBox.style.backgroundColor = "rgba(0,225,0,0.75)";
});

redClickBox.addEventListener("mouseout", function(){
    redClickBox.style.backgroundColor = "red";
});

let showButton = document.getElementById("show");

let showHideBox = document.getElementById("showHideBox");

showButton.addEventListener("click", function(){
    showHideBox.style.visibility = "visible";
});

let hideButton = document.getElementById("hide");

let showHideBox2 = document.getElementById("showHideBox2");

hideButton.addEventListener("click", function(){
    showHideBox2.style.visibility = "hidden";
}); 