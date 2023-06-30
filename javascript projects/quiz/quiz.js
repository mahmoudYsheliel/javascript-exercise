let m=10;
let qnum=1;
let num1=[];
let num2=[];
let c=[[],[]];
let slelected=[];
let cor=[];


let quiz=document.getElementById("quiz");
let per=document.getElementById("per");
let nex=document.getElementById("nex");


window.onload=function(){
    createnums();
    let qn=document.createElement("h3");
    qn.innerHTML="question number "+qnum.toString();
    let q=document.createElement("p");
    q.innerHTML="what is "+num1[qnum-1].toString()+"*"+num2[qnum-1].toString()+" ?";
    quiz.append(qn);
    quiz.append(q);
    for(let i=0;i<5;i++){
        let radio = document.createElement("INPUT");
        radio.setAttribute("type", "radio");
        radio.id="radio"+i.toString();
        radio.name="radio"+qnum.toString();
        let newlabel=document.createElement("label");
        newlabel.innerHTML=c[qnum-1][i].toString();
        quiz.append(radio);
        quiz.append(newlabel);
        quiz.append(document.createElement("br"));
    }
    
}
per.onclick=function(){
    let al=document.querySelectorAll("input");
    let com=false;
    for (i=0;i<5;i++){
        if(al[i].checked){
            com=true;
            slelected[qnum-1]=i;
        }
    }
    if(qnum>1 && com)
    {   
        qnum--;
        quiz.innerHTML="";
        let qn=document.createElement("h3");
        qn.innerHTML="question number "+qnum.toString();
        let q=document.createElement("p");
        q.innerHTML="what is "+num1[qnum-1].toString()+"*"+num2[qnum-1].toString()+" ?";
        quiz.append(qn);
        quiz.append(q);
        for(let i=0;i<5;i++){
            let radio = document.createElement("INPUT");
            radio.setAttribute("type", "radio");
            radio.id="radio"+i.toString();
            radio.name="radio"+qnum.toString();
            let newlabel=document.createElement("label");
            newlabel.innerHTML=c[qnum-1][i].toString();
            


            quiz.append(radio);
            quiz.append(newlabel);
            quiz.append(document.createElement("br"));
        }
    }
    if(slelected[qnum-1]!=undefined){
        console.log(slelected[qnum-1]);
        let al=document.querySelectorAll("input");
        al[slelected[qnum-1]].checked="true";
    }
 
}
nex.onclick=function(){
    let al=document.querySelectorAll("input");
    let com=false;
    for (i=0;i<5;i++){
        if(al[i].checked){
            com=true;
            slelected[qnum-1]=i;
        }
    }
    if(qnum<5 && com)
    {   
        qnum++;
        quiz.innerHTML="";
        let qn=document.createElement("h3");
        qn.innerHTML="question number "+qnum.toString();
        let q=document.createElement("p");
        q.innerHTML="what is "+num1[qnum-1].toString()+"*"+num2[qnum-1].toString()+" ?";
        quiz.append(qn);
        quiz.append(q);
        for(let i=0;i<5;i++){
            let radio = document.createElement("INPUT");
            radio.setAttribute("type", "radio");
            radio.id="radio"+i.toString();
            radio.name="radio"+qnum.toString();
            let newlabel=document.createElement("label");
            newlabel.innerHTML=c[qnum-1][i].toString();
            quiz.append(radio);
            quiz.append(newlabel);
            quiz.append(document.createElement("br"));
        }
    }
    if(slelected[qnum-1]!=undefined){
        console.log(slelected[qnum-1]);
        let al=document.querySelectorAll("input");
        al[slelected[qnum-1]].checked="true";
    }
    if(qnum==5){
        let al=document.querySelectorAll("input");
        let com=false;
        for (i=0;i<5;i++){
            if(al[i].checked){
                com=true;
                slelected[qnum-1]=i;
            }
        }
        if(com){
            done();
        }
    }
}


function createnums(){
    for(let i=0;i<5;i++){
        num1[i]=Math.floor(Math.random()*m+10);
        num2[i]=Math.floor(Math.random()*m+10);
        let r=[];
        for (let j=0;j<5;j++){
            r[j]=Math.floor(Math.random()*m*m*3+100);
        }
        c[i]=r;
        cor[i]=Math.floor(Math.random()*5);
        c[i][cor[i]]=num1[i]*num2[i];
    }
}

function done(){
    let corrans=0;
    for (i=0;i<5;i++){
        if(slelected[i]==cor[i]){corrans++}
    }
    quiz.innerHTML="";
    let final=document.createElement("h2");
    final.innerHTML="you have answered "+corrans.toString()+" answeres right!!!";
    quiz.append(final);
    nex.style.visibility="hidden";
    per.style.visibility="hidden";
}