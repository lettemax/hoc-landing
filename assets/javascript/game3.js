// Strings for gif files that were too big to store locally
var leonardoGifSrc = "https://media1.tenor.com/images/8c8f18bec7ba6a1b7ddc2ef76664e9ae/tenor.gif?itemid=10584134";
var loganGifSrc = "https://thumbs.gfycat.com/EssentialRegalCockroach-small.gif";

// Array of all questions
var questions = ["Who played Jordan Belfort in Wolf of Wall Street?", 
                "Who had a lead role in the show Friends?",
                "Who led the bad*ss pack of wolves in Ocean's Eight?",
                "Who has a son named Jaden and a daughter named Willow?",
                "Who plays the lead detective in the movie Catch Me If You Can?",
                "Who co-stars in La La Land alongside the mysterious Ryan Gosling?",
                "Who plays Brennan Huff in the movie, Step Brothers?",
                "Whose name rhymes with Shmim Shmarrey?",
                "Who stars in the popular Netflix series, Dear White People?",
                "Who co-stars alongside Bradley Cooper in Silver Linings Playbook?"];


// Creating trivia question objects
var q1 = {
    question: questions[0],
    ans1: "John Wayne",
    ans2: "Mike Meyers",
    ans3: "Madam Sandler",
    ans4: "Leonardo Dicaprio",
    correctAns: "Leonardo Dicaprio",
    gif: leonardoGifSrc
};
var q2 = {
    question: questions[1],
    ans1: "John Wayne",
    ans2: "Sandra Bullock",
    ans3: "Mandy Moore",
    ans4: "Jennifer Aniston",
    correctAns: "Jennifer Aniston",
    gif: "assets/images/jennifer_aniston.gif"
};
var q3 = {
    question: questions[2],
    ans1: "Kevin Costner",
    ans2: "Michael Jordan",
    ans3: "George Clooney",
    ans4: "Sandra Bullock",
    correctAns: "Sandra Bullock",
    gif: "assets/images/sandra_bullock.gif"
};
var q4 = {
    question: questions[3],
    ans1: "Stephen Curry",
    ans2: "Matt Damon",
    ans3: "Serena Williams",
    ans4: "Will Smith",
    correctAns: "Will Smith",
    gif: "assets/images/will_smith.gif"
};
var q5 = {
    question: questions[4],
    ans1: "Tom Hanks",
    ans2: "Elon Musk",
    ans3: "Jennifer Lawrence",
    ans4: "Michelle Obama",
    correctAns: "Tom Hanks",
    gif: "assets/images/tom_hanks.gif"
};
var q6 = {
    question: questions[5],
    ans1: "Jar Jar Binks",
    ans2: "Emma Stone",
    ans3: "Eva Longoria",
    ans4: "Natalie Portman",
    correctAns: "Emma Stone",
    gif: "assets/images/emma_stone.gif"
};
var q7 = {
    question: questions[6],
    ans1: "Will Ferrell",
    ans2: "Seth Rogen",
    ans3: "James Franco",
    ans4: "Jonah Hill",
    correctAns: "Will Ferrell",
    gif: "assets/images/will_ferrell.gif"
};
var q8 = {
    question: questions[7],
    ans1: "Kim Rilarry",
    ans2: "Leonardo Dicaprio",
    ans3: "Mahommad Similar",
    ans4: "Jim Carrey",
    correctAns: "Jim Carrey",
    gif: "assets/images/jim_carrey.gif"
};
var q9 = {
    question: questions[8],
    ans1: "Elizabeth Thomas",
    ans2: "Tessa Thompson",
    ans3: "Logan Browning",
    ans4: "Carrie Underwood",
    correctAns: "Logan Browning",
    gif: loganGifSrc
};
var q10 = {
    question: questions[9],
    ans1: "Terrence McKenna",
    ans2: "Penelope Cruz",
    ans3: "Keira Knightley",
    ans4: "Jennifer Lawrence",
    correctAns: "Jennifer Lawrence",
    gif: "jennifer_lawrence.gif"
};

// Declare and fill array of trivia questions
var qs = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// Declare variable to hold current question 
var currentQuestion;

// Declare variable to hold index of current question
var index = 0;

// Declare variable to hold desired div index
var desiredDiv = 1;

// Declare boolean to hold value of whether user guessed correctly or not 
var correctAnswer;

// Declare variable to hold number of correct answers, when == 10 => game won!
var correctAnswers = 0;

// Function from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
// to shuffle array [of trivia questions]
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    console.log(currentIndex);
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    } 
    return array;
}

// Function to hide all divs
function hideAllDivs () {
    $("question-frame").hide();
    $("#incorrect-answer-frame").hide();
    $("#correct-answer-frame").hide()
    $("#game-over-frame").hide();
    $("#game-win-frame").hide();
}

// Function to check if game should end
function checkGameEnd () {
    // if answered ten questions
    if (correctAnswers == qs.length) {
        // Show game-win div
        presentDiv(5);
    } else {
        // Show game-over div
        presentDiv(4);
    }
}

// Function to check if answer is correct
function checkAnswer (ans) {
    // Increment index
    index++;
    // Check if answered correctly, assign true or false to 'correct' variable
    if (currentQuestion.correctAns == ans) {
        correct = true;
    } else {
        correct = false;
    }    
    // Present appropriate div
    if (correct) {
        // Log the result
        console.log("correct");
        // Increment correctAnswers
        correctAnswers++;
        // Present correct-answer div
        presentDiv(2);
        // If all questions answered, check for game end
    } else {
        // Log the result
        console.log("incorrect");
        // Present incorrect-answer-div
        presentDiv(3);
    }
    // Check if gameEnd call needed
    if (index == qs.length) {
        checkGameEnd();
    }
}

function presentDiv(dd) {
    // Hide all divs
    hideAllDivs();
    // We want to present the desired div
    if (dd == 1) {
        // Set current question according to index
        currentQuestion = qs[index];
        // Fill question and answer option rows
        $("#question").text(currentQuestion.question);
        $("#op1").text(currentQuestion.ans1);
        $("#op2").text(currentQuestion.ans2);
        $("#op3").text(currentQuestion.ans3);
        $("#op4").text(currentQuestion.ans4);
        // Show the filled div
        $("question-frame").show();
        // When user clicks an option,
        // Check the answer for correctness
        $("#op1").mouseup(function(){
            console.log("op1 clicked___");
            checkAnswer(currentQuestion.ans1);
        });
        $("#op2").mouseup(function(){
            console.log("op2 clicked___");
            checkAnswer(currentQuestion.ans2);
        });
        $("#op3").mouseup(function(){
            console.log("op3 clicked___");
            checkAnswer(currentQuestion.ans3);
        });
        $("#op4").mouseup(function(){
            console.log("op4 clicked___");
            checkAnswer(currentQuestion.ans4);
        });
    } else if (dd == 2) {
        $("#correct-answer-frame").show();
        if (index < qs.length) {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(1)}, 2100);
        } else if (correctAnswers == qs.length) {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(5)}, 2100);
        } else {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(4)}, 2100);
        }
    } else if (dd == 3) {
        $("#incorrect-answer-frame").show();
        if (index < qs.length) {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(1)}, 2100);
        } else {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(4)}, 2100);
        }
    } else if (dd == 4) {
        $("#game-over-frame").show();
    } else if (dd == 5) {
        $("#game-win-frame").show();
    } 
}

// Function to restart game
function restart () {
    correctAnswers = 0;
    index = 0;
    desiredDiv = 1;
    qs = shuffle(qs);
    presentDiv(desiredDiv);
}

// When the page loads...
$(document).ready( function() {
    // All divs are hidden
    // We want to show a random question,
    // So we'll shuffle the array of questions
    qs = shuffle(qs);
    // Then present the desired div
    presentDiv(desiredDiv);
    // Handle click of restart button
    $("#restart").click(restart);
});