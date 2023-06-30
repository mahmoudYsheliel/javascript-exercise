let player1=document.getElementById("player1");
let player2=document.getElementById("player2");
let ball=document.getElementById("ball");
let container=document.getElementById("container");

let c_width=container.offsetWidth;
let c_height =container.offsetHeight;

let p_wifth=player1.offsetWidth;
let p_height=player1.offsetHeight;

let p1points=Number(document.getElementById("p1").innerHTML);
let p2points=Number(document.getElementById("p2").innerHTML);
let target_points=Number(document.getElementById("target").innerHTML);


let p1up=38;
let p1down=40;
let p1left=37;
let p1righ=39;

let ball_x=ball.offsetLeft;
let ball_y=ball.offsetTop;
let ball_direction_x=1;
let ball_direction_y=1;
let ball_w=ball.offsetWidth;

const count=p_height+3*ball_w;
let countesd=count;

let p2up=87;
let p2down=83;
let p2left=65;
let p2righ=68;

let speed=1;
let safe_d=20;

let key_state={};

document.addEventListener("keydown",(event) => {key_state[event.keyCode || event.which] = true;},true)
document.addEventListener("keyup",(event) => {key_state[event.keyCode || event.which] = false;},true)




document.querySelector("#mode").children[1].addEventListener("click",single);
document.querySelector("#mode").children[0].addEventListener("click",double);


let mode=null;  //0 double 1 single
let move_ball_interval=null;
let key_press_interval=null;

function single(){
    document.querySelector("#mode").children[1].style.backgroundColor="chartreuse";
    document.querySelector("#mode").children[0].style.backgroundColor="aqua";
    mode=1;
    activate();
}


function double(){
    document.querySelector("#mode").children[0].style.backgroundColor="chartreuse";
    document.querySelector("#mode").children[1].style.backgroundColor="aqua";
    mode=0;
    activate();
}


function activate(){
    if (move_ball_interval!=null){
        clearInterval(move_ball_interval)
    }
    if (key_press_interval!=null){
        clearInterval(key_press_interval)
    }
    reset();
    key_press_interval=setInterval(key_press,2);
}


function key_press(){
    let p1topoff=player1.offsetTop;
    let p1leftoff=player1.offsetLeft;
    let p2topoff=player2.offsetTop;
    let p2leftoff=player2.offsetLeft;

    if (key_state[p1up] && p1topoff>0)    {player1.style.top=(p1topoff-speed).toString()+"px";}
    if (key_state[p1down] && p1topoff<(c_height-p_height))  {player1.style.top=(p1topoff+speed).toString()+"px";}
    if (key_state[p1left] && p1leftoff>safe_d)  {player1.style.left=(p1leftoff-speed).toString()+"px";}
    if (key_state[p1righ] && p1leftoff<(c_width/2-p_wifth-safe_d))  {player1.style.left=(p1leftoff+speed).toString()+"px";}
 
    if (mode) {
        move_player2()
    }
    else{
        if (key_state[p2up] && p2topoff>0)    {player2.style.top=(p2topoff-speed).toString()+"px";}
        if (key_state[p2down] && p2topoff<(c_height-p_height))  {player2.style.top=(p2topoff+speed).toString()+"px";}
        if (key_state[p2left] && p2leftoff>(c_width/2+p_wifth+safe_d))  {player2.style.left=(p2leftoff-speed).toString()+"px";}
        if (key_state[p2righ] && p2leftoff<(c_width-p_wifth-safe_d))  {player2.style.left=(p2leftoff+speed).toString()+"px";}
    }
}

function move_player2(){
    let p2y=player2.offsetTop+p_height/2;
    let by=ball.offsetTop+ball_w/2;


    if (p2y>by && player2.offsetTop>0)    {player2.style.top=(player2.offsetTop-speed).toString()+"px";}
    if (p2y<by && player2.offsetTop<c_height-p_height)  {player2.style.top=(player2.offsetTop+speed).toString()+"px";}
}





function move_ball(){
    
    countesd = countesd-1;
 
    let p1=player1.getBoundingClientRect();
    let p2=player2.getBoundingClientRect();
    let b=ball.getBoundingClientRect();

    if (!(p1.top > b.bottom ||p1.right < b.left || p1.bottom < b.top || p1.left > b.right) || 
        !(p2.top > b.bottom ||p2.right < b.left || p2.bottom < b.top || p2.left > b.right) ) {
            if (countesd<0){
                countesd=count;
                ball_direction_x=ball_direction_x*-1;
            }
    }
    
    if(ball_x>0 && ball_x<c_width-ball_w ){
        ball_x=ball_x+ball_direction_x;
        ball.style.left=ball_x.toString()+"px";
    }
    else{
        if(ball_x==0){
            p2point();
        }
        if(ball_x==(c_width-ball_w)){
            p1point();
        }
    }

    if(ball_y>0 && ball_y<c_height-ball_w ){
        ball_y=ball_y+ball_direction_y;
        ball.style.top=ball_y.toString()+"px";
    }
    else{
        ball_direction_y=ball_direction_y*-1;
        ball_y=ball_y+ball_direction_y;
        ball.style.top=ball_y.toString()+"px";
    }
}



function start(){
    ball_x=c_width/2;
    ball_y=Math.floor(Math.random()*0.6*c_height)+Math.floor(0.2*c_height);
    ball_direction_y=Math.round(Math.random())*2-1;
    move_ball_interval=setInterval(move_ball,1)
}

function reset(){
    let p1topoff=Math.round((c_height-p_height)/2);
    let p1leftoff=50;

    let p2topoff=Math.round((c_height-p_height)/2);
    let p2leftoff=c_width-50;
    
    player1.style.top=p1topoff.toString()+"px";
    player1.style.left=p1leftoff.toString()+"px";

    player2.style.top=p2topoff.toString()+"px";
    player2.style.left=p2leftoff.toString()+"px";
    document.getElementById("p2").innerHTML="0";
    document.getElementById("p1").innerHTML="0";
    p1points=0;
    p2points=0;
    setTimeout(start,1000);

}


function p1point(){
    p1points=p1points+1
    document.getElementById("p1").innerHTML=(p1points).toString();
    clearInterval(move_ball_interval);
    if (p1points==target_points) {
        reset()
        return
    }
    start();
}
function p2point(){
    p2points=p2points+1
    document.getElementById("p2").innerHTML=(p2points).toString();
    clearInterval(move_ball_interval);
    if (p2points==target_points) {
        reset()
        return
    }
    start();
}
