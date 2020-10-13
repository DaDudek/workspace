let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer =0;
let flag = true;

function handleButton() {
    let button = document.getElementById("start-or-stop");
    let text = button.innerText;
    if (text === "Start"){
        start();
        button.innerText = "Stop";
    }else{
        stop();
        button.innerText = "Start";
    }
}

function stop(){
    flag = false;
    clearTimeout(timer);
}

function start(){
    milliseconds = milliseconds + 100;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds = seconds + 1;
        if (seconds >= 60) {
            seconds = 0;
            minutes = minutes + 1;
            if (minutes >= 60) {
                hours = hours + 1;
                minutes = 0;
            }
        }
    }
    let value = "" + hours + " : " + minutes + " : " + seconds + " : " + milliseconds
    document.getElementById("stoper").innerHTML = "<p>" + value + "</p>";
    timer = setTimeout("start()", 100);
}

function reset(){
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    let value = "" + hours + " : " + minutes + " : " + seconds + " : " + milliseconds
    document.getElementById("stoper").innerHTML = "<p>" + value + "</p>";
    let button = document.getElementById("start-or-stop");
    button.innerText = "Start"
    clearTimeout(timer)
}