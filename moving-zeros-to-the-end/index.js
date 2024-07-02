function moveZeros(arr) {
    const arrayWithoutZero = arr.filter((element) => element !== 0);
    const zeroToAdd = arr.length - arrayWithoutZero.length;

    return [...arrayWithoutZero, ...new Array(zeroToAdd).fill(0)];
}

// Examples
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']), [false, 1, 1, 2, 1, 3, 'a', 0, 0]);

// Tests
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
