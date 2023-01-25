import runGame from '../index.js';

import getRandomNumber from '../randomFunction.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startNumber, lengthStep, progresLength) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(startNumber + (lengthStep * i));
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startNumber = getRandomNumber(1, 50);
  const lengthStep = getRandomNumber(2, 4);
  const progression = getProgression(startNumber, lengthStep, progressionLength);
  const finishNumber = getRandomNumber(0, getProgression.length - 1);
  const correctAnswer = progression[finishNumber];
  progression[finishNumber] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
