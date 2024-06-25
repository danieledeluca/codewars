class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallestNumber;
        args.forEach(function (arg) {
            if (smallestNumber < arg) {
            } else {
                smallestNumber = arg;
            }
        });
        return smallestNumber;
    }
}
