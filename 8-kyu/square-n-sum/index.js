function squareSum(numbers) {
    return numbers.reduce((acc, number) => {
        acc += Math.pow(number, 2);
        return acc;
    }, 0);
}
