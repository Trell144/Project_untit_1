
   
  
    alert('WELCOME TO JEOPARDY! 1st Player to reach 2,000 WINS! Click \"OK" to play!');

    var playerOne= 0;
    

const gameData = {
    questions : {
        questionsOptions: ["What is the name of this campus"],
        answer: "General Assembly"
    }
}


    var playerInput = prompt(gameData.questions.questionsOptions);

    if (playerInput == gameData.questions.answer){
console.log("correct answer");

    }

    if (playerInput != gameData.questions.questionsOptions){
        console.log('wrong answer, next player')
    }


