import runGame from '../index.js';

import getRandomNumber from '../randomFunction.js';

// Правило игры
const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';

const getDiviser = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getDiviser(secondNumber, firstNumber % secondNumber);
};

const startGame = () => {
  const firtsRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const question = `${firtsRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getDiviser(firtsRandomNumber, secondRandomNumber);
  return [question, correctAnswer];
};

export default () => {
  runGame(ruleOfTheGame, startGame);
};
