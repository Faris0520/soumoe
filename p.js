const { Aki } = require('aki-api');

const region = 'en';

const aki = new Aki(region);

await aki.start();

console.log('question:', aki.question);
console.log('answers: ', aki.answers);}