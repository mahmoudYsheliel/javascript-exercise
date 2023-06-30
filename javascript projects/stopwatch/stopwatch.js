function start_function(){
    intervalManager(true);
}
function stop_function(){
    intervalManager(false);
}
function reset_function(){
    intervalManager(false,true);
}

function increase(){
    time_var=time_var+1;
}

function write_time(){
    first=Math.floor(time_var/100);
    second=time_var-first*100;
    s= first.toString()+":"+second.toString();
    console.log(s);
    time.innerHTML=s;
}

function load(){
    let write = setInterval(write_time, 10); 
}
let time_var=0;
let per=false;
var intervalID = null;

function intervalManager(togle,reset=false) {
    if (reset){
        clearInterval(intervalID);
        time_var=0;
    }
    if (per!=togle){
        per=togle;
        if(togle)
            intervalID =  setInterval(increase, 10);
        else
            clearInterval(intervalID);
    }
   
}

start_button=document.getElementById("Start");
stop_button=document.getElementById("Stop");
reset_button=document.getElementById("Reset");
time=document.getElementById("time");

window.addEventListener("load",load);
start_button.addEventListener("click",start_function);
stop_button.addEventListener("click",stop_function);
reset_button.addEventListener("click",reset_function);