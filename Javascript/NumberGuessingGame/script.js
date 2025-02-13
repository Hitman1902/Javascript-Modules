// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]

// Data1=[17,21,23]
// let day=1
// for (let i=0;i<Data1.length;i++)
// {
//     console.log(`${Data1[i]} c in ${day} days`)
//     day+=1
// }

// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Selecttheelementwiththe'again'classandattachaclickeventhandler 2. Inthehandlerfunction,restoreinitialvaluesofthe'score'and
// 'secretNumber' variables
// 3. Restoretheinitialconditionsofthemessage,number,scoreandguessinput
// fields
// 4. Alsorestoretheoriginalbackgroundcolor(222)andnumberwidth(15rem)



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  
  if (!guess) {

    displayMessage('⛔️ No number!');

    
  } else if (guess === secretNumber) {
    
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    
  } else if (guess !== secretNumber) {
    if (score > 1) {
      
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;


  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
