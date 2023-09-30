console.log('script is now running');
const pianoKeys = document.querySelector('.piano-keys');
const blackKeys = ['b', 'd', 'f', 'j', 'l', 'n']
window.addEventListener('keydown', keycodeFinder);

function keycodeFinder(e) {
    if (e.keyCode >= 65 && e.keyCode <= 79) {
        if ((blackKeys).includes(e.key)) {
            console.log("black");
            document.getElementById(e.key).classList.add('active-black');
            setTimeout(() => {

                document.getElementById(e.key).classList.remove('active-black');
                console.log(document.getElementById(e.key))
            }, 200);

        } else {
            document.getElementById(e.key).classList.add('active-white');
            setTimeout(() => {

                document.getElementById(e.key).classList.remove('active-white');
                console.log(document.getElementById(e.key));
            }, 200);
            console.log("white")
        }

    }
}
const showKeys = document.querySelector('.show-keys');
showKeys.addEventListener('click', keyShow);
function keyShow() {
    let showKeysInput = document.querySelector('.show-keys span input');
    // console.log(showKeysInput.checked)
    if (showKeysInput.checked) {

        var keyText = document.querySelectorAll('.piano-keys .key span');
        for (let i = 0; i < keyText.length; i++) {
            keyText[i].style.display = 'block';

        }
    } else {
        var keyText = document.querySelectorAll('.piano-keys .key span');
        for (let i = 0; i < keyText.length; i++) {
            keyText[i].style.display = 'none';

        }
    }
}

pianoKeys.addEventListener('click', (e) => {
    // console.log(e.target.classList.contains('black'));
    if (e.target.classList.contains('black')) {
        e.target.classList.add('active-black');
        setTimeout(() => {
            e.target.classList.remove('active-black');
        }, 200);
    } else {
        e.target.classList.add('active-white');
        setTimeout(() => {
            e.target.classList.remove('active-white');
        }, 200);
    }
})