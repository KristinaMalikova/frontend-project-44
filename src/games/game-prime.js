import { question } from 'readline-sync';
import runGame from '../index.js';

import getRandomNumber from '../index.js';

// Правило игры
const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const startGame = () => {
    const question = getRandomNumber();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  
  export default () => {
    runGame(ruleOfTheGame, startGame);
};