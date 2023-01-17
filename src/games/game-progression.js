import runGame from '../index.js';

import getRandomNumber from '../randomFunction.js';

const ruleOfTheGame = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (startNumber, lengthStep, progresLength) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(startNumber + (lengthStep * i));
  }
  return progression;
};

const startGame = () => {
  const startNumber = getRandomNumber(1, 50);
  const lengthStep = getRandomNumber(2, 4);
  const progression = makeProgression(startNumber, lengthStep, progressionLength);
  const finishNumber = getRandomNumber(0, makeProgression.length - 1);
  const correctAnswer = progression[finishNumber];
  progression[finishNumber] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => {
  runGame(ruleOfTheGame, startGame);
};
