let power=false;
let strict=false;
let count=0;
let clickedcount=0;
let random=[];
let clicked=[];
let allowed=false;

let q1=document.getElementById("q1");
let q2=document.getElementById("q2");
let q3=document.getElementById("q3");
let q4=document.getElementById("q4");

let power_box=document.getElementById("power_box");
let strict_box=document.getElementById("strict_box");
let start=document.getElementById("start");
let yourcount=document.getElementById("yourcount");

start.onclick=function(){if(power){setTimeout(start_function,500)}};
strict_box.onclick=function(){strict=strict_box.checked; }
power_box.onclick=function(){power=power_box.checked;
    if(!power){
        allowed=false;
        yourcount.innerHTML="";
    }
}



function start_function(){
    count=0;
    allowed=false;
    yourcount.innerHTML=count.toString();
    if (power){play();}
}
function play() {
    count++;
    clickedcount=0;
    clicked=[];
    random=[];
    //creat random vector
    yourcount.innerHTML=count.toString();

    for (i=0;i<count;i++){random[i]=Math.floor(Math.random()*4+1)}
    
    for(let i=0;i<random.length;i++){
        setTimeout(addremove(random[i],i*500),0);
    }
    setTimeout(function(){allowed=true},random.length*500)
}
function arrayequal(a,b){
    for(i =0;i<a.length;i++){
        if(a[i]!=b[i])
        return false;
    }
    return true;
}

function addremove(n,time){
    setTimeout(function(){addeffect(n)},time);
    setTimeout(function(){removeeffect(n)},200+time);
}


function addeffect(n){
    if (n==1) {q1.classList.add("q1active")}
    if (n==2) {q2.classList.add("q2active")}
    if (n==3) {q3.classList.add("q3active")}
    if (n==4) {q4.classList.add("q4active")}
}
function removeeffect(n){
    if (n==1) {q1.classList.remove("q1active")}
    if (n==2) {q2.classList.remove("q2active")}
    if (n==3) {q3.classList.remove("q3active")}
    if (n==4) {q4.classList.remove("q4active")}
}


q1.onclick=function(){if(allowed){
    clicked[clickedcount]=1;
    clickedcount++;
    addremove(1,0);
    if(clickedcount==count){checkfunction();}
    }
}
q2.onclick=function(){if(allowed){
    clicked[clickedcount]=2;
    clickedcount++;
    addremove(2,0);
    if(clickedcount==count){checkfunction();}
    }
}
q3.onclick=function(){if(allowed){
    clicked[clickedcount]=3;
    clickedcount++;
    addremove(3,0);
    if(clickedcount==count){checkfunction();}
    }
}
q4.onclick=function(){if(allowed){
    clicked[clickedcount]=4;
    clickedcount++;
    addremove(4,0);
    if(clickedcount==count){checkfunction();}
    }
}
function checkfunction(){
    if(arrayequal(random,clicked)){
        setTimeout(play,500);
    }
    else{
        count--;
        if(strict){count=0;}
        setTimeout(play,500);
        yourcount.innerHTML="wrong";
    }
}
