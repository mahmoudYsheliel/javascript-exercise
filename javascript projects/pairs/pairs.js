let cards= document.querySelectorAll(".card")
let array=[ "one", "two" ,"three", "four", "five" ,"six" ,"seven" ,"eight"];
let card_selected=0;
let chossen=[];

shuffleArray(array);





function shuffleArray(array) {
    let l=array.length;
    for (let index = 0; index < l; index++) {
        const j=Math.floor(Math.random()*l);
        const i=Math.floor(Math.random()*l);
        [array[i], array[j]] = [array[j], array[i]];
    }
    for (let index = 0; index < cards.length; index++) {
        cards[index].style.gridArea=array[index];
    }
}




for (i=0;i<cards.length;i++){
    cards[i].addEventListener("click",myListener)

}
 
function myListener(event) {
    flip(this);
  }

function flip(clas) {
    clas.classList.add("newclass");
    clas.children[0].classList.add("moveimage");
    chossen[card_selected]=clas;
    card_selected++;
    if(card_selected==2){
        card_selected=0;
        setTimeout(test,500);
    }
}

function test(){
    if(chossen[0].className==chossen[1].className){
        chossen[0].removeEventListener("click",myListener)
        chossen[0].style.opacity = "0.5";
        chossen[1].removeEventListener("click",myListener)
        chossen[1].style.opacity = "0.5";
    }
    else{
        console.log(5);
        chossen[0].classList.remove("newclass");
        chossen[0].children[0].classList.remove("moveimage");
        chossen[1].classList.remove("newclass");
        chossen[1].children[0].classList.remove("moveimage");
    }
}

