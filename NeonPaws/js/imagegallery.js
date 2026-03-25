"use strict";

let galleryClass = document.querySelectorAll(".imageGallery");
console.log(galleryClass);
console.log(galleryClass.length);
let currentImage = 0;

function nextImage(){
    galleryClass[currentImage].style.display = "none";
    galleryClass[currentImage].classList.remove("hologram-focus");

    currentImage = currentImage + 1; //currentImage++;
    if(currentImage == galleryClass.length){
        currentImage = 0;
    }
    galleryClass[currentImage].style.display = "block";
    galleryClass[currentImage].classList.add("hologram-focus");
}

// loop through all the images and hide them
for(let i = 0; i < galleryClass.length; i++){
    galleryClass[i].style.display = "none"; 
}

// show the first image

galleryClass[currentImage].style.display = "block";

// next button
let nextButton = document.getElementById("next");

//step forward, just calling the function as nextImage
nextButton.addEventListener("click", nextImage);

// previous button
let previousButton = document.getElementById("previous");

previousButton.addEventListener("click", function(){
    galleryClass[currentImage].style.display = "none";
    galleryClass[currentImage].classList.remove("hologram-focus");

    currentImage = currentImage - 1; //currentImage--;

    if(currentImage == -1){
        currentImage = galleryClass.length - 1;
    }
    galleryClass[currentImage].style.display = "block";
    galleryClass[currentImage].classList.add("hologram-focus"); 
});

// start button
let startButton = document.getElementById("start");

let autoCycleActive = false;
let cycleInterval;

startButton.addEventListener("click", function(){
    if(autoCycleActive == false){
        autoCycleActive = true;
        cycleInterval = setInterval(function(){
            console.log("interval start");
            // galleryClass[currentImage].style.display = "none";
            // currentImage = currentImage + 1; //currentImage++;
            // if(currentImage == galleryClass.length){
            //     currentImage = 0;
            // }
            // galleryClass[currentImage].style.display = "block";

            //calling from the function nextImage to avoid repeating code
            nextImage();
        },3000);
    }

});

// stop button
let stopButton = document.getElementById("stop");

stopButton.addEventListener("click", function(){
    clearInterval(cycleInterval);
    autoCycleActive = false;
});