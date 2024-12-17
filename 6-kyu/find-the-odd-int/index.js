function findOdd(A) {
    if (A.length === 1) return A[0];

    const count = new Map();

    A.forEach((number) => {
        const value = (count.get(number) || 0) + 1;
        count.set(number, value);
    });

    return [...count].filter((data) => {
        return data[1] % 2 !== 0;
    })[0][0];
}
