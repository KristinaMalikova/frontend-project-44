#!/usr/src/env node
import readlineSync from 'readline-sync';

// Используемые параметры
const quantityOfRounds = 3;

const runGame = (ruleOfTheGame, startGame) => {
  console.log('Welcome to the Brain Games!');
  const uName = readlineSync.question('May I have your name?  ');
  const userName = uName[0].toUpperCase() + uName.slice(1);
  console.log(`Hello, ${userName}!`);
  console.log(ruleOfTheGame);

  for (let i = 0; i < quantityOfRounds; i += 1) {
    const [question, correctAnswer] = startGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
