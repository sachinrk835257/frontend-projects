console.log('script is running now--');
var timer = 10;

const popup = document.querySelector('.popup');
var isConnected = false;
const recnnectNow = document.querySelector('.popup button');



// navigator object
const internetInterval = setInterval(() => {

    if (navigator.onLine) {     //you are online return true otherwise false 
        connected(navigator.onLine);
        // console.log(navigator.onLine);  

    }
    else {
        notConnected(navigator.onLine);
        // console.log(navigator.onLine);  
    }
}, 2000);

const notConnected = (status) => {
    popup.classList.add('show');
    popup.style.backgroundColor = 'rgba(250, 235, 215, 0.95)'
    document.querySelector('.container').classList.add('fade-container');
    document.querySelector(".wifi-icon i").className = "fa-solid fa-wifi-slash";
    document.querySelector(".wifi-icon i").style.color = 'red';
    document.querySelector('.content h3').innerHTML = "Lost Connection";
    document.querySelector('.content p').innerHTML = "connect to your wifi within <span class=\"countdown\">10</span> seconds";
    countDownINterval = setInterval(() => {

        timer--;
        // console.log(timer);  
        document.querySelector('.countdown').innerHTML = timer;
        if (timer == 0) {
            connected(navigator.onLine)
            return
        }
    }, 1000);
    // console.log(countDownINterval)
}
const connected = (status) => {

    // clearInterval(countDownINterval)        // ..............ERROR IS FOUND..........
    if (status) {
        popup.style.backgroundColor = 'rgba(250, 235, 215, 1)'
        document.querySelector('.container').classList.remove('fade-container');
        document.querySelector(".wifi-icon i").className = "fa-solid fa-wifi";
        document.querySelector(".wifi-icon i").style.color = 'rgb(59, 245, 59)';
        document.querySelector('.content h3').innerHTML = "Connection is Back";
        document.querySelector('.content p').innerHTML = "your network is back now start your work";
        return setTimeout(() => {
            popup.classList.remove('show');
        }, 1200);
    }
}
recnnectNow.addEventListener('click', connected(navigator.onLine));