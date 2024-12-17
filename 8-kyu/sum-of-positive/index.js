function positiveSum(arr) {
    let sum = 0;
    arr.forEach((el) => {
        if (el >= 0) {
            sum = sum + el;
        }
    });
    return sum;
}
