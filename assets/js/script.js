var header = document.getElementById("header");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");

var question = document.getElementById("question");
var choices = document.getElementById("choices");

var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4= document.getElementById("4");

var finalScore= document.getElementById("finalScore");
var endMessage = document.getElementById("endMessage");
var result = document.getElementById("result");
var scoreList = document.getElementById("scorelist");

var questions = [
    { question: 'Commonly used data types DO NOT include:', 
    choice1 : "1. strings",
    choice2 : "2. booleans",
    choice3 : "3. alerts",
    choice4 : "4. numbers",
    correct: "3"
    },
    { question: "The condition in an if / else statement is enclosed with ________.", 
    choice1 : "1. quotes",
    choice2 : "2. curly brackets",
    choice3 : "3. parenthesis",
    choice4 : "4. square brackets",
    correct: "2"
    },
    { question: "Arrays in JavaScript can be used to store ________.", 
    choice1 : "1. numbers and strings",
    choice2 : "2. other arrays",
    choice3 : "3. booleans",
    choice4 : "4. all of the above",
    correct: "4"
    },
    { question: "String values must be enclosed within ______ when being assigned to variables.", 
    choice1 : "1. commas",
    choice2 : "2. curly brackets",
    choice3 : "3. quotes",
    choice4 : "4. parenthesis",
    correct: "3"
    },
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    choice1 : "1. JavaScript",
    choice2 : "2. terminal/bash",
    choice3 : "3. for loops",
    choice4 : "4. console.log",
    correct: "4"
    },
]  

intro.style.display = "block";
quiz.style.display = "none";
finalScore.style.display = "none";

var timeStart = document.getElementById("timeStart");

timeStart.addEventListener("click", startQuiz);

var timeLeft = 75;
var startScore = 0;
var timer = document.getElementById("timer");

timer.textContent = "Time: " + startScore + "s";

function startQuiz() {
    quiz.style.display = "block";
    question.style.display ="block";
    header.style.display = "block";
    intro.style.display = "none";
    finalScore.style.display = "none";


    var timeInterval = setInterval(function() {
        timer.textContent = "Time:" + timeLeft + "s";
        timeLeft-=1;

        if(timeLeft === 0 || questions.length === runningQuestionIndex+1)  {
            resultRender();
            clearInterval(timeInterval);
            timer.textContent = "Time:" + timeLeft + "s";
         }
    }, 1000);

    renderQuestion();
};

var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;    

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
};

function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        answers.textContent = "Correct!"
    }
    else {
       answers.textContent = "Wrong!"
       timeLeft -=10;
    }

    if (questions.length === runningQuestionIndex+1) {
        resultRender();
        return;
    }
        runningQuestionIndex++;
        renderQuestion();
    };   
