

function maketime(){
    let time= new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let l="AM";
    if (h>=12){
        h=h-12;
        l="PM";
    }
    let a1="";
    let a2="";
    let a3="";

    if (h<10){
        a1="0";
    }
    if (m<10){
        a2="0";
    }
    if (s<10){
        a3="0";
    }

    str=a1+h.toString()+":"+a2+m.toString()+":"+a3+s.toString()+" "+l;
    document.getElementById("time").innerHTML=str;    
}
setInterval(maketime,1000);
setTimeout(maketime,1);

