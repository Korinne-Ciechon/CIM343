"use strict";

const qa = [
    {
        question: "What is the name of the famous clock tower in London?",
        answer: "Big Ben"
    },
    {
        question: "What is the nickname for the London Underground?",
        answer: "The Tube"
    },
    {
        question: "Which side of the road do Londoners drive on?",
        answer: "Left"
    },
    {
        question: "Where can you see the 'Changing of the Guard'?",
        answer: "Buckingham Palace"
    },
    {
        question: "Which University is located in Bloomsbury, London?",
        answer: "UCL"
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById("question").innerHTML = qa[currentQuestion].question;


let submitButton = document.getElementById("submit");
let result = document.getElementById("result");

submitButton.addEventListener("click", function() {
    const selected = document.querySelector('input[name="option"]:checked');
    
    if(!selected) {
        result.innerHTML = "Please select an answer before submitting!";
        setTimeout(clearResult, 5000);
        return; 
    }

    if(selected.value == qa[currentQuestion].answer) {
        score++;
        result.innerHTML = "Correct! Score: " + score;
        setTimeout(clearResult, 5000);
    } else {
        result.innerHTML = "Incorrect. Score: " + score;
        setTimeout(clearResult, 5000);
    }

    selected.checked = false;

    nextQuestion();
    updateQuestion();
    

});

function checkAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    if(selected.value == qa[currentQuestion].answer) {
        return true;
    } else {
        return false;
    }
}

function nextQuestion() {
    currentQuestion++;
    if(currentQuestion == qa.length) {
        result.innerHTML = "Quiz completed! Your final score is: " + score + "/" + qa.length;
        setTimeout(clearResult, 7000);
        currentQuestion = 0;
        score = 0;

    }

}


function updateQuestion() {
    document.getElementById("question").innerHTML = qa[currentQuestion].question;
}


function clearResult() {
    result.innerHTML = "";
}