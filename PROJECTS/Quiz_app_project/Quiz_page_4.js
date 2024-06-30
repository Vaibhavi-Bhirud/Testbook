// SCRIPT FOR PROFIT AND LOSS PROBLEMS
const quizdata = [
    {
        question: ' A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?',
        options: ['Rs. 525','Rs.500','Rs.490','Rs.486'],
        answer: 'Rs.486'
    },

    {
        question: 'A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is',
        options: ['10%','15%','20%','25%'],
        answer: '20%'
    },
    {
        question: ' Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.',
        options: ['Rs.6000','Rs.7500','Rs.3500','Rs.4500'],
        answer: 'Rs.4500'
    },


    {
        question: ' If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is',
        options: ['25% loss','20% loss','25% gain','20% gain'],
        answer: '25% gain'
    },

    {
        question: ' Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is',
        options: ['Neither loss nor gain','2.5% gain','2.5% loss','0.25% loss'],
        answer: '0.25% loss'
    },

    {
        question: 'The ratio of cost price and selling price is 4:5. The profit percent is',
        options: ['10%','20%','25%','30%'],
        answer: '25%'
    },

    {
        question: 'If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is',
        options: [' Rs.4200','Rs.4000','Rs.3900','Rs.3800'],
        answer: 'Rs.4000'
    },

    {
        question: ' A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?',
        options: ['20:23','23:20','16:23','23:16'],
        answer: '16:23'
    },

    {
        question: 'Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?',
        options: ['25%','20%','45%','50%'],
        answer: '20%'
    },


    {
        question: ' Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is',
        options: ['Neither loss nor gain','2.5% gain','2.5% loss','0.25% loss'],
        answer: '0.25% loss'
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