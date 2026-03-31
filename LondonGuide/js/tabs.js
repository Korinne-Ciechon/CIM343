"use strict";

let tabContent = document.querySelectorAll(".tabcontent");
console.log(tabContent.length);

for(let i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
}

tabContent.forEach(tab => {
    tab.style.display = "none";
});

// grabbing all of the buttons with the class of tablinks
let tabLinks = document.querySelectorAll(".tablinks");
tabLinks.forEach(button => {
    button.addEventListener("click", function(){
        // console.log(button.id);
        tabContent.forEach(tab => {
            tab.style.display = "none";
        });
        tabLinks.forEach(button => {
            button.classList.remove("active-tab");
        });
        button.classList.add("active-tab");
        let currentButton = button.innerHTML;

        let titleElement = document.getElementById("tab-title");
        titleElement.innerHTML = currentButton;
        document.getElementById(currentButton).style.display = "block";
    });
});