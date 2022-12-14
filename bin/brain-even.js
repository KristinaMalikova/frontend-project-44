import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

getUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const getUserAnswer = () => readlineSync.question('Your answer: ');
const isEven = (randomNumber) => randomNumber % 2 === 0;


const checkNumbers = () => {
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = getRandomNumber();
        const questionRandomNumber = readlineSync.question(`Question: ${randomNumber}`);
        const userAnswer = getUserAnswer();
        const result = isEven(randomNumber) ? 'yes' : 'no';
        if (result === userAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} 'wrong answer ;(. Correct answer was '${result}'. \nLet's try again!`);
            break;
        }
}
console.log(`Congratulations!`);
};

checkNumbers();

