let l=document.querySelector("ul");
console.log(l);

window.onscroll=function(){
    for (let i=0;i<l.children.length;i++){
        let e=l.children[i];
        let rect=e.getBoundingClientRect();
        let inn=0;
        if(rect.bottom<window.innerHeight ){inn=1;}
        if (inn){
            setTimeout(function() {e.children[0].style.visibility = 'visible'},3000);
            if (i%2){e.children[0].classList.add("leftliv");}
            else{e.children[0].classList.add("rightliv");}
            e.classList.add("linev");
            setTimeout(function(){e.classList.add("circlev");},2000)        
        }  
    }
}