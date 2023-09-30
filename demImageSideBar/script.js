console.log('script is running');
const leftIcon = document.getElementById('left-icon');
const rightIcon = document.getElementById('right-icon');
const imageBox = document.querySelector('.image-box');
let imgWidth = document.querySelectorAll('.image-box .img-tab');
let prevScrollLeft, prevPageX, positionDiff,imageWidth;
imgWidth.forEach(element => {
    let getStyle = window.getComputedStyle(element);
    imageWidth = parseInt(getStyle.getPropertyValue('width'))+5;
    
});

leftIcon.addEventListener('click',()=>{
   imageBox.scrollLeft -=imageWidth;
    console.log('left')
})

rightIcon.addEventListener('click',()=>{
   imageBox.scrollLeft += imageWidth;
    console.log('right');
})