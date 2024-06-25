function squareDigits(num) {
    return +num
        .toString()
        .split('')
        .reduce((acc, number) => {
            return acc + Math.pow(number, 2);
        }, '');
}
