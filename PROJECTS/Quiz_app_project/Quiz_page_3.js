// SCRIPT FOR PROBLEMS ON AGE
const quizdata = [
    {
        question: 'The respective ages of a father and his son are 41 and 16 years. In how many years will the father be twice as old as his son?',
        options: ['19 years','9 years','15 years','10 years'],
        answer: '9 years'
    },

    {
        question: 'Three years ago the average age of Abhya and Avani was 18 years. With Pari joining them now, the average becomes 22 years. How old is Pari now?',
        options: ['24 years','26 years','23 years ','25 years'],
        answer: '24 years'
    },


    {
        question: 'The product of the ages of Bill and Jeff is 240. If twice the age of Jeff is more than Bill’s age by 4 years, what is Jeff’s age?',
        options: ['10 years','11 years','12 years','13 years'],
        answer: '12 years'
    },


    {
        question: 'In 10 years, Rupal will be twice as old as Briana was 10 years ago. If Rupal is now 9 years older than Briana, find the present age of Briana.',
        options: ['39','27','45','26'],
        answer: '39'
    },


    {
        question: 'The difference between the ages of two persons is 8 years. 15 years ago, the elder one was twice as old as the younger one. Then the present age of the elder person is',
        options: ['23 years','31 years','34 years','40 years'],
        answer: '31 years'
    },


    {
        question: 'The age of a father 10 years ago was thrice the age of his son. Ten years hence, the father’s age will be twice that of his son. The ratio of their present ages is:',
        options: ['7:3','7:8','5:3','6:8'],
        answer: '7:3'
    },


    {
        question: 'Two years ago, Vibuthi was four times as old as Inder. 8 years hence, Vibuthi’s age will exceed Inder’s age by 12 years. The ratio of the present ages of Vibuthi and Inder',
        options: ['5:1','4:1','3:1','2:1'],
        answer: '3:1'
    },


    {
        question: ' A father is 4 times as old as his son; in 20 years he will be only twice as old as his son. Then the respective ages of father and son are',
        options: ['40,10 years','80,20 years','60,15 years','48,12 years'],
        answer: '40,10 years'
    },


    {
        question: ' One year ago, the ratio of Gisele’s and Sara’s age was 6: 7 respectively. Four years hence, this ratio would become 7: 8. How old is Sara?',
        options: ['26 years','28 years','32 years','36 years'],
        answer: '32 years'
    },



    {
        question: 'A person was asked to state his age in years. His reply was, ‘take my age three years hence, multiply it by 3 and then subtract three times my age three years ago and you will know how old I am’. What was the age of the person?',
        options: ['18 years','20 years','24 years','32 years'],
        answer: '18 years'
    },


  

];

let currentquestion = 0;
let marks = 0;
let timeleft = 220;
const timer = document.getElementById("time");
const timerinteval = setInterval(function () {
    timeleft--;
    timer.textContent = timeleft;

    if (timeleft == 0) {
        clearInterval(timerinteval);

        submitanswer();
    }
}, 1000);


const lenght = quizdata.length;

function loadquestion() {
    const question_conatiner = document.getElementById('question_conatiner');
    const option_container = document.getElementById('option_container');
    const number = document.getElementById('number');

    question_conatiner.innerHTML = quizdata[currentquestion].question;

    option_container.innerHTML = '';
    quizdata[currentquestion].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener('click', () => {
            button.style.backgroundColor = 'rgb(63, 197, 241)';
            button.style.color = 'white';
        })
        button.addEventListener('click', () => selectanswer(option));
        option_container.appendChild(button);
    })

    number.innerHTML = `${[currentquestion + 1]} / ${lenght}`;


}

function selectanswer(selectedoption) {
    const answer = quizdata[currentquestion].answer;

    if (selectedoption === answer) {

        display.innerHTML = selectedoption + ': <h4>your answer is correct</h4>';
        marks++
        const mark = document.getElementById('marks').innerHTML = `${marks} / 10`;
    } else {

        display.innerHTML = selectedoption + ':<h4> answer is wrong </h4> <br> The correct Answer is :' + answer;

    }

    const answerButtons = document.querySelectorAll('#option_container button');
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    currentquestion++;
}


const click = document.getElementById('click');
click.addEventListener('mouseover', () => {
    click.style.backgroundColor = 'rgb(63, 197, 241)';
    click.style.color = 'white';
})

click.addEventListener('mouseout', () => {
    click.style.backgroundColor = 'white';
    click.style.color = 'rgb(63, 197, 241)';
})


function nextquestion() {


    display.innerHTML = '';
    if (currentquestion < quizdata.length) {
        loadquestion();
    } else {
        submitanswer();
    }
}

function submitanswer() {

    const scores = marks;
    const timed = timeleft;


    localStorage.setItem('key', scores);
    localStorage.setItem('timee', timed);

    window.location.href = 'result.html';


}
loadquestion();