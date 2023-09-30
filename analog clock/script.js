console.log("welcome to my analog clock project")
var min=document.getElementById('minute');
var hr=document.getElementById('hour')
// var ds=30;
// hr.style.transform='rotate(' + ds + 'deg)';
var sec=document.getElementById('second')

setInterval(() => {
    var d=new Date;
    var htime=d.getHours();
    var mtime=d.getMinutes();
    var stime=d.getSeconds();
    console.log("hour: ",htime)
    console.log("minutes: ",mtime)
    console.log("seconds: ",stime)
    var hrotation=30*htime + mtime/2
    var mrotation=mtime*6 + stime/10
    var srotation=stime*6
    // hr.style.transform='rotate(' + hrotation + 'deg)';

    hr.style.transform='rotate(' + hrotation + 'deg)';    
    min.style.transform='rotate(' + mrotation + 'deg)';    
    sec.style.transform='rotate(' + srotation + 'deg)';
    console.log("hour rotation + :",hrotation);
    console.log("minute rotation + :",mrotation);
    console.log("second rotation + :",srotation);

}, 1000);
