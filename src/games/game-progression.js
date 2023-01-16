import runGame from '../index.js';

import getRandomNumber from '../randomFunction.js';

// Правило игры
const ruleOfTheGame = 'What number is missing in the progression?';

// Используемые параметры
const progressionLength = 10;
const minRandomNumber = 1;
const maxRandomNumber = 50;

// Функция арифметической прогрессии

const makeProgression = (startNumber, lengthStep, progresLength) => {
  const progression = [];
  for (let i = 0; i < progresLength; i += 1) {
    progression.push(startNumber + (lengthStep * i));
  }
  return progression;
};

const startGame = () => {
  const startNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const lengthStep = getRandomNumber(minRandomNumber, maxRandomNumber);
  const progression = makeProgression(startNumber, lengthStep, progressionLength);
  const finishNumber = getRandomNumber(0, makeProgression.length - 1);
  const correctAnswer = progression[finishNumber];
  progression[finishNumber] = '..';
  const question = progression.join(' ');
  return [String(correctAnswer), question];
};

export default () => {
  runGame(ruleOfTheGame, startGame);
};
