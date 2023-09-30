console.log("welcome to my quick music web");
let audioelement=document.createElement('audio');
let masterplay=document.getElementById('play_pause');
let gif=document.querySelector('.trac');
let progressbar=document.getElementById('seekbar');
audioelement.src='1.mp3';
masterplay.addEventListener('click',()=>{

    if (audioelement.paused || audioelement.currentTime<=0){
        audioelement.play()
    gif.style.opacity='1';
    masterplay.innerHTML='<i class="fa fa-pause-circle fa-2x play"></i>'
    }
    else{
        audioelement.pause()
        gif.style.opacity='0'
        masterplay.innerHTML='<i class="fa fa-play-circle fa-2x play"></i>'
    }
})
audioelement.addEventListener('timeupdate',()=>{
    // console.log(audioelement.currentTime)
    //     console.log(audioelement.duration)

        // console.log((audioelement.currentTime/audioelement.duration)*100)
        progressbar.value=(audioelement.currentTime/audioelement.duration)*100
})