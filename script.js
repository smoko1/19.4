'use strict';

const sayHello = function sayHello() {
    console.log('Hello world - test!');
};
sayHello();

// zadanie 1
const part1_1 = 'Hello';
const part1_2 = 'World';
const part1_3 = 1;
const part1_all = `${part1_1} ${part1_2} ${part1_3}`;

// zadanie 2
const multiply = (arg1 = 1, arg2 = 1) => (arg1 * arg2);

//zadanie 3
const average = (...args) => (args.reduce((prev, curr) => prev + curr) / args.length);

const average_2 = (...args) => {
    let result = 0;
    (args.forEach(arg => {
        result += arg;
    }));
    return result / args.length;
}

console.log("average_2(2,4): ", average_2(2, 4));
console.log("average_2(3,5): ", average_2(3, 5));

// zadanie 4
const grades = [8, 5, 5, 5, 4, 3, 3, 2, 1];
const passedGrades = average(...grades);

// zadanie 5
const veryStrangeArray = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = veryStrangeArray;
const exercise5check = (firstName === 'Iwona' && lastName === 'Nowak') ? 5 : 'did not work';
