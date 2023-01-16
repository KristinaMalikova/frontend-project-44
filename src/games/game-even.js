import runGame from '../index.js';

import getRandomNumber from '../randomFunction.js';

// Правило игры
const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const startGame = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(ruleOfTheGame, startGame);
};
