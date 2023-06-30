let categories=["Premier League Football Teams","Films","Cities"];
let coices = [
    ["everton", "liverpool", "swansea", "chelsea", "hull"],
    ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
    ["manchester", "milan", "madrid", "amsterdam", "prague"]
];
let hints = [
    ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown"],
    ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
    ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
];

let cat=Math.floor(Math.random()*3);
let choice=Math.floor(Math.random()*5);
let c="";
let h="";
let g="";
let left_lives=10;
let positions=[];
let b=document.querySelector("#buttons").children;




document.getElementById("again").onclick=again;
window.onload=again
document.getElementById("hint").onclick=function(){
    document.getElementById("hints").innerHTML=h;
};
for (i=0;i<b.length;i++){
    let l=b[i].innerHTML;
    b[i].onclick=function(){chars(l)};
}


function chars(l){
    let exist=false;
    if (left_lives>0){
        for (i=0;i<c.length;i++)
        {
            if (c[i]==l) {g=g.substring(0, i) + l + g.substring(i  +1); exist=true;}
            update();
        }
    }
    if(!exist){notfound(l);}
}
function again(){
    c="";
    h="";
    g="";
    console.log(positions)
    for (i=0;i<positions.length;i++){
        b[positions[i]].style.backgroundColor="rgb(221, 204, 204)";
    }
    positions=[]
    left_lives=10;
    cat=Math.floor(Math.random()*3);
    choice=Math.floor(Math.random()*5);
    c=coices[cat][choice];
    h=hints[cat][choice];
    document.getElementById("cat").innerHTML= "the choosen category is "+categories[cat];
    for (l in c){
        if (c[l]!="-"){g=g+"_"}
        else{g=g+"-"}
    }
    document.getElementById("word").innerHTML=g;
    document.getElementById("remain").innerHTML="you have " +left_lives+" lives";
    document.getElementById("remain").style.fontSize="20px";
    document.getElementById("hints").innerHTML="";
}
function update() 
{
    document.getElementById("word").innerHTML=g;
    if (g==c){
        document.getElementById("cat").innerHTML= "";
        document.getElementById("word").innerHTML="";
        document.getElementById("remain").innerHTML="you won";
        document.getElementById("remain").style.fontSize="80px";
        left_lives=-1;
    }
    
}
function notfound(l) {
    left_lives=left_lives-1;
    let order=l.charCodeAt(0)-"a".charCodeAt(0);
    positions[positions.length]=order;
    b[order].style.backgroundColor="red";
    console.log(positions)
    if(left_lives>0){document.getElementById("remain").innerHTML="you have " +left_lives+" lives";}
    if(left_lives==0){
        document.getElementById("cat").innerHTML= "";
        document.getElementById("word").innerHTML="";
        document.getElementById("remain").innerHTML="game over";
        document.getElementById("remain").style.fontSize="80px";
    }    
}





