function digitalRoot(n) {
    const sum = n
        .toString()
        .split('')
        .reduce((sum, digit) => {
            return sum + +digit;
        }, 0);
    return sum > 9 ? digitalRoot(sum) : sum;
}
