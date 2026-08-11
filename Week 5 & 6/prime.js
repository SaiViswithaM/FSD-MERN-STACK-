"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 17;
let count = 0;
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log("Prime Number");
}
else {
    console.log("Not Prime Number");
}
//# sourceMappingURL=prime.js.map