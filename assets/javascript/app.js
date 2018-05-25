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
        option1: "Spirited Away (2001)",
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

    var score = 0;
    var myPercentage = (score / 10 * 100) + "%";

    function question1() {
        var answerExp = "On July 1st, 1867, Canada became a self-governing dominion of Great Britain and a federation of four provinces.";

        $(".start-button").click(function() {
            $("#main-content").html("<div>Question 1:</div><br>");
            $("#main-content").append(`<div>${q1.question}</div><br>`);
            $("#main-content").append(`<div><button type="button" class="options">${q1.option1}</button></div>`);
            $("#main-content").append(`<div><button type="button" class="options">${q1.option2}</button></div>`);
            $("#main-content").append(`<div><button type="button" class="options">${q1.option3}</button></div>`);
            $("#main-content").append(`<div><button type="button" class="answer">${q1.answer}</button></div>`);

            $(".answer").click(function() {
                score++;
                $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
                $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/FejKb3bDS5c9a/giphy.gif'><br><br>");
                $("#main-content").append("<div id='nxt-btn'>⮕</div>");
                $("#nxt-btn").click(function() {
                    question2();
                });
            });

            $(".options").click(function() {
                $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
                $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif'><br><br>");
                $("#main-content").append("<div id='nxt-btn'>⮕</div>");
                $("#nxt-btn").click(function() {
                    question2();
                });
            });
        });
    };
    question1();    

    function question2() {
        var answerExp = "Mistletoe is a small evergreen shrub that is semi-parasitic on other plants. Instead of producing roots in the ground, mistletoe sends out root like structures into tree branches, from which it steals water and nutrients.";

        $("#main-content").html("<div>Question 2:</div><br>");
        $("#main-content").append(`<div>${q2.question}</div><br>`);
        $("#main-content").append(`<div><button type="button" class="answer">${q2.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q2.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q2.option2}</button></div>`);

        $(".answer").click(function() {
            score++;
            $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/MENf6g3B6TGmY/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question3();
            });
        });

        $(".options").click(function() {
            $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/R8n7YlPHe34dy/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question3();
            });
        });
    };

    function question3() {
        var answerExp = "Blue Mountain is a ridge that forms the eastern edge of the Appalachian mountain range in the U.S. state of Pennsylvania.";

        $("#main-content").html("<div>Question 3:</div><br>");
        $("#main-content").append(`<div>${q3.question}</div><br>`);
        $("#main-content").append(`<div><button type="button" class="options">${q3.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="answer">${q3.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q3.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q3.option3}</button></div>`);

        $(".answer").click(function() {
            score++;
            $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/fXgKfzV4aaHQI/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question4();
            });
        });

        $(".options").click(function() {
            $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/CjapibfcpYMZa/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question4();
            });
        });
    };

    function question4() {
        var answerExp = "In the American Revolutionary War (1775–1783), France fought alongside the United States, against Britain, in 1778.";

        $("#main-content").html("<div>Question 4:</div><br>");
        $("#main-content").append(`<div>${q4.question}</div><br>`);
        $("#main-content").append(`<div><button type="button" class="options">${q4.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q4.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q4.option3}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="answer">${q4.answer}</button></div>`);

        $(".answer").click(function() {
            score++;
            $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/3oD3YooLLYg0AfOPdK/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question5();
            });
        });

        $(".options").click(function() {
            $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/iN5qfn8S2qVgI/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question5();
            });
        });
    };

    function question5() {
        var answerExp = "Buzz Aldrin (born Edwin Eugene Aldrin, Jr.; January 20, 1930) is an American engineer and former astronaut, and the second person to walk on the Moon.";

        $("#main-content").html("<div>Question 5:</div><br>");
        $("#main-content").append(`<div>${q5.question}</div><br>`);
        $("#main-content").append(`<div><button type="button" class="options">${q5.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q5.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="answer">${q5.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q5.option3}</button></div>`);

        $(".answer").click(function() {
            score++;
            $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/cEYFeE4wJ6jdDVBiiIM/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question6();
            });
        });

        $(".options").click(function() {
            $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/cwTtbmUwzPqx2/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question6();
            });
        });
    };

    function question6() {
        var answerExp = "The average fall was 5.5 stories. Of the 115 cats studied, 90 per cent survived, including one cat that fell 32 stories onto a sidewalk and suffered only a mild chest injury and a chipped tooth.";

        $("#main-content").html("<div>Question 6:</div><br>");
        $("#main-content").append(`<div>${q6.question}</div><br>`);
        $("#main-content").append(`<div><button type="button" class="options">${q6.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="answer">${q6.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q6.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q6.option3}</button></div>`);

        $(".answer").click(function() {
            score++;
            $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/NGxO35FivioMw/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question7();
            });
        });

        $(".options").click(function() {
            $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/CPskAi4C6WLHa/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question7();
            });
        });
    };

    function question7() {
        var answerExp = "Concord grapes are one of only three fruits native to North America. The other two fruits are blueberries and cranberries.";

        $("#main-content").html("<div>Question 7:</div><br>");
        $("#main-content").append(`<div>${q7.question}</div><br>`);
        $("#main-content").append(`<div><button type="button" class="options">${q7.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="answer">${q7.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q7.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q7.option3}</button></div>`);

        $(".answer").click(function() {
            score++;
            $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/KyGC8og5fhXs05yVHV/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question8();
            });
        });

        $(".options").click(function() {
            $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/LyrRqqwD6Orf2/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question8();
            });
        });
    };

    function question8() {
        var answerExp = "Most recent tudies suggest that around 10% of the world population is left-handed.";

        $("#main-content").html("<div>Question 8:</div><br>");
        $("#main-content").append(`<div>${q8.question}</div><br>`);
        $("#main-content").append(`<div><button type="button" class="answer">${q8.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q8.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q8.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q8.option3}</button></div>`);

        $(".answer").click(function() {
            score++;
            $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/l0HlB3SjAa0ZWpk1W/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question9();
            });
        });

        $(".options").click(function() {
            $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/a5viI92PAF89q/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question9();
            });
        });
    };

    function question9() {
        var answerExp = "All four movies were nominated and have won an Academy Award for Best Animated Feature!";

        $("#main-content").html("<div>Question 9:</div><br>");
        $("#main-content").append(`<div>${q9.question}</div><br>`);
        $("#main-content").append(`<div><button type="button" class="options">${q9.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q9.option2}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q9.option3}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q9.option4}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="answer">${q9.answer}</button></div>`);

        $(".answer").click(function() {
            score++;
            $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/103tn1vedgQpfW/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question10();
            });
        });

        $(".options").click(function() {
            $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/ZmZ5hwzX1dgQw/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                question10();
            });
        });
    };

    function question10() {
        var answerExp = "Cashmere wool, usually simply known as cashmere, is a fiber obtained from Cashmere goats and other types of goat. Common usage defines the fiber as a wool but in fact it is a hair, and this is what gives it its unique characteristics as compared to sheep's wool.";

        $("#main-content").html("<div>Question 10:</div><br>");
        $("#main-content").append(`<div>${q10.question}</div><br>`);
        $("#main-content").append(`<div><button type="button" class="options">${q10.option1}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="answer">${q10.answer}</button></div>`);
        $("#main-content").append(`<div><button type="button" class="options">${q10.option2}</button></div>`);

        $(".answer").click(function() {
            score++;
            $("#main-content").html(`<div id="u-right">CORRECT!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/xTiQyBOIQe5cgiyUPS/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                results();
            });
        });

        $(".options").click(function() {
            $("#main-content").html(`<div id="u-wrong">WRONG!</div><br><div id="exp">${answerExp}</div><br>`);
            $("#main-content").append("<img id='gif-load' src='https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'><br><br>");
            $("#main-content").append("<div id='nxt-btn'>⮕</div>");
            $("#nxt-btn").click(function () {
                results();
            });
        });
    };

    function results() {
        $("#main-content").html("<div>Trivia complete!<div><br>");
        $("#main-content").append("<div>Your score:<div><br>");
        $("#main-content").append(`<div>${myPercentage}<div><br><br>`);
        $("#main-content").append("<button type='button' id='nxt-btn'>PLAY AGAIN</button>");
        $("#nxt-btn").click(function () {
            window.location.reload();
        });
    };
});

