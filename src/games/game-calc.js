import runGame from '../index.js';

import getRandomNumber from '../randomFunction.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (firstOperand, operator, secondOperand) => {
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

const getQuestionAndAnswer = () => {
  const firstRandomOperand = getRandomNumber(1, 50);
  const secondRandomOperand = getRandomNumber(1, 50);
  const randomOperator = operators[getRandomNumber(0, 2)];
  const question = `${firstRandomOperand} ${randomOperator} ${secondRandomOperand}`;
  const correctAnswer = calculate(firstRandomOperand, randomOperator, secondRandomOperand);
  return [question, String(correctAnswer)];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
