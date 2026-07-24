"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 17;
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
    console.log(num + " is a Prime Number");
else
    console.log(num + " is not a Prime Number");
//# sourceMappingURL=01_CheckPrime.js.map