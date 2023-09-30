console.log('script is running');
// const 
const notificationBar = document.querySelector('.notification-bar');
const successBtn = document.querySelector('.success-btn');
const warningBtn = document.querySelector('.warning-btn');
const dangerBtn = document.querySelector('.danger-btn');
const infoBtn = document.querySelector('.info-btn');
successBtn.addEventListener('click', () => {
    document.querySelector('.success-bar').style.display = 'flex';
    document.querySelector('.success-bar').classList.add('come');
    setTimeout(() => {
        document.querySelector('.success-bar').classList.add('hide');
        setTimeout(() => {

            document.querySelector('.success-bar').style.display = 'none';
            document.querySelector('.success-bar').classList.remove('hide');
            document.querySelector('.success-bar').classList.remove('come');
        }, 590);
    }, 4000);
})
warningBtn.addEventListener('click', () => {
    document.querySelector('.warning-bar').style.display = 'flex';
    document.querySelector('.warning-bar').classList.add('come');
    setTimeout(() => {
        document.querySelector('.warning-bar').classList.add('hide');
        setTimeout(() => {

            document.querySelector('.warning-bar').style.display = 'none';
            document.querySelector('.warning-bar').classList.remove('hide');
            document.querySelector('.warning-bar').classList.remove('come');
        }, 590);
    }, 4000);
})
dangerBtn.addEventListener('click', () => {
    document.querySelector('.danger-bar').style.display = 'flex';
    document.querySelector('.danger-bar').classList.add('come');
    setTimeout(() => {
        document.querySelector('.danger-bar').classList.add('hide');
        setTimeout(() => {

            document.querySelector('.danger-bar').style.display = 'none';
            document.querySelector('.danger-bar').classList.remove('hide');
            document.querySelector('.danger-bar').classList.remove('come');
        }, 590);
    }, 4000);
})
infoBtn.addEventListener('click', () => {
    document.querySelector('.info-bar').style.display = 'flex';
    document.querySelector('.info-bar').classList.add('come');
    setTimeout(() => {
        document.querySelector('.info-bar').classList.add('hide');
        setTimeout(() => {

            document.querySelector('.info-bar').style.display = 'none';
            document.querySelector('.info-bar').classList.remove('hide');
            document.querySelector('.info-bar').classList.remove('come');
        }, 590);
    }, 4000);
})

// const notification = document.querySelectorAll('.notification')[1];
// console.log();

function closeNotification(e) {
    if (e.target.classList.contains('fa-circle-xmark')) {
        // console.log(e.target.parentElement)
        e.target.parentElement.classList.remove('come');
        e.target.parentElement.classList.add('go');
        setTimeout(() => {

            e.target.parentElement.style.display = 'none';
            e.target.parentElement.classList.remove('go');
        }, 500);
    }
}

notificationBar.addEventListener('click', closeNotification);
