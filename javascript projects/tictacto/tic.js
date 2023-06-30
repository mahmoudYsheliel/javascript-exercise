let cells=document.querySelector("#container").children;
let t=1;
let o=[];
let x=[];
let work =true;
let s="o";
for (i=0;i<cells.length;i++){
    cells[i].addEventListener("click",function(){turn(this);})
}

function turn(child){
    let index= Array.from(child.parentElement.children).indexOf(child)
    if ( (!o.includes(index) && !x.includes(index)) && work){
        if (t){
            s="o";
            document.getElementById("turn").innerHTML="x turn";
            o[o.length]=index;
            child.innerHTML=s;
            if (check(o)){
                won(t);
            }
            t=0;
        }
        else{
            s="x";
            document.getElementById("turn").innerHTML="o turn";
            x[x.length]=index;
            child.innerHTML=s;
            if (check(x)){
                won(t);
            }
            t=1;
        }
        
    }
}


function check(inp){
    if ((inp.includes(0) && inp.includes(1) && inp.includes(2)) ||
        (inp.includes(3) && inp.includes(4) && inp.includes(5)) ||
        (inp.includes(6) && inp.includes(7) && inp.includes(8)) ||
        (inp.includes(0) && inp.includes(3) && inp.includes(6)) ||
        (inp.includes(1) && inp.includes(4) && inp.includes(7)) ||
        (inp.includes(2) && inp.includes(5) && inp.includes(8)) ||
        (inp.includes(0) && inp.includes(4) && inp.includes(8)) ||
        (inp.includes(2) && inp.includes(4) && inp.includes(6)) 
    ){
        console.log("ewv")
        return true;
    }
    return false;
}

function won(t){
    work=false;
    if (t) {
        document.getElementById("won").innerHTML="o won";
    }
    else{
        document.getElementById("won").innerHTML="x won";
    }
    setTimeout(clear,3000);
}
function clear(){
    t=1;
    o=[];
    x=[];
    work =true;
    s="o";
    for (i=0;i<cells.length;i++){
        cells[i].innerHTML="";
    }
    document.getElementById("won").innerHTML="";
    document.getElementById("turn").innerHTML="o turn";
}