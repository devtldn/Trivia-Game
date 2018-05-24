$(document).ready(function() {

    var q1 = {
        question: "In which year did Canada become a country?",
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


    function question1() {
        $(".start-button").click(function() {
            $("#main-content").html("<div>Question 1:</div><br>")
            $("#main-content").append(`<div>${q1.question}</div>`);
            $("#main-content").append(`<div><button type="button" id="options">${q1.option1}</button></div>`);
            $("#main-content").append(`<div><button type="button" id="options">${q1.option2}</button></div>`);
            $("#main-content").append(`<div><button type="button" id="options">${q1.option3}</button></div>`);
            $("#main-content").append(`<div><button type="button" id="answer">${q1.answer}</button></div>`);
        });
    };
    question1();
    
    if ($("#answer").click(function() {
        $("#main-content").html("<div>Correct!!</div>");
        $("#main-content").append("<img src='http://gph.is/2fE9KzN'>");
    }));

    

    function question2() {
        $("#main-content").html("<div>Question 2:</div><br>")
        $("#main-content").append(`<div>${q3.question}</div>`);
        $("#main-content").append(`<div><button type="button" id="answer">${q2.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q2.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q2.option2}</button></div>`);
    };

    // Conditional for question2 goes here
    // Execute question3 after result

    function question3() {
        $("#main-content").html("<div>Question 3:</div><br>")
        $("#main-content").append(`<div>${q3.question}</div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q3.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="answer">${q3.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q3.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q3.option3}</button></div>`);
    };

    // Conditional for question3 goes here
    // Execute question4 after result

    function question4() {
        $("#main-content").html("<div>Question 4:</div><br>")
        $("#main-content").append(`<div>${q4.question}</div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q4.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q4.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q4.option3}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="answer">${q4.answer}</button></div>`);
    };

    // Conditional for question4 goes here
    // Execute question5 after result

    function question5() {
        $("#main-content").html("<div>Question 5:</div><br>")
        $("#main-content").append(`<div>${q5.question}</div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q5.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q5.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="answer">${q5.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q5.option3}</button></div>`);
    };

    // Conditional for question5 goes here
    // Execute question6 after result

    function question6() {
        $("#main-content").html("<div>Question 6:</div><br>")
        $("#main-content").append(`<div>${q4.question}</div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q4.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="answer">${q4.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q4.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q4.option3}</button></div>`);
    };

    // Conditional for question6 goes here
    // Execute question7 after result

    function question7() {
        $("#main-content").html("<div>Question 7:</div><br>")
        $("#main-content").append(`<div>${q7.question}</div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q7.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="answer">${q7.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q7.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q7.option3}</button></div>`);
    };

    // Conditional for question7 goes here
    // Execute question8 after result

    function question8() {
        $("#main-content").html("<div>Question 8:</div><br>")
        $("#main-content").append(`<div>${q8.question}</div>`);
        $("#main-content").append(`<div><button type="button" id="answer">${q8.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q8.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q8.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q8.option3}</button></div>`);
    };

    // Conditional for question8 goes here
    // Execute question9 after result

    function question9() {
        $("#main-content").html("<div>Question 9:</div><br>")
        $("#main-content").append(`<div>${q9.question}</div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q9.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q9.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q9.option3}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="answer">${q9.answer}</button></div>`);
    };

    // Conditional for question9 goes here
    // Execute question10 after result

    function question10() {
        $("#main-content").html("<div>Question 10:</div><br>");
        $("#main-content").append(`<div>${q10.question}</div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q10.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="answer">${q10.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" id="options">${q10.option3}</button></div>`);
    };

    // Conditional for question10 goes here
    // Execute results splash



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

});

