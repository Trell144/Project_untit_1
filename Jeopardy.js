   alert('WELCOME TO JEOPARDY! 1st Player to reach 2,000 WINS! Click \"OK" to play!' + "\t• all answers should be in lower case\n" 
   + '\t• answers should be phrased like a question\n');





let questionsArray = [{
    question: 'What the most common K9 intestinal parisite?',
    answer: 'what are round worms'
}, {
    question: 'Has the largest "blank" of any mammaml',
    answer: 'what are eyes'
}, {
    question: 'What does a dog say?',
    answer: 'what is woof'
}, {
    question: 'How do dogs cool down?',
    answer: 'what is panting'
}, {
    question: 'How many vocal sounds does a cat make?',
    answer: 'what is over a hundred'
}, {
    question: 'What does a cat say?',
    answer: 'what is meow'
}, {
    question: 'What is a dogs most developed sense?',
    answer: 'what is smell'
}, {
    question: 'How many lives does a cat have?',
    answer: 'what is nine'
}, {
    question: 'What Georgia university has a dog mascot?',
    answer: 'what is uga'
    
}]

var gameScore = 0;

document.querySelector('#tileOne').addEventListener('click', function () {
    const userAnswer = prompt(questionsArray[0].question)
    console.log(userAnswer)
    if (userAnswer == questionsArray[0].answer) {
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }
})


document.querySelector('#tileTwo').addEventListener('click', function () {
    const userAnswer = prompt(questionsArray[1].question)
    console.log(userAnswer)
    gameScore = gameScore + 250
    if (userAnswer == questionsArray[1].answer) {
        alert('Correct!')
        //ADD point value to score
        
    } else {
        alert('Incorrect!')  
    }
    
})
document.querySelector('#tileThree').addEventListener('click', function () {
    const userAnswer = prompt(questionsArray[2].question)
    console.log(userAnswer)
    if (userAnswer == questionsArray[2].answer) {
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }
})
document.querySelector('#tileFour').addEventListener('click', function () {
    const userAnswer = prompt(questionsArray[3].question)
    console.log(userAnswer)
    if (userAnswer == questionsArray[3].answer) {
        alert('Correct!')
    } else {
        alert('Incorrect!')
        
    }
})
document.querySelector('#tileFive').addEventListener('click', function () {
    const userAnswer = prompt(questionsArray[4].question)
    console.log(userAnswer)
    if (userAnswer == questionsArray[4].answer) {
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }
})
document.querySelector('#tileSix').addEventListener('click', function () {
    const userAnswer = prompt(questionsArray[5].question)
    console.log(userAnswer)
    if (userAnswer == questionsArray[5].answer) {
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }
})     

document.querySelector('#tileSeven').addEventListener('click', function () {
    const userAnswer = prompt(questionsArray[6].question)
    console.log(userAnswer)
    if (userAnswer == questionsArray[6].answer) {
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }
})
document.querySelector('#tileEight').addEventListener('click', function () {
    const userAnswer = prompt(questionsArray[7].question)
    console.log(userAnswer)
    if (userAnswer == questionsArray[7].answer) {
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }
})
document.querySelector('#tileNine').addEventListener('click', function () {
    const userAnswer = prompt(questionsArray[8].question)
    console.log(userAnswer)
    if (userAnswer == questionsArray[8].answer) {
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }
})

function gamescore() {
    return 0;
}
