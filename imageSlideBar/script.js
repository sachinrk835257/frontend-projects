// console.log(document.querySelector('.image-container'));
console.log('script is runnnig');
const imgContainer = document.querySelector('.image-container')
const leftIcon = document.getElementById('left');
const rightIcon = document.getElementById('right');
let firstImgWidth = document.querySelectorAll('.image-container img')[0].clientWidth
var isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff, autoScroll;

// console.log(imgContainer)
const icons = document.querySelectorAll('.icons');
const handleIcons = ()=>{
    let scrollVal = imgContainer.scrollLeft;
    let maxScrollVal = imgContainer.scrollWidth - imgContainer.clientWidth
    leftIcon.style.display = scrollVal > 0 ? 'flex':'none';
    rightIcon.style.display = maxScrollVal > scrollVal ? 'flex':'none';
    // console.log(scrollVal,imgContainer.scrollWidth,imgContainer.clientWidth,maxScrollVal)
}

icons.forEach(i => {
    // console.log(i.id);
    i.addEventListener('click',()=>{            
            let scrollDiff = firstImgWidth + 14;        //margin +14
            imgContainer.scrollLeft += i.id == "left" ? -(scrollDiff) : scrollDiff;
            handleIcons();
    })
    i.addEventListener('mousemove',()=>{            
        // console.log('mouse is over....')
        setTimeout(() => {
            handleIcons();
            
        }, 200);
    })
    // i.id
});

// const imgContainer1 = document.querySelector('.image-container');
// console.log(document.querySelector('.image-container'))
const dragStart = (e)=>{
    isDragStart = true
    prevPageX = e.clientX || e.touches[0].clientX
    prevScrollLeft = imgContainer.scrollLeft
    // console.log('prevScrollLeft--------',prevScrollLeft)
}


const dragging = (e)=>{
    if(isDragStart == false) return;
    isDragging = true
    e.preventDefault();
    imgContainer.classList.add('dragging');
    // console.log(e.touches[0])
    // console.log('\n')
    // console.log('prevPageX',prevPageX)
    // console.log('prevScrollLeft',prevScrollLeft)
    // console.log("current pageX",e.pageX)
    positionDiff = (e.clientX || e.touches[0].clientX) - prevPageX
    // console.log("position diff",positionDiff)
    
    imgContainer.scrollLeft =prevScrollLeft - positionDiff;
    // console.log(imgContainer.scrollLeft)
    setTimeout(() => {
        handleIcons();
    }, 200);    
    // console.log('dragging...')
}

const dragStop = ()=>{
    isDragStart = false
    imgContainer.classList.remove('dragging')
    // console.log(isDragging)
    if(!isDragging) return; 
    // console.log(isDragging)

    isDragging = false
    autoSlide();
    
}

const autoSlide = ()=>{
    positionDiff = Math.abs(positionDiff);
    let autoScroll = (firstImgWidth + 14) - positionDiff;
    if (prevScrollLeft > imgContainer.scrollLeft) {
        // console.log("right");
        // console.log("autoscroll",autoScroll);

        imgContainer.scrollLeft += positionDiff > (firstImgWidth + 14)/3 ? -autoScroll:positionDiff;    //value of positionDiff is absolute
    } else {
        // console.log("left");
        // console.log("autoscroll",autoScroll);
        imgContainer.scrollLeft += positionDiff > (firstImgWidth + 14)/3 ? autoScroll:-positionDiff;    //value of positionDiff is absolute

    }
}
imgContainer.addEventListener('mousedown',dragStart)
imgContainer.addEventListener('touchstart',dragStart)

imgContainer.addEventListener('mousemove',dragging);
imgContainer.addEventListener('touchmove',dragging);

imgContainer.addEventListener('mouseup',dragStop);

imgContainer.addEventListener('mouseleave',dragStop);
imgContainer.addEventListener('touchend',dragStop);