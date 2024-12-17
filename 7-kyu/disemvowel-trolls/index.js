function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .map((letter) => {
            return vowels.includes(letter.toLowerCase()) ? '' : letter;
        })
        .join('');
}
