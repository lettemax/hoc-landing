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
    gif: leonardoGifSrc,
    checked: false
};
var q2 = {
    question: questions[1],
    ans1: "John Wayne",
    ans2: "Sandra Bullock",
    ans3: "Mandy Moore",
    ans4: "Jennifer Aniston",
    correctAns: "Jennifer Aniston",
    gif: "assets/images/jennifer_aniston.gif",
    checked: false
};
var q3 = {
    question: questions[2],
    ans1: "Kevin Costner",
    ans2: "Michael Jordan",
    ans3: "George Clooney",
    ans4: "Sandra Bullock",
    correctAns: "Sandra Bullock",
    gif: "assets/images/sandra_bullock.gif",
    checked: false
};
var q4 = {
    question: questions[3],
    ans1: "Stephen Curry",
    ans2: "Matt Damon",
    ans3: "Serena Williams",
    ans4: "Will Smith",
    correctAns: "Will Smith",
    gif: "assets/images/will_smith.gif",
    checked: false
};
var q5 = {
    question: questions[4],
    ans1: "Tom Hanks",
    ans2: "Elon Musk",
    ans3: "Jennifer Lawrence",
    ans4: "Michelle Obama",
    correctAns: "Tom Hanks",
    gif: "assets/images/tom_hanks.gif",
    checked: false
};
var q6 = {
    question: questions[5],
    ans1: "Jar Jar Binks",
    ans2: "Emma Stone",
    ans3: "Eva Longoria",
    ans4: "Natalie Portman",
    correctAns: "Emma Stone",
    gif: "assets/images/emma_stone.gif",
    checked: false
};
var q7 = {
    question: questions[6],
    ans1: "Will Ferrell",
    ans2: "Seth Rogen",
    ans3: "James Franco",
    ans4: "Jonah Hill",
    correctAns: "Will Ferrell",
    gif: "assets/images/will_ferrell.gif",
    checked: false
};
var q8 = {
    question: questions[7],
    ans1: "Kim Rilarry",
    ans2: "Leonardo Dicaprio",
    ans3: "Mahommad Similar",
    ans4: "Jim Carrey",
    correctAns: "Jim Carrey",
    gif: "assets/images/jim_carrey.gif",
    checked: false
};
var q9 = {
    question: questions[8],
    ans1: "Elizabeth Thomas",
    ans2: "Tessa Thompson",
    ans3: "Logan Browning",
    ans4: "Carrie Underwood",
    correctAns: "Logan Browning",
    gif: loganGifSrc,
    checked: false
};
var q10 = {
    question: questions[9],
    ans1: "Terrence McKenna",
    ans2: "Penelope Cruz",
    ans3: "Keira Knightley",
    ans4: "Jennifer Lawrence",
    correctAns: "Jennifer Lawrence",
    gif: "jennifer_lawrence.gif",
    checked: false
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

// Declare variable to prevent click function from executing more than once off of one click
var mouseStop = true;

// Declare variable to keep track of last question
var lastQuestion;

// Declare variable to keep track of seconds left in timer
var time = 10;

// Declare variable for interval
var intervalId;


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
    console.log("hiding all divs");
    $("question-frame").hide();
    $("#incorrect-answer-frame").hide();
    $("#correct-answer-frame").hide()
    $("#game-over-frame").hide();
    $("#game-win-frame").hide();
    $("#time-up-frame").hide();
    $("#timer").hide();
}

// Function to check if answer is correct
function checkAnswer (ans) {
    if (!currentQuestion.checked) {
        currentQuestion.checked = true;
        console.log("checking answer");
        // Check if answered correctly, assign true or false to 'correct' variable
        if (currentQuestion.correctAns == ans) {
            correct = true;
        } else {
            correct = false;
        }    
        // Present appropriate div
        if (correct) {
            // Increment index
            index++;
            // Log the result
            console.log("-----");
            console.log("correct, index: "+index);
            console.log("-----");
            // Increment correctAnswers
            correctAnswers++;
            // Stop timer
            stop();
            // Present correct-answer div
            console.log("about to present div2***")
            presentDiv(2);
            // If all questions answered, check for game end
        } else {
            // Increment index
            index++;
            // Log the result
            console.log("-----");
            console.log("incorrect, index: "+index);
            console.log("-----");
            // Stop timer
            stop();
            // Present incorrect-answer-div
            console.log("about to present div3***")
            presentDiv(3);
        }
    }
}

// Function to decrement timer and update timer div
function updateTimer () {
    console.log("-----");
    console.log("call updateTimer");
    //  Decrease time by one.
    time--;
    console.log("time: "+time);
    console.log("-----");
    //  update timer div
    $("#timer").text(time);


    //  Once number hits zero...
    if (time === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      presentDiv(6);
      // Reset time to 10
      time = 10;
      // Update timer div
      $("#timer").text(time);
    }
}

// Function to start timer
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(updateTimer, 1000);
}

// Function to stop timer
function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

// Function to present desired div
function presentDiv(dd) {
    // We want to present the desired div
    if (dd == 1) {
        hideAllDivs();
        console.log("-----");
        console.log("presenting div 1");
        // Set current question according to index
        currentQuestion = qs[index];
        console.log(currentQuestion.question);
        // Increment index, so next time present div 1,
        // will present next question
        console.log("index: ("+index+")");
        console.log("-----");
        // Fill question and answer option rows
        $("#question").text(currentQuestion.question);
        $("#op1").text(currentQuestion.ans1);
        $("#op2").text(currentQuestion.ans2);
        $("#op3").text(currentQuestion.ans3);
        $("#op4").text(currentQuestion.ans4);
        // Set time to ten
        time = 10;
        // Show timer starting at 10
        $("#timer").text(10);
        $("#timer").show();
        // Show the filled question div
        $("#question-frame").show();
        // Start timer
        run();
        // show timer
        // every 1 second, decrease time by 1 and update div
        // When user clicks an option,
        // Check the answer for correctness
        
        $("#op1").one("click", function(){
            if (!currentQuestion.checked) { 
                console.log("clicked op1");
                checkAnswer(currentQuestion.ans1);
            }
        });
        // don't run this twice for the same index
        $("#op2").one("click", function(){
            if (!currentQuestion.checked) { 
                console.log("clicked op2");
                checkAnswer(currentQuestion.ans2);
            }
        });

        $("#op3").one("click", function(){
            if (!currentQuestion.checked) { 
                console.log("clicked op3");
                checkAnswer(currentQuestion.ans3);
            }
        });

        $("#op4").one("click", function(){
            if (!currentQuestion.checked) { 
                console.log("clicked op4");
                checkAnswer(currentQuestion.ans4);
            }
        });
    } else if (dd == 2) {
        hideAllDivs();
        console.log("showing correct answer frame");
        $("#correct-answer-frame").show();
        if (index < qs.length) {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(1)}, 2000);
        } else if (correctAnswers == qs.length) {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(5)}, 2000);
        } else {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(4)}, 2000);
        }
    } else if (dd == 3) {
        hideAllDivs();
        console.log("showing incorrect answer frame");
        $("#answer-doh").text("The correct answer was " + currentQuestion.correctAns);
        $("#incorrect-answer-frame").show();
        if (index < qs.length) {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(1)}, 2000);
        } else {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(4)}, 2000);
        }
    } else if (dd == 4) {
        hideAllDivs();
        console.log("showing game over frame");
        $("#game-over-frame").text("You got " + correctAnswers + " out of 10. Better luck next time");
        $("#game-over-frame").show();
        $("#restart").show();
        $("#restart").mouseup(function(){restart()});
    } else if (dd == 5) {
        hideAllDivs();
        console.log("showing game win frame");
        $("#game-win-frame").show();
        $("#restart").show();
        $("#restart").mouseup(function(){restart()});
    } 
    else if (dd == 6) {
        hideAllDivs();
        console.log("showing time up frame");
        $("#time-up-1").text("TIME'S UP");
        $("#time-up-2").text("The correct answer was " + currentQuestion.correctAns);
        // convert correctAns to celeb gif file
        // replace spaces with underscores
        // var str = currentQuestion.correctAns.replace(/\s+/g, '_');
        // // set to lowercase
        // str = str.toLowerCase();
        // // add .gif to end
        // str+=".gif";
        // console.log(str);
        // // update source of img element
        // $("#celeb-gif").attr("src", str);

        $("#time-up-frame").show();
        index++;
        if (index < qs.length) {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(1)}, 2000);
        } else {
            setTimeout(function() {hideAllDivs()}, 2000);
            setTimeout(function() {presentDiv(4)}, 2000);
        }
    } 
}

// Function to restart game
function restart () {
    console.log("restarting");
    // Hide restart button
    $("#restart").hide();
    // Set correct answers and index back to 0 and desiredDiv back to 1
    correctAnswers = 0;
    index = 0;
    desiredDiv = 1;
    // Clear intervalId
    stop();
    // Reshuffle the questions
    qs = shuffle(qs);
    // Reset time to 10
    time = 10;
    // Reset checked property of each question to false
    for (var i = 0; i < qs.length; i++) {
        qs[i].checked = false;
    }
    // Present the div to show the first question
    presentDiv(desiredDiv);
}

// When the page loads...
$(document).ready( function() {
    console.log("document ready");
    // All divs are hidden
    // We want to show a random question,
    // So we'll shuffle the array of questions
    qs = shuffle(qs);
    // Then present the desired div
    presentDiv(desiredDiv);
});