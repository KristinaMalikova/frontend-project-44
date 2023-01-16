import runGame from '../index.js';

import getRandomNumber from '../randomFunction.js';

// Правило игры
const ruleOfTheGame = 'What is the result of the expression?';

// Используемые параметры
const operators = ['+', '-', '*'];

const getCorrectAnswer = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return 'Error!';
  }
};

const startGame = () => {
  const firstRandomOperand = getRandomNumber(1, 50);
  const secondRandomOperand = getRandomNumber(1, 50);
  const randomOperator = operators[getRandomNumber(0, 2)];
  const question = `${firstRandomOperand} ${randomOperator} ${secondRandomOperand}`;
  const correctAnswer = getCorrectAnswer(firstRandomOperand, randomOperator, secondRandomOperand);
  return [question, String(correctAnswer)];
};

export default () => {
  runGame(ruleOfTheGame, startGame);
};
