console.log('welcome to my web page')
let audioElement=document.createElement('audio');
audioElement.setAttribute('src','music.mp3');
audioElement.play()
audioElement.loop=true;
let body=document.body;
body.appendChild(audioElement)
var dino=document.querySelector('.dinosorus');
var dragon=document.querySelector('.dragon');
var scr=document.querySelector('.score-cnt');
var score=0;
setInterval(() => {
    // console.log(score)
    scr.innerText='my score ' + score
    // console.log(scr.innerHTML)
    score=score+1 
}, 500);
document.onkeydown=function(e){
    console.log("key code: ",e.keyCode)
    if (e.keyCode==38){
        dino.classList.add('animate-dino');
        setTimeout(() => {
            dino.classList.remove('animate-dino')
            
        }, 700);
    }
}
setTimeout(() => {
    dragon.style.animation='moveDino 1s linear infinite';
    // dino.classList[1].style.animation='dinofly 0.5s linear infinite';
    console.log("\n speed increase");
}, 4000);

// console.log(keycode)