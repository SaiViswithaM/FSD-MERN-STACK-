let num: number = 1234;
let sum: number = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("Sum of Digits =", sum);