let last_click=null;
let s="";
let n=0;
function show_result(){
    n=eval(s);
    s=n.toString();
}
function performance(){
    if (last_click=="c"){ s=""; }
    else if (last_click=="=") { show_result();}
    else {
        if (s=="" && (last_click=="+" || last_click=="-" || last_click=="/" || last_click=="*")){}
        else if (( s.charAt(s.length-1)=="+" || s.charAt(s.length-1)=="*" || s.charAt(s.length-1)=="-" || s.charAt(s.length-1)=="/") && (last_click=="+" || last_click=="-" || last_click=="*" || last_click=="/" ) ){
        s=s.slice(0,s.length-1)+ last_click;}
        else{s=s+last_click;}
        }
    document.getElementById("result").innerHTML=s;
}

document.getElementById("add").onclick= function() {last_click="+"; performance();};
document.getElementById("sup").onclick= function() {last_click="-"; performance();};
document.getElementById("mul").onclick= function() {last_click="*"; performance();};
document.getElementById("division").onclick= function() {last_click="/"; performance();};
document.getElementById("nine").onclick= function() {last_click="9"; performance();};
document.getElementById("eigh").onclick= function() {last_click="8"; performance();};
document.getElementById("seven").onclick= function() {last_click="7"; performance();};
document.getElementById("six").onclick= function() {last_click="6"; performance();};
document.getElementById("five").onclick= function() {last_click="5"; performance();};
document.getElementById("four").onclick= function() {last_click="4"; performance();};
document.getElementById("three").onclick= function() {last_click="3"; performance();};
document.getElementById("two").onclick= function() {last_click="2"; performance();};
document.getElementById("ono").onclick= function() {last_click="1"; performance();};
document.getElementById("zero").onclick= function() {last_click="0"; performance();};
document.getElementById("point").onclick= function() {last_click="."; performance();};
document.getElementById("reset").onclick= function() {last_click="c"; performance();};
document.getElementById("equal").onclick= function() {last_click="="; performance();};



