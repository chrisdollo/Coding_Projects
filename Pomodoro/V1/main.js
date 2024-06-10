var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');



var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var cycleCount = document.getElementById('counter');


var startTimer;



start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 10);
    } else{
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";

    cycleCount.innerText = 0;
    stopInterval();
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval();
    startTimer = undefined;
})






function timer(){

    // work timer count down
    if(ws.innerText != 0){
        ws.innerText--;
    }
    else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    // break timer count down
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        }
        else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    /// increment counter by one if one full cycle is completed
    if ( wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        cycleCount.innerText++;
        wm.innerText = 25;
        ws.innerText = "00";


        bm.innerText = 5;
        bs.innerText = "00";

    }
}



// stopTimer function

function stopInterval(){
    clearInterval(startTimer);
}