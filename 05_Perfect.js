"use strict";
// Program to Check Perfect Number
Object.defineProperty(exports, "__esModule", { value: true });
let num = 28;
let sum = 0;
for (let i = 1; i < num; i++) {
    if (num % i == 0) {
        sum = sum + i;
    }
}
if (sum == num) {
    console.log(num + " is a Perfect Number");
}
else {
    console.log(num + " is Not a Perfect Number");
}
//# sourceMappingURL=05_Perfect.js.map