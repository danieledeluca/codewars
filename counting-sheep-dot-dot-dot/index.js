function countSheeps(arrayOfSheep) {
    // TODO May the force be with you

    let count = 0;
    arrayOfSheep.forEach(function (sheep) {
        if (sheep) {
            count++;
        }
    });

    return count;
}
