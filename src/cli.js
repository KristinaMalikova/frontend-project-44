import readlineSync from 'readline-sync';

const getUserName = () => {
    const uName = readlineSync.question('May I have your name? ');
    const userName = uName[0].toUpperCase() + uName.slice(1);
    console.log('Hello, ' + userName + '!');
};

export default getUserName;