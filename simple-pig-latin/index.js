/**
 * @param {string} str
 * @returns {string}
 */
function pigIt(str) {
    return str
        .split(' ')
        .map((word) => (word.match(/[a-z]/i) ? `${word.slice(1)}${word.charAt(0)}ay` : word))
        .join(' ');
}

// Examples
console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
console.log(pigIt('Hello world !'), 'elloHay orldway !');

// Tests
console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay');
