const quizArray = [
    {
        Q: "What is the old name of Gautam Budhha?",
        a: "sachin",
        b: "prashant",
        c: "siddharth malhotra",
        d: "siddharth",
        correct: "d"
    },
    {
        Q: "Deepest place in the world?",
        a: "Mia Khalifa",
        b: "Ava Addams",
        c: "Dead Seashore",
        d: "Kendra Lust",
        correct: "c"
    },
    {
        Q: "highest place of the world?",
        a: "Mount Everest",
        b: "Burj Khalifa",
        c: "Mia Khalifa",
        d: "Jammu Kasmir",
        correct: "a"
    },
    {
        Q: "In which place Gautam budhha is death occured?",
        a: "Japan",
        b: "Kushinagar",
        c: "Amethi",
        d: "Tikermafi",
        correct: "b"
    },
    {
        Q: "Name of river where gautam budhha gain knowledge?",
        a: "Amejan",
        b: "Nile",
        c: "Hind Mahasagar",
        d: "Niranjana river",
        correct: "d"
    }
]
// console.log('script is running');
const h3 = document.querySelector('.quiz-container h3');
const p = document.querySelector('.quiz-container p');
const options = document.querySelector('.options');
const labels = document.querySelectorAll('.options li label');
const radios = document.querySelectorAll('.options li input');
const submitBtn = document.querySelector('.btn .submit-btn');
const seeAnswer = document.querySelector('.quiz-container .options .see');
console.log(seeAnswer)

let index = 0, score = 0, isRadioChecked=false;
document.querySelector('.quiz-container .number').innerText = index + 1;
p.innerText = quizArray[index].Q;

labels[0].innerText = quizArray[index].a;
labels[1].innerText = quizArray[index].b;
labels[2].innerText = quizArray[index].c;
labels[3].innerText = quizArray[index].d;


function show(questionNo) {
    if (isRadioChecked==true) {
        console.log('hi'*5);
    }
    console.log("question number : ",questionNo);
}
 
const submitAnswer = () => {
    // checkRadio();
    radios.forEach(i => {
        if (i.checked) {
            isRadioChecked = true;
            console.log(i.value) 
            // console.log(e.target.value);
            console.log("index : ",index);
            console.log(quizArray[index].correct == i.value);
            if (quizArray[index].correct == i.value) {
                score+=1;
                console.log(score);
            }
        }

        i.checked = false;
    });
    index += 1;
    // console.log(index);
    if (index == quizArray.length) {
        // console.log("index => ", index);
        index = 0;
    }
    document.querySelector('.quiz-container .number').innerText = index + 1;
    p.innerText = quizArray[index].Q;
    labels[0].innerText = quizArray[index].a;
    labels[1].innerText = quizArray[index].b;
    labels[2].innerText = quizArray[index].c;
    labels[3].innerText = quizArray[index].d;
}

//adding event listners
// options.addEventListener('click', checkRadio);
submitBtn.addEventListener('click', submitAnswer);
seeAnswer.addEventListener('click',show(index));