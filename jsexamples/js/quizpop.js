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

let currentQuestion = nextQuestion();
let score = 0;
//console.log(qa[currentQuestion].question);
document.getElementById("question").innerHTML = currentQuestion.question;

//Pseudocode
//when i press submit, check for the answer, correct or incorrect, go to the next question, 

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
    // if(currentQuestion != null) {
        if(checkAnswer(currentQuestion.answer) == true){
            increaseScore();
            currentQuestion = nextQuestion();
            updateQuestion();
        } else {
            decreaseScore();
            currentQuestion = nextQuestion();
            updateQuestion();
        }
    // } else {
    //     document.getElementById("question").innerHTML = "Game Over!";
    // }

});

function checkAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    console.log(selected.value);
    if(selected.value == currentQuestion.answer) {
        return true;
    } else {
        return false;
    }
}

function nextQuestion() {
    //currentQuestion = currentQuestion + 1;
    // currentQuestion++;
    // if(currentQuestion == qa.length) {
    //     currentQuestion = 0;
    // }
    if(qa.length > 0) {
        return qa.pop();
    } else {
        return null;
    }
}

function popQuestion() {
    
}

function updateQuestion() {
    if(currentQuestion != null) {
        document.getElementById("question").innerHTML = currentQuestion.question;
    } else {
        document.getElementById("question").innerHTML = "Game Over!";
    }
}

function increaseScore() {
    score++;
    result.innerHTML = "Correct Score: " + score;
    //setTimeout(clearResult, 3000);
}

function decreaseScore() {
    score--;
    result.innerHTML = "Incorrect Score: " + score;
    //setTimeout(clearResult, 3000);
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
}