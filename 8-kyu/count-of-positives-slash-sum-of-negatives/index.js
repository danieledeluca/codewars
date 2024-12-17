function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }
    const pos = input.filter(function (num) {
        if (num > 0) {
            return num;
        }
    });
    const neg = input.reduce(function (acc, num) {
        if (num < 0) {
            return acc + num;
        }
        return acc;
    }, 0);
    return [pos.length, neg];
}
