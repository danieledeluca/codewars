function getCount(str) {
    var vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str.split('').forEach((letter) => {
        if (vowels.includes(letter)) {
            vowelsCount += 1;
        }
    });

    return vowelsCount;
}
