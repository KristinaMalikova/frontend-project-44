import runGame from '../index.js';

import getRandomNumber from '../randomFunction.js';

// Правило игры
const ruleOfTheGame = 'What is the result of the expression?';

// Используемые параметры
const operators = ['+', '-', '*'];

const getRandomOperator = () => Math.floor(Math.random() * 3);

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
  const firstRandomOperand = getRandomNumber();
  const secondRandomOperand = getRandomNumber();
  const randomOperator = operators[getRandomOperator()];
  const question = `${firstRandomOperand} ${randomOperator} ${secondRandomOperand}`;
  const correctAnswer = getCorrectAnswer(firstRandomOperand, randomOperator, secondRandomOperand);
  return [question, correctAnswer];
};

export default () => {
  runGame(ruleOfTheGame, startGame);
};
