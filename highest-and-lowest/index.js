function highAndLow(numbers) {
    numbers = numbers.split(' ').map((number) => +number);
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// Examples
console.log(highAndLow('1 2 3 4 5'), '5 1');
console.log(highAndLow('1 2 -3 4 5'), '5 -3');
console.log(highAndLow('1 9 3 4 -5'), '9 -5');

// Tests
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'), '42 -9');
console.log(highAndLow('1 2 3'), '3 1');
