console.log("welcome to my quick making clock");
setInterval(() => {
    let dt=new Date;
    let htime=dt.getHours()
    let mtime=dt.getMinutes()
    let stime=dt.getSeconds()
    // console.log("hours : ",htime,"\nminutes : ",mtime,"\nseconds : ",stime);
    let hrotation=htime*30 + mtime/2;
    let mrotation=mtime*6 + stime/10;
    let srotation=stime*6

    let hr=document.querySelector('#hour');
    hr.style.transform="rotate(" + hrotation + "deg)";

    let min=document.querySelector('#minute');
    min.style.transform="rotate(" + mrotation + "deg)";

    let sec=document.querySelector('#second');   
    sec.style.transform="rotate(" + srotation + "deg)";

}, 1000);