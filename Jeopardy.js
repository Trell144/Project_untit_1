
   
  
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

document.querySelector('#tileOne').addEventListener('click', function(){
    prompt('What is a common K9 intestinal parisite') 
    //this will execute when the event listener is triggered
})

document.querySelector('#tileTwo').addEventListener('click', function(){
    alert ('Second Questions') 
    //this will execute when the event listener is triggered
})