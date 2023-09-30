console.log("welcome to my spotify app")
var song_list=[
    {songname:'aashique aa gyi',
    artistname:'arijitsingh',
    Path:'1.mp3'
},
{songname:'aashique aa gyi',
    artistname:'arijitsingh',
    Path:'4.mp3'
},
{songname:'balma powerful',
    artistname:'arijitsingh',
    Path:'5.mp3'
},
{songname:'z black',
    artistname:'arijitsingh',
    Path:'2.mp3'
},
{songname:'aashique aa gyi',
    artistname:'arijitsingh',
    Path:'4.mp3'
},
{songname:'jaan hai meri',
    artistname:'arijitsingh',
    Path:'3.mp3'
}
]
var song_index=0;
// let audioelement=new audio('C:\Users\SACHINRK\Desktop\projects\spotify clone\1.mp3');
let audioelement=document.createElement('audio');
audioelement.src=song_list[song_index].Path;

var pause_play=document.querySelector('.pause_play');
var masterplay=document.getElementById('masterplay');
var seekbar=document.getElementById('progressbar');
masterplay.addEventListener('click',function playpause(){
    if (audioelement.paused || audioelement.currentTime<=0){
        
        audioelement.play()
        // console.log(audioelement.duration)
        document.querySelector('.musictrac').style.opacity='1';
        document.querySelector('.song_name').innerHTML=song_list[song_index].songname;
        document.querySelector('.song_name').style.visibility='visible';
        // masterplay.classList.remove('fa-play-circle'
        masterplay.innerHTML='<i class="fa fa-pause-circle fa-5x"></i>'

        console.log('audio is playing')
    }
    else{
        audioelement.pause();
        masterplay.innerHTML='<i class="fa fa-play-circle fa-5x"></i>';
        document.querySelector('.musictrac').style.opacity='0';
        document.querySelector('.song_name').style.visibility='hidden';
        console.log("audio is paused")
    }
})
var curr_time=0;
audioelement.addEventListener('timeupdate',()=>{
    var curr_time=parseInt((audioelement.currentTime/audioelement.duration)*100);
    // we have taking the integer(how much percent has done) value because value attribute in our progress bar need s a integer value so we can't give value in time format 
    console.log(curr_time);
    seekbar.value=curr_time;
})
seekbar.addEventListener('change',()=>{
    var orig_time=(audioelement.duration*seekbar.value)/100;
    audioelement.currentTime=orig_time
})
