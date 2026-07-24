"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let binary = "1010";
let decimal = 0;
let power = 0;
for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] == "1") {
        decimal = decimal + Math.pow(2, power);
    }
    power++;
}
console.log(decimal);
//# sourceMappingURL=09_BinaryToDecimal.js.map