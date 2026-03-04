"user strict";

let galleryClass = document.querySelectorAll(".imageGallery");
console.log(galleryClass);
console.log(galleryClass.length);

/*
galleryClass[0].style.display = "none"; // removes narwal (first image)
galleryClass[1].style.display = "none";
galleryClass[2].style.display = "none";
*/

/*
for(let i = 0; i <10; i++){
    console.log(i);
}
*/

// loop through all the images and hide them
for(let i = 0; i < galleryClass.length; i++){
    galleryClass[i].style.display = "none"; 
}

// show the first image
let currentImage = 0;

galleryClass[currentImage].style.display = "block";

// next button
let nextButton = document.getElementById("next");

nextButton.addEventListener("click", function(){
    galleryClass[currentImage].style.display = "none";
    currentImage = currentImage + 1; //currentImage++;
    if(currentImage == galleryClass.length){
        currentImage = 0;
    }
    galleryClass[currentImage].style.display = "block";
});

// previous button
let previousButton = document.getElementById("previous");

previousButton.addEventListener("click", function(){
    galleryClass[currentImage].style.display = "none";
    currentImage = currentImage - 1; //currentImage--;

    if(currentImage == -1){
        currentImage = galleryClass.length - 1;
    }
    galleryClass[currentImage].style.display = "block";
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
        },3000);
    }

});