console.log('script is running');
const container = document.querySelector('.container');
const tabs = document.querySelector('.container .tabs');
const leftIcon = document.getElementById('left-icon');
const rightIcon = document.getElementById('right-icon');
// let prevPageX 
var isDragging = false, prevPageX, prevScrollLeft;     //default is false

leftIcon.addEventListener('click', () => {
    tabs.scrollLeft -= 250;;
    handeIcons();
})
rightIcon.addEventListener('click', () => {
    tabs.scrollLeft += 250;;
    handeIcons();
})
// console.log(tabs)
const handeIcons = () => {
    let scrollVal = tabs.scrollLeft
    // let clientWidth = tabs.clientWidth
    let maxScrollVal = tabs.scrollWidth - tabs.clientWidth
    // console.log("scrolval, maxscrollval", scrollVal, maxScrollVal)
    if (true) {
        if (tabs.scrollLeft > 0) {
            leftIcon.style.display = 'flex';
            // console.log('left icon')
        }
        else {
            leftIcon.style.display = 'none';
        }
    }
    if (true) {
        if (maxScrollVal > scrollVal) {
            rightIcon.style.display = 'flex';
            // console.log('right icon')
        } else {
            rightIcon.style.display = 'none';
        }
    }
}

const dragStart =(e)=>{
    isDragging = true
    prevPageX = e.pageX
    console.log("prev page X =>",prevPageX)
    prevScrollLeft = tabs.scrollLeft
    console.log("prevScrollLeft =>",prevScrollLeft)
}

function dragOccur(e) {

    // console.log("scrollleft = ",container.scrollLeft)
    // console.log(container.scrollWidth)
    if (isDragging == true) {
        let positionDiff = e.pageX - prevPageX
        console.log("positionDiff =>",positionDiff)
        console.log("prevScrollLeft =>",prevScrollLeft)
        tabs.scrollLeft = prevScrollLeft - positionDiff;
        // tabs.scrollLeft
        tabs.classList.add('dragging');
        // console.log("scrollleft -e.movementX = ", tabs.scrollLeft)
        // console.log('DRAG OCCURING')
        handeIcons();
    }
    else { return; }
}

const dragStop = () => {
    isDragging = false;
    tabs.classList.remove('dragging');
}

tabs.addEventListener('mousedown', dragStart)
tabs.addEventListener('mousemove', dragOccur);
document.addEventListener('mouseup', dragStop);
// container.addEventListener('click',dragOccur);
