//-------------------------------Variables-----------------------------------//
const randomFunc = [multiplication, division, addition, subtraction,]
const checkBox = document.querySelector('#splash_screen_preference_check_box');
const newProblemBtn = document.querySelector('#new_problem_button');
const checkButton = document.querySelector('#result_check');
const input_form = document.getElementById('input_form');
const noAnswerAlert = document.getElementById('no_answer_check_button_alert');
const nonIntegerAlert = document.getElementById('non_integer_check_button_alert');
let problem, input, correctAnswer, questionStatus;
let correctCounter = incorrectCounter = totalCounter = 0;


//------------------------------Event Listeners------------------------------//
if (checkBox) {
    checkBox.addEventListener('change', function () {
        console.log(checkBox.checked)
        axios.post('../api/user_preferences/set_preference', {
            "splash_screen_name": "Math",
            "display_on_refresh": !this.checked
        });
    });
}


checkButton.addEventListener('click', function () {
    problem = document.querySelector('#math_problem').innerText;
    input = document.querySelector('#input').value;
    correctAnswer = document.querySelector('#correct_answer').value;
    console.log(`User input is: ${input}`);
    console.log(`The correct answer is: ${correctAnswer}`);

    if (isNaN(input)) {
        nonIntegerPrompt();

    } else if (input === "") {
        noAnswerPrompt();

    } else if (input === correctAnswer) {
        correctAnswerPrompt();
        sendMathResults();
        answerCounter("correct");

    } else if (input !== correctAnswer) {
        incorrectAnswerPrompt();
        sendMathResults();
        answerCounter("incorrect");
    }
});


newProblemBtn.addEventListener('click', function () {
    newProblemPrompt()
});


//---------------------------------Functions---------------------------------//
function answerCounter(status) {
    switch (status) {
        case "incorrect":
            incorrectCounter += 1;
            console.log(incorrectCounter);
            break;
        case "correct":
            correctCounter += 1;
            console.log(correctCounter);
            break;
        default:
            break;
    }
    totalCounter += 1;

    document.querySelector('#Correct_Answer_Count').innerText = `Correctly Answered: ${correctCounter}`;
    document.querySelector('#Incorrect_Answer_Count').innerText = `Incorrectly Answered: ${incorrectCounter}`;
    document.querySelector('#Total_Question_Count').innerText = `Total Questions Completed This Session: ${totalCounter}`;

    var ctx = document.getElementById('gameChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [
                `Correct: ${correctCounter}`,
                `Incorrect: ${incorrectCounter}`,
                `Answered: ${totalCounter}`],
            datasets: [{
                label: 'Current Results',
                data: [
                    correctCounter,
                    incorrectCounter,
                    totalCounter
                ],
                backgroundColor: [
                    'rgba(13, 222, 2, 0.2)',
                    'rgba(250, 0, 0, 0.2)',
                    'rgba(10, 38, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(7, 158, 0, 1)',
                    'rgba(225, 0, 0, 1)',
                    'rgba(30, 56, 255, 1)',
                ],
                borderWidth: 1.5
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


function newProblemPrompt() {
    document.querySelector('#input').focus();
    newProblemBtn.innerText = 'New Problem'
    newProblemBtn.disabled = true;
    checkButton.disabled = false;
    let result = randomFunc[Math.floor(Math.random() * randomFunc.length)]();
    document.querySelector('#correct_answer').setAttribute('value', result);
    if (checkButton.textContent = 'Correct!') {
        checkButton.classList.remove('btn-success');
        checkButton.classList.add('btn', 'btn-primary', 'btn-lg');
        checkButton.textContent = 'Check';
        input_form.reset();
    }
    if (checkButton.textContent = 'Incorrect') {
        checkButton.classList.remove('btn-danger');
        checkButton.classList.add('btn', 'btn-primary', 'btn-lg');
        checkButton.textContent = 'Check';
        input_form.reset();
    }

}


function sendMathResults() {
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios.post('../api/scoring/submit_score_details', {
        "math_problem": problem,
        "user_answer": input,
        "true_answer": correctAnswer,
        "question_status": questionStatus,
    });
    console.log(`Axios sent: ${problem}, User Input: ${input},
        Correct Answer: ${correctAnswer}, Question Status: ${questionStatus}`);
}


function noAnswerPrompt() {
    console.log('No input from user, alert shown')
    noAnswerAlert.style.visibility = 'visible'
    noAnswerAlert.style.display = 'block'
    nonIntegerAlert.style.visibility = 'hidden'
    nonIntegerAlert.style.display = 'none'
}


function nonIntegerPrompt() {
    console.log('Non-integer entered')
    nonIntegerAlert.style.visibility = 'visible'
    nonIntegerAlert.style.display = 'block'
    noAnswerAlert.style.visibility = 'hidden'
    noAnswerAlert.style.display = 'none'
}


function incorrectAnswerPrompt() {
    checkButton.classList.remove('btn-primary', 'btn-lg');
    checkButton.classList.add('btn-danger');
    checkButton.textContent = 'Incorrect';
    questionStatus = 'Incorrect'
    noAnswerAlert.style.visibility = 'hidden'
    nonIntegerAlert.style.visibility = 'hidden'
    noAnswerAlert.style.display = 'none'
    nonIntegerAlert.style.display = 'none'
    document.getElementById('new_problem_button').disabled = false;
    document.getElementById('result_check').disabled = true;
}


function correctAnswerPrompt() {
    checkButton.classList.remove('btn-primary', 'btn-lg', 'btn-danger');
    checkButton.classList.add('btn-success');
    checkButton.textContent = 'Correct!';
    questionStatus = 'Correct'
    noAnswerAlert.style.visibility = 'hidden'
    nonIntegerAlert.style.visibility = 'hidden'
    noAnswerAlert.style.display = 'none'
    nonIntegerAlert.style.display = 'none'
    document.getElementById('new_problem_button').disabled = false;
    document.getElementById('result_check').disabled = true;
}


function multiplication() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let problemResult = num1 * num2;
    console.log(num1, '*', num2, '=', problemResult);
    document.getElementById('math_problem').innerHTML =
        (`${num1} x ${num2}`);
    return problemResult
}


function division() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 12) + 1;
    let problemResult = (num1 * num2) / num2;
    console.log(num1 * num2, '/', num2, '=', problemResult);
    document.getElementById('math_problem').innerHTML =
        (`${num1 * num2} ÷ ${num2}`);
    return problemResult
}


function addition() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let problemResult = num1 + num2;
    console.log(num1, '+', num2, '=', problemResult);
    document.getElementById('math_problem').innerHTML =
        (`${num1} + ${num2}`);
    return problemResult
}


function subtraction() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let numList = [num1, num2];
    numList.sort(function (a, b) {
        return a - b
    });
    let problemResult = numList[1] - numList[0];
    console.log(numList[1], '-', numList[0], '=', problemResult);
    document.getElementById('math_problem').innerHTML =
        (`${numList[1]} - ${numList[0]}`);
    return problemResult
}