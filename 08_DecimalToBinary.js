"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10;
let binary = "";
while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
}
console.log(binary);
//# sourceMappingURL=08_DecimalToBinary.js.map