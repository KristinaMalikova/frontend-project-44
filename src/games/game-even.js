import runGame from '../index.js';

import getRandomNumber from '../randomFunction';

// Правило игры
const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const startGame = () => {
        const question = getRandomNumber();
        const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
        return [question, correctAnswer];
};
    
export default () => {
    runGame(ruleOfTheGame, startGame);
};

