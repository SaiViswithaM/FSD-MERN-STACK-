"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "programming";
let result = "";
for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch !== undefined && result.indexOf(ch) == -1) {
        result = result + ch;
    }
}
console.log(result);
//# sourceMappingURL=11_RemoveDuplicates.js.map