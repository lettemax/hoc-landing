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

// Function to show divs when user answers correctly
function showCorrectDivs () {
    console.log("Showing correct divs");
    $("#answer-frame").show();
    $("#answer-correct").show();
    $("#correct-answer-gif").show();
}

// Function to hide correct answer divs 
function hideCorrectDivs () {
    console.log("Hiding correct divs");
    $("#answer-frame").hide();
    $("#answer-correct").hide();
    $("#correct-answer-gif").hide();
}

// Function to show divs when user answers incorrectly
function showDohDivs () {
    console.log("Showing doh divs");
    $("#answer-frame").show();
    $("#answer-doh").show();
    $("#doh-answer-gif").show();
}

// Function to show divs when user answers incorrectly
function hideDohDivs () {
    console.log("Hiding doh divs");
    $("#answer-frame").hide();
    $("#answer-doh").hide();
    $("#doh-answer-gif").hide();
}

// Function to enable answer option clicking
function enableClicking () {
    $('#op1').attr("disabled", false);
    $('#op2').attr("disabled", false);
    $('#op3').attr("disabled", false);
    $('#op4').attr("disabled", false);
}

// Function to check if answer is correct
function checkAnswer (ans) {
    if (q.correctAns==ans) {
        correct = true;
    } else {
        correct = false;
    }    
    // If correct, then we want to show the user 
    // the appropriate divs, hiding the question divs first
    $("#question-frame").hide();
    if (correct) {
        // Log the result
        console.log("correct");
        // Show the correct divs
        showCorrectDivs();
        // After 2 seconds, hide the correct divs
        setTimeout(function () {hideCorrectDivs()}, 2000);
        // Increment the question index by 1
        qIndex++;
        // After 2.1 seconds, present the next question
        setTimeout(function () {presentQuestion()}, 2100);
    } else {
        // Log the result
        console.log("incorrect");
        // Show the doh divs
        showDohDivs();
        // After 2 seconds, hide the doh divs
        setTimeout(function () {hideDohDivs()}, 2000);
        // Increment the question index by 1
        qIndex++;
        // After 2.1 seconds, present the next question
        setTimeout(function () {presentQuestion()}, 2100);
    }
}

// Function to present a question 
function presentQuestion () {
    // We want to present the question at the current index, qIndex
    // So we set the current question to 
    q = qs[qIndex];
    console.log("presenting question: "+q.question);
    // Then we fill the html elements  
    // with the question and the four answer options
    $("#question").text(q.question);
    $("#op1").text(q.ans1);
    $("#op2").text(q.ans2);
    $("#op3").text(q.ans3);
    $("#op4").text(q.ans4);
    // The question-frame div is hidden, so we must show it
    $("#question-frame").show();
    // Now we should have presented the question
    // So now we should prepare to handle the event of
    // a user clicking on an answer 
    $("#op1").click(function () {
        $('#op1').attr("disabled", true);
        console.log($('#op1').attr("disabled"));
        // $('#op1').attr("enabled", true);
        // console.log($('#op1').attr("enabled"));
        console.log("op1 clicked___");
        checkAnswer(q.ans1);
    });
    $("#op2").click(function () {
        $('#op2').attr("disabled", true);
        console.log("op2 clicked___");
        checkAnswer(q.ans2);
    });
    $("#op3").click(function () {
        $('#op3').attr("disabled", true);
        console.log("op3 clicked___");
        checkAnswer(q.ans3);
    });
    $("#op4").click(function () {
        $('#op4').attr("disabled", true);
        console.log("op4 clicked___");
        checkAnswer(q.ans4);
    });
}

// When the page loads...
$(document).ready( () => {
    // We want to show a random question
    // So we'll shuffle the array of questions
    qs = shuffle(qs);
    // And then present the question frame
    presentQuestion();
    // Handle click of restart button
    // $("#restart").click(restart);
});