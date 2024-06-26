function descendingOrder(n) {
    return +n.toString().split('').sort().reverse().join('');
}

// Examples
console.log(descendingOrder(42145), 54421);
console.log(descendingOrder(145263), 654321);
console.log(descendingOrder(123456789), 987654321);

// Tests
console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(111), 111);
console.log(descendingOrder(15), 51);
console.log(descendingOrder(1021), 2110);
console.log(descendingOrder(123456789), 987654321);
