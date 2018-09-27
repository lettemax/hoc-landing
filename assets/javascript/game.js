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
var q;

// Declare variable to hold index of current question
var qIndex = 0;

// Variable to keep track of whether or not user choice was correct
var correct = false;

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
  
// Function to move on to next trivia question
function nextQ () {
    // Increment question index
    qIndex++;
    // Present next question
    presentQuestion(qIndex);
}

// Function to check answer
function showAnswer () {
    console.log("checking answer***")
    // Hide the answer-frame
    $("#question-frame").hide();
    // If user chose correct answer
    if (correct) {
        // Show answer-frame
         $("#answer-frame").show();
        // Show correct answer text and gif 
        $("#answer-correct").show();
        $("#correct-answer-gif").show();
    } else {
        // Show answer-frame
        $("#answer-frame").show();
        // Show incorrect answer text and gif
        $("#answer-doh").show();
        $("#doh-answer-gif").show();
    }
    // Wait 2 seconds, then move on to next question
    setTimeout(nextQ(), 2000);
    
}
// Function to show answer frame
function checkAndShowAnswer (ans) {
    if (ans == q.correctAns) {
        correct=true;
    } else {
        correct=false;
    }
    setTimeout(showAnswer(), 200);
}

// Function to present a trivia question to user
function presentQuestion () {
    // Set global q variable to question being presented
    q = qs[qIndex];
    console.log("calling presentQuestion()");
    console.log(q);
    console.log("--------");

    // Set the question and the answer options
    $("#question").text(q.question);
    $("#op1").text(q.ans1);
    $("#op2").text(q.ans2);
    $("#op3").text(q.ans3);
    $("#op4").text(q.ans4);
    // Show the question and answer options
    $("#question-frame").show();
    // Handle click-selection of answer, check clicked answer
    $("#op1").click(function () {
        console.log("op1 clicked___")
        setTimeout(checkAndShowAnswer(q.ans1), 500);
    });
    $("#op2").click(function () {
        console.log("op2 clicked___")
        setTimeout(checkAndShowAnswer(q.ans2), 500);
    });
    $("#op3").click(function () {
        console.log("op3 clicked___")
        setTimeout(checkAndShowAnswer(q.ans3), 500);
    });
    $("#op4").click(function () {
        console.log("op4 clicked___")
        setTimeout(checkAndShowAnswer(q.ans4), 500);
    });
}

// Function to restart game
function restart () {
    // Hide the question and answer frames
    $("#question-frame").hide();
    $("#answer-frame").hide();
    // Shuffle the array of trivia questions
    qs = shuffle(qs);
    // Set current question index to 0
    qIndex = 0;
    // Present the first question
    presentQuestion();
}

// Function to hide all game divs
function hideGameDivs () {
    $("#question-frame").hide();
    $("#answer-frame").hide();
    $("#correct-answer-gif").hide();
    $("#doh-answer-gif").hide();
    $("#answer-doh").hide();
    $("#answer-correct").hide();
}

// Function to show question divs
function showQuestionDivs () {
    $("#question-frame").show();
}

// Function to hide question divs
function hideQuestionDivs () {
    $("#question-frame").hide();
}

// Function to show correct answer divs
function showCorrectAnsDivs () {
    $("#answer-frame").show();
    $("#correct-answer-gif").show();
    $("#answer-correct").show();
}

// Function to show doh answer divs
function showDohAnsGifs () {
    $("#answer-frame").show();
    $("#doh-answer-gif").show();
    $("#answer-doh").show();
}

// When the page loads...
$(document).ready( () => {
    // Hide the question and answer frames
    hideGameDivs();
    // Shuffle the array of trivia questions
    qs = shuffle(qs);
    // Present the first question
    presentQuestion();
    // Handle click of restart button
    $("#restart").click(restart);
});