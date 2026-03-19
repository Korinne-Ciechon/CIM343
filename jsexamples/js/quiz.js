"use strict";

const qa = [
    {
        question: "What is the largest land animal?",
        answer: "Elephant"
    },
    {
        question: "Which animal is known as the king of the jungle?",
        answer: "Lion"
    },
    {
        question: "What mammal can fly?",
        answer: "Bat"
    },
    {
        question: "Which animal is famous for its black and white stripes?",
        answer: "Zebra"
    },
    {
        question: "What is the fastest land animal?",
        answer: "Cheetah"
    }
];

let currentQuestion = 0;
let score = 0;
console.log(qa[currentQuestion].question);
document.getElementById("question").innerHTML = qa[currentQuestion].question;

//Pseudocode
//when i press submit, check for the answer, correct or 
// incorrect, go to the next question, 

let submitButton = document.getElementById("submit");
let result = document.getElementById("result");

submitButton.addEventListener("click", function() {
    //const selected = document.querySelector('input[name="option"]:checked');
    //console.log(selected.value);
    // if(selected.value == qa[currentQuestion].answer) {
    //     console.log("correct");
    //     //result.innerHTML = "Correct";
    //     increaseScore();
    //     nextQuestion();
    //     updateQuestion();
    // } else {
    //     console.log("incorrect");
    //     //result.innerHTML = "Incorrect";
    //     decreaseScore();
    //     nextQuestion();
    //     updateQuestion();
    // }
    if(checkAnswer() == true){
        increaseScore();
        nextQuestion();
        updateQuestion();
    } else {
        decreaseScore();
        nextQuestion();
        updateQuestion();
    }

});

function checkAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    console.log(selected.value);
    if(selected.value == qa[currentQuestion].answer) {
        return true;
    } else {
        return false;
    }
}


function nextQuestion() {
    //currentQuestion = currentQuestion + 1;
    currentQuestion++;
    if(currentQuestion == qa.length) {
        currentQuestion = 0;
    }

}

function updateQuestion() {
    document.getElementById("question").innerHTML = qa[currentQuestion].question;
}

function increaseScore() {
    score++;
    result.innerHTML = "Correct Score: " + score;
    setTimeout(clearResult, 3000);
}

function decreaseScore() {
    score--;
    result.innerHTML = "Incorrect Score: " + score;
    setTimeout(clearResult, 3000);
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
}