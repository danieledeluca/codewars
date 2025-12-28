function rgb(r, g, b) {
    const convertColor = (color) => {
        return Math.max(0, Math.min(255, color)).toString(16).padStart(2, '0').toUpperCase();
    };

    return `${convertColor(r)}${convertColor(g)}${convertColor(b)}`;
}

// Examples
console.log(rgb(255, 255, 255), 'FFFFFF');
console.log(rgb(255, 255, 300), 'FFFFFF');
console.log(rgb(0, 0, 0), '000000');
console.log(rgb(148, 0, 211), '9400D3');

// Tests
console.log(rgb(0, 0, 0), '000000');
console.log(rgb(0, 0, -20), '000000');
console.log(rgb(300, 255, 255), 'FFFFFF');
console.log(rgb(173, 255, 47), 'ADFF2F');
