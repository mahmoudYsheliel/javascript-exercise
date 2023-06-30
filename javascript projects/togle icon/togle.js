let nav=document.getElementById("menu-toggle");
nav.onclick=togle;

let n=0;

function togle(){
    nav.children[0].classList.toggle("active-element");
    nav.children[1].classList.toggle("active-element");
    nav.children[2].classList.toggle("active-element");
    document.getElementById("navlist").classList.toggle("active-element");
    setTimeout(()=>{document.getElementById("main").classList.toggle("active-element");n++},500 *(n%2));
}