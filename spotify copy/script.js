console.log("welcome to my spotify web application");

// ---->song list
var song_list = [
    { songname: 'aashique aa gyi', coverimg: 'cover1.jpg', path: '1.mp3' },
    { songname: 'balma powerful', coverimg: 'cover2.png', path: '2.mp3' },
    { songname: 'z black', coverimg: 'cover3.png', path: '3.mp3' },
    { songname: 'jaan hai meri', coverimg: 'cover4.png', path: '4.mp3' },
    { songname: 'aashique aa gyi', coverimg: 'cover1.jpg', path: '5.mp3' },
    { songname: 'balma powerful', coverimg: 'cover2.png', path: '1.mp3' },
    { songname: 'z black', coverimg: 'cover3.png', path: '2.mp3' },
    { songname: 'jaan hai meri', coverimg: 'cover4.png', path: '3.mp3' }
];
var song_index = 0;
var curr_time=0;
var i;
var make_previous_play=0;

for (i = 0; i < song_list.length; i++) {
    // console.log('.song_name'+(i+1))
    // console.log(song_list[i].songname)
    document.querySelector('.song_name' + (i + 1)).innerHTML = song_list[i].songname;
    document.getElementById('cover' + (i + 1)).src = song_list[i].coverimg;
}
//creating html elements
var audioelement = document.createElement('audio');

//get element name from html
function song_index0() {
    song_index = document.getElementById('0').id;
    console.log("inde of soong: ",song_index);
    audioelement.src = song_list[song_index].path;

    document.getElementById(make_previous_play).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
    play_pause(song_index);
    make_previous_play=song_index;
}

function song_index1() {
    song_index = document.getElementById('1').id;
    console.log("inde of soong: ", song_index);
    audioelement.src = song_list[song_index].path;

    document.getElementById(make_previous_play).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
    play_pause(song_index);

    make_previous_play=song_index;

}

function song_index2() {
    song_index = document.getElementById('2').id;
    console.log("inde of soong: ", song_index);
    audioelement.src = song_list[song_index].path;

    document.getElementById(make_previous_play).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
    play_pause(song_index);

    make_previous_play=song_index;

}
function song_index3() {
    song_index = document.getElementById('3').id;
    console.log("inde of soong: ", song_index);
    audioelement.src = song_list[song_index].path;
    document.getElementById(make_previous_play).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
    play_pause(song_index);

    make_previous_play=song_index;
}
function song_index4() {
    song_index = document.getElementById('4').id;
    console.log("inde of soong: ", song_index);
    audioelement.src = song_list[song_index].path;
    document.getElementById(make_previous_play).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
    play_pause(song_index);

    make_previous_play=song_index;
}
function song_index5() {
    song_index = document.getElementById('5').id;
    console.log("inde of soong: ", song_index);
    audioelement.src = song_list[song_index].path;
    console.log("duration of song:>>",audioelement.duration)
    document.getElementById(make_previous_play).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
    play_pause(song_index);

    make_previous_play=song_index;
}
function song_index6() {
    song_index = document.getElementById('6').id;
    console.log("inde of soong: ", song_index);
    audioelement.src = song_list[song_index].path;
    document.getElementById(make_previous_play).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
    play_pause(song_index);

    make_previous_play=song_index;
}
function song_index7() {
    song_index = document.getElementById('7').id;
    console.log("inde of soong: ", song_index);
    audioelement.src = song_list[song_index].path;
    document.getElementById(make_previous_play).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
    play_pause(song_index);

    make_previous_play=song_index;
}

// give the source value f our audio
audioelement.src = song_list[song_index].path;

// taking html selectors
var gif = document.getElementById('gif');
var masterplay = document.getElementById('pause_play');
var prevplay = document.getElementById('prev_play');
var nextplay = document.getElementById('next_play');
var progressbar = document.getElementById('progressbar');
var trac_name=document.getElementById('trac_name');
trac_name.innerText=song_list[song_index].songname;

// const markallplay = () => {
//     for (i = 0; i < song_list.length; i++) {
//         document.getElementById(i).innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
//         let sac5 = document.getElementById(i);
//         console.log(sac5.innerHTML);
//     }
// };



//add event listner
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        // song_index=0;
        console.log("index of song", song_index);
        audioelement.src=song_list[song_index].path;
        audioelement.play();

        gif.style.opacity = '1';
        trac_name.innerText=song_list[song_index].songname;
        document.querySelector('#pause_play').innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
        document.getElementById(song_index).innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';

        let sac4 = document.getElementById(song_index);
        console.log("inner html of miniplay pause_play button: ",sac4.innerHTML)
        console.log('audio is playing')
    }
    else {
        gif.style.opacity = '0';
        audioelement.pause();
        trac_name.innerText=song_list[song_index].songname;
        document.querySelector('#pause_play').innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';
        document.getElementById(song_index).innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';

        let sac3 = document.getElementById(song_index);
        console.log("inner html of miniplay pause_play button: ",sac3.innerHTML)
        console.log('audio is paused');
    }
});

// miniplay.addEventListener('click',play_pause());

function play_pause(song_index) {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        // markallplay()
        audioelement.currentTime=0;
        audioelement.src=song_list[song_index].path;
        audioelement.play();

        gif.style.opacity='1';
        trac_name.innerText=song_list[song_index].songname;
        document.querySelector('#pause_play').innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';
        document.getElementById(song_index).innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';


        let sac = document.getElementById(song_index);
        console.log("inner html of miniplay pause_play button",sac.innerHTML)
        console.log("path of song",audioelement.src);
        console.log("index of song",song_index);
        console.log('audio is playing')
    }
    else {
        // audioelement.currentTime=0;
        audioelement.src=song_list[song_index].path;
        // audioelement.play();
        // markallplay()
        audioelement.pause();
        gif.style.opacity='0';
        trac_name.innerText=song_list[song_index].songname;
        document.getElementById(song_index).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';

        document.querySelector('#pause_play').innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
        console.log("index of song ; ",song_index);
        console.log("path of song: ",audioelement.src);
    
        let sac1=document.getElementById(song_index);
        console.log("inner html of miniplay pause_play button: ",sac1.innerHTML)

        console.log("path of song: ",audioelement.src);
        console.log("index of song: ",song_index);

        console.log('audio is paused')
    }
};

audioelement.addEventListener('timeupdate',()=>{
    console.log("initial current time of song: ",audioelement.currentTime)
    console.log("duratin f audio",audioelement.duration)
    progressbar.value=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log("value of progressbar lawda mera: ",progressbar.value);
    curr_time=progressbar.value;
    console.log("current time of audioelement: ",curr_time);
    console.log("index oof sng before next function calling: ",song_index);
    if (progressbar.value==progressbar.max && song_index < (song_list.length)){
        next_play();
    }
    // else{
    //     if(progressbar.value==progressbar.max && song_index==(song_list.length-1)){
    //         prev_play();
    //     }
    // }
    
});

//event listner on seek  bar
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=(progressbar.value*audioelement.duration)/100;
    console.log("current time of audioelement: ",audioelement.currenTime);
    curr_time=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log("current time of audioelement: ",curr_time);
    progressbar.value=curr_time;
    console.log("value of progressbar: ",progressbar.value);
    
    // console.log(orig_time);
    // progressbar.value=orig_time;
})


//funcions for playing the song
function prev_play() {
    if (song_index<(song_list.length-1) && song_index>0) {
        document.getElementById(song_index).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
        song_index-=1;
        audioelement.src=song_list[song_index].path;
        audioelement.currentTime=0;
        audioelement.play();
        trac_name.innerText=song_list[song_index].songname;
        document.querySelector('#pause_play').innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';
        document.getElementById(song_index).innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';

        console.log("path of song",audioelement.src);
        console.log("index of song",song_index);
        // play_pause(song_index);
    }
    else{
        document.getElementById(0).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
        song_index = song_list.length-1;
        console.log("path of song",audioelement.src);
        console.log("index of song",song_index);
        // play_pause(song_index);
        audioelement.src=song_list[song_index].path;
        audioelement.currentTime=0;
        audioelement.play();
        trac_name.innerText=song_list[song_index].songname;
        document.querySelector('#pause_play').innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';
        document.getElementById(song_index).innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';

        console.log("path of song",audioelement.src);
        console.log("index of song",song_index);
    }

}

function next_play() {
    if (song_index >= 0 && song_index<(song_list.length-1)) {
        document.getElementById(song_index).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
        song_index+=1;
        audioelement.currentTime=0;
        audioelement.play();
        trac_name.innerText=song_list[song_index].songname;
        document.querySelector('#pause_play').innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';
        document.getElementById(song_index).innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';

        console.log("path of song",audioelement.src);
        console.log("index of song",song_index);

        // play_pause(song_index);
    }
    else{
        document.getElementById(song_list.length-1).innerHTML='<i class="fa fa-play-circle fa-3x"></i>';
        song_index = 0;
        audioelement.src=song_list[song_index].path;
        audioelement.currentTime=0;
        audioelement.play();
        trac_name.innerText=song_list[song_index].songname;
        document.querySelector('#pause_play').innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';
        document.getElementById(song_index).innerHTML='<i class="fa fa-pause-circle fa-3x"></i>';

        console.log("path of song",audioelement.src);
        console.log("index of song",song_index);
        // play_pause(song_index);

    }
}
