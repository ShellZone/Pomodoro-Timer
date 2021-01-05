// Sets min and sec to var
var minutes = 25;
var seconds = "00";

let output = document.getElementById('output');
let quote = 
    [ "“The secret of getting ahead is getting started.” – Mark Twain", "“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb","“It’s hard to beat a person who never gives up.” – Babe Ruth",
    "“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’” – Leah Busque","“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz",
    "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon","“Everything you can imagine is real.”― Pablo Picasso","“Do one thing every day that scares you.”― Eleanor Roosevelt",
    "“It’s no use going back to yesterday, because I was a different person then.”― Lewis Carroll"
];

var click = new Audio("./sounds/pen.mp3");
var pen = new Audio("./sounds/wood.mp3");

// function to call onload sets innerhtml to the variables
function template(){
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

// click is a variable storing the audio file

function start(){
    click.play();

    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer(){
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }
    function secondsTimer(){
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;

        // When it hits 0 reset then show the message 

        if(seconds <= 57){
            if(minutes <= 24){
                // Used Clear interval To stop Time
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML = "Session Completed Take a break!!";

                document.getElementById("done").classList.add("show_message");

                pen.play(); 

                // Show Quote if Timer hits 0
                var randomQuote = quote[Math.floor((Math.random()*quote.length))];
                output.innerHTML = randomQuote;

            }
        }
    }
}
