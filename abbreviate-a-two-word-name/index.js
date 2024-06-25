function abbrevName(name) {
    return name
        .split(' ')
        .reduce(function (acc, word) {
            return acc + word.charAt(0).toUpperCase() + '.';
        }, '')
        .substring(0, 3);
}
