"use strict";
// Program to Find Sum of Digits
Object.defineProperty(exports, "__esModule", { value: true });
let num = 1234;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
}
console.log("Sum of Digits =", sum);
//# sourceMappingURL=07_SumOfDigits.js.map