//     alert('WELCOME TO JEOPARDY! 1st Player to reach 2,000 WINS! Click \"OK" to play!');

//     var playerOne= 0;

// const gameData = {
//     questions : {
//         questionsOptions: ["What is a common K9 intestinal parasite?"],
//         answer: "Round Worms"        
//     }
// }

//     var playerInput = prompt(gameData.questions.questionsOptions);

//     if (playerInput == gameData.questions.answer){
// console.log("correct answer");
//     }

//     if (playerInput != gameData.questions.questionsOptions){
//         console.log('wrong answer, next players turn')
//     }

document.querySelector('#tileOne').addEventListener('click', function () {
    const userAnswer = prompt('What the most common K9 intestinal parisite?')
    console.log(userAnswer)
    if (userAnswer == "worms") {
        alert('Correct!')
    } else {
        alert('Incorrect!')
    }

})


document.querySelector('#tileTwo').addEventListener('click', function () {
    prompt('Has the largest "blank" of any mammaml')
    //this will execute when the event listener is triggered
})
document.querySelector('#tileThree').addEventListener('click', function () {
    prompt('')
    //this will execute when the event listener is triggered
})
document.querySelector('#tileFour').addEventListener('click', function () {
    prompt('How do dogs cool down?')
    //this will execute when the event listener is triggered
})
document.querySelector('#tileFive').addEventListener('click', function () {
    prompt('Makes over "blank"  vocal sounds')
    //this will execute when the event listener is triggered
})
document.querySelector('#tileSix').addEventListener('click', function () {
    prompt('Sixth Question')
    //this will execute when the event listener is triggered
})
document.querySelector('#tileSeven').addEventListener('click', function () {
    prompt('What is a dogs most developed sense?')
    //this will execute when the event listener is triggered
})
document.querySelector('#tileEight').addEventListener('click', function () {
    prompt('On average cats live for "blank" years')
    //this will execute when the event listener is triggered
})
document.querySelector('#tileNine').addEventListener('click', function () {
    prompt('Ninth Question')
    //this will execute when the event listener is triggered
})