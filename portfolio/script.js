console.log("javascript is running");
document.querySelector('.cross').addEventListener('click',()=>{
    document.querySelector('.navbar').classList.toggle('navbarGo')
    if (document.querySelector('.navbar').classList.contains('navbarGo')){
        document.querySelector('.cross').style.display='none';
        document.querySelector('.ham').style.display='block';
    }
    else{
        setTimeout(() => {
            document.querySelector('.cross').style.display='block';
        }, 500);
    }
})
document.querySelector('.ham').addEventListener('click',()=>{
    document.querySelector('.navbar').classList.toggle('navbarGo')
    if (document.querySelector('.navbar').classList.contains('navbarGo')){
        document.querySelector('.cross').style.display='none';
        document.querySelector('.ham').style.display='block';
    }
    else{
        document.querySelector('.ham').style.display='none';
        setTimeout(() => {
            document.querySelector('.cross').style.display='block';
        }, 250);
    }
})
// var btn2=document.querySelector('.btn-2');
// var btn3=document.querySelector('.btn-3');
function submit() {
    const confirmation1=confirm('you have succesfullly submit the form')
    console.log(confirmation1)
    if (confirmation1==true){
        alert('succes')
    }
    else{
        alert('invalid')
    }
   
}
console.log("timestamp is now running")
var currentTime=document.querySelector('.current-time');
setInterval(() => {
    let time=new Date
    // console.log(time)
    currentTime.innerHTML=time
    
}, 1000);