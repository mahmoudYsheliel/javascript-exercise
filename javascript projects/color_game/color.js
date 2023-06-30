document.getElementById("easy").onclick=function(){mode=1; setup()};
document.getElementById("medium").onclick=function(){mode=2; setup()};
document.getElementById("hard").onclick=function(){mode=3; setup()};
document.getElementById("new").onclick=function(){ setup()};


document.getElementById("d1").onclick=function(){clicked=1; check();};
document.getElementById("d2").onclick=function(){clicked=2; check();};
document.getElementById("d3").onclick=function(){clicked=3; check();};
document.getElementById("d4").onclick=function(){clicked=4; check();};
document.getElementById("d5").onclick=function(){clicked=5; check();};
document.getElementById("d6").onclick=function(){clicked=6; check();};
document.getElementById("d7").onclick=function(){clicked=7; check();};
document.getElementById("d8").onclick=function(){clicked=8; check();};
document.getElementById("d9").onclick=function(){clicked=9; check();};

let mode=0;
let tile=0;
let clicked=0;

function setup(){
    if (mode==1){
        document.getElementById("d9").style.visibility="hidden";
        document.getElementById("d8").style.visibility="hidden";
        document.getElementById("d7").style.visibility="hidden";
        document.getElementById("d6").style.visibility="hidden";
        document.getElementById("d5").style.visibility="hidden";
        document.getElementById("d4").style.visibility="hidden";
        document.getElementById("easy").style.backgroundColor="brown";
        document.getElementById("easy").style.color="aqua";

        document.getElementById("medium").style.backgroundColor="cadetblue";
        document.getElementById("medium").style.color="black";
        document.getElementById("hard").style.backgroundColor="cadetblue";
        document.getElementById("hard").style.color="black";

    }
    if (mode==2){
        document.getElementById("d9").style.visibility="hidden";
        document.getElementById("d8").style.visibility="hidden";
        document.getElementById("d7").style.visibility="hidden";
        document.getElementById("d6").style.visibility="visible";
        document.getElementById("d5").style.visibility="visible";
        document.getElementById("d4").style.visibility="visible";
        document.getElementById("medium").style.backgroundColor="brown";
        document.getElementById("medium").style.color="aqua";

        document.getElementById("easy").style.backgroundColor="cadetblue";
        document.getElementById("easy").style.color="black";
        document.getElementById("hard").style.backgroundColor="cadetblue";
        document.getElementById("hard").style.color="black";
    }
    if (mode==3){
        document.getElementById("d9").style.visibility="visible";
        document.getElementById("d8").style.visibility="visible";
        document.getElementById("d7").style.visibility="visible";
        document.getElementById("d6").style.visibility="visible";
        document.getElementById("d5").style.visibility="visible";
        document.getElementById("d4").style.visibility="visible";
        document.getElementById("hard").style.backgroundColor="brown";
        document.getElementById("hard").style.color="aqua";

        document.getElementById("medium").style.backgroundColor="cadetblue";
        document.getElementById("medium").style.color="black";
        document.getElementById("easy").style.backgroundColor="cadetblue";
        document.getElementById("easy").style.color="black";
    }
    prepare();
}
function prepare(){
    document.getElementById("cor").innerHTML="";
    let p=document.getElementById("con");
    for (let i=0;i<mode*3;i++){
        let rand_r=Math.floor(Math.random()*256);
        let rand_g=Math.floor(Math.random()*256);
        let rand_b=Math.floor(Math.random()*256);
        let f="rgb(" + rand_r + "," + rand_g + "," + rand_b + ")";
        p.children[i].style.background= f;
    }
    tile=Math.floor(Math.random()*mode*3+1);
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let f="rgb(" + r + "," + g + "," + b + ")";
    p.children[tile-1].style.background= f;
    f="rgb(" +  Math.floor(r/255*100) + "," + Math.floor(g/255*100) + "," + Math.floor(b/255*100) + ")";
    document.getElementById("es").innerHTML=f;
}

function check(){
    if (clicked!=tile){
        document.getElementById("con").children[clicked-1].style.background= "black";
    }
    else{
        document.getElementById("cor").innerHTML="correct";
        let p=document.getElementById("con");
        for (let i=0;i<mode*3;i++){
            p.children[i].style.background= p.children[tile-1].style.background;
            document.getElementById("header").style.background=p.children[tile-1].style.background;
        }
    }
    
}