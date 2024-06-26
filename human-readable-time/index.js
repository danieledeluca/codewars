function humanReadable(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);
    const secondsRemainder = seconds - hours * 3600 - minutes * 60;

    const pad = (number) => {
        return number.toString().padStart(2, 0);
    };

    return `${pad(hours)}:${pad(minutes)}:${pad(secondsRemainder)}`;
}

// Examples
console.log(humanReadable(359999), '99:59:59');

// Tests
console.log(humanReadable(0), '00:00:00');
console.log(humanReadable(59), '00:00:59');
console.log(humanReadable(60), '00:01:00');
console.log(humanReadable(90), '00:01:30');
console.log(humanReadable(3599), '00:59:59');
console.log(humanReadable(3600), '01:00:00');
console.log(humanReadable(45296), '12:34:56');
console.log(humanReadable(86399), '23:59:59');
console.log(humanReadable(86400), '24:00:00');
console.log(humanReadable(359999), '99:59:59');
