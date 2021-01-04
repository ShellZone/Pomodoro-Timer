// Sets min and sec to var
var minutes = 25;
var seconds = "00";

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
    var seconds_interval = setInterval(minutesTimer, 1000);
}
