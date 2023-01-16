import runGame from '../index.js';

import getRandomNumber from '../randomFunction';

// Правило игры
const ruleOfTheGame = 'What number is missing in the progression?';

// Используемые параметры
const progressionLength = 10;
const minRandomNumber = 1;
const maxRandomNumber = 50;

// Функция арифметической прогрессии

const makeProgression = (startNumber, lengthStep, progresLength) => {
    const progressionNumbers = [];
    for (let i = 0; i < progresLength; i += 1) {
      progressionNumbers.push(startNumber + (lengthStep * i));
    }
    return progressions;
  };

  const startGame = () => {
    const startNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
    const lengthStep = getRandomNumber (minRandomNumber, maxRandomNumber);
    const progression = defineProgression(startNumber, lengthStep, progressionLength);
    const finishNumber = getRandomNumber(0, makeProgression.length - 1);
    const correctAnswer = progression[finishNumber];
    progression[finishNumber] = '..';
    const question = progression.join(' ');
  
    return [String(correctAnswer), question];
  };
  
  export default () => {
    runGame(ruleOfTheGame, startGame);
};