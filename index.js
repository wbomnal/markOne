var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's is your Name? ");
console.log ("Welcome to my First App, " + userName + ". Lets play a game called - HOW MUCH DO YOU KNOW WILSON !");

var score = 0

var highestScore = [

{ name: "Wilson",
  score: 5,
},
{  name: "Mamata",
  score: 4,
},
{  name: "Inder",
  score: 3,
}
]
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())   
  {
  console.log("Correct ");
  score = score + 1;
  }
  else
  {
  console.log("Incorrect ");
  score = score - 1;
  }
  
console.log("Total current Score "+ score);
console.log("-------------------");
}

var questions = [{
    question: "Where do I live now? ", 
  answer: "Bangalore"
  },
  {
    question: "Am I married already? ", 
  answer: "yes"
  },
  {
    question: "Which Renault car do I have? ", 
  answer: "Kwid"
  },
  {
    question: "What am I learning nowadays? ", 
  answer: "Javascript"
  },
  {
    question: "Which foreign language Do I know? ", 
  answer: "German"
  }];

for(var i=0; i < questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

function showScores() {
 highestScore.map(score => console.log(score.name, " : ", score.score))

}

showScores()


