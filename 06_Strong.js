"use strict";
// Program to Check Strong Number
Object.defineProperty(exports, "__esModule", { value: true });
let num = 145;
let temp = num;
let sum = 0;
while (temp > 0) {
    let digit = temp % 10;
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
        fact = fact * i;
    }
    sum = sum + fact;
    temp = Math.floor(temp / 10);
}
if (sum == num) {
    console.log(num + " is a Strong Number");
}
else {
    console.log(num + " is Not a Strong Number");
}
//# sourceMappingURL=06_Strong.js.map