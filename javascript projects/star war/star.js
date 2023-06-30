let adio=document.querySelector("audio");

let start=document.querySelector(".start");
let animation=document.querySelector(".animation");
let intro=document.querySelector(".intro");
let titles=document.querySelector(".titles");
let logo=document.querySelector(".logo");


start.addEventListener("click",f1);

function f1(){
    start.style.visibility="hidden";
    intro.style.visibility="visible";
    intro.classList.add("introex");
    adio.play();
    setTimeout(function(){intro.style.visibility="hidden"},7990);

    setTimeout(function(){logo.style.visibility="visible";logo.classList.add("logoex");},8000);
    setTimeout(function(){logo.style.visibility="hidden"},24990);

    setTimeout(function(){titles.style.visibility="visible";titles.classList.add("titleex");},25000);
   
    setTimeout(function(){titles.style.visibility="hidden"},95000);
    setTimeout(function(){start.style.visibility="visible";},95000);
}


