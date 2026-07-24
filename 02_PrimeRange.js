"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let start = 1;
let end = 50;
console.log("Prime Numbers:");
for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime)
        console.log(num);
}
//# sourceMappingURL=02_PrimeRange.js.map