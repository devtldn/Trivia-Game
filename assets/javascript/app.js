var q1 = {
    question: "In which year did Canada became a country?",
    answer: "1867",
    option1: "1902",
    option2: "1848",
    option3: "1953"
};

var q2 = {
    question: "True or false: A mistletoe is a parasite.",
    answer: "True",
    option1: "False",
    option2: "I don't know..."
};

var q3 = {
    question: "Which mountain range runs through Pennsylvania?",
    answer: "Blue Mountain",
    option1: "Mont Blanc",
    option2: "Longs Peek",
    option3: "Mount Elous"
};

var q4 = {
    question: "Who helped the U.S. in the Revolutionary War?",
    answer: "France",
    option1: "Germany",
    option2: "Russia",
    option3: "China"
};

var q5 = {
    question: "Who was the second man to walk on the moon?",
    answer: "Buzz Aldrin",
    option1: "Alan Bean",
    option2: "Pete Conrad",
    option3: "Michael Jordan"
};

var q6 = {
    question: "How high can a cat fall (average) without injury?",
    answer: "5.5 stories",
    option1: "32 stories",
    option2: "15.5 stories",
    option3: "20 stories"
};

var q7 = {
    question: "Which fruit is NOT native to North America?",
    answer: "Strawberries",
    option1: "Concord grapes",
    option2: "Blueberries",
    option3: "Cranberries"
};

var q8 = {
    question: "What percentage of the world (approximate) is left-handed?",
    answer: "10%",
    option1: "15%",
    option2: "18%",
    option3: "No such statistic: Left-handed people are actually right-handed people who use the right side of their brain."
};

var q9 = {
    question: "Which animated film(s) received an Academy Award for Best Animated Feature?",
    answer: "All of the above",
    option1: "Spirited Away (2002)",
    option2: "Up (2009)",
    option3: "WALL-E (2008)",
    option4: "Big Hero 6 (2014)"
};

var q10 = {
    question: "True or false: Cashmere is the same as merino wool.",
    answer: "False",
    option1: "True",
    option2: "I don't even own either fabrics--what."
};


var counter = 20;
var timerRunning = false;
var time = 0;
var timerId;


function timerGo() {
    clearInterval(timerId);
    timerId = setInterval(countDown, 1000);
}

function timerReset() {
    if (!timerRunning) {
        timerId = setInterval(counter, 1000);
        timerRunning = true;
    }
}

function countDown() {
    counter--;
    $("#main-content").text(`Time remaining: ${counter}`);
    if (counter === 0) {
        timerStop();
        $("#main-content").append("<br>OUT OF TIME!");
        $("#main-content").append(`<br><img src=https://media.giphy.com/media/JzOyy8vKMCwvK/giphy-downsized.gif>`);
    }
}

function timerStop() {
    clearInterval(timerId);
}

function q1() {
    timerGo();

}