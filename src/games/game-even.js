import runGame from '../index.js';

import getRandomNumber from '../randomFunction.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
