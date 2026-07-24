"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let numberBox = new Box(100);
let stringBox = new Box("Hello TypeScript");
let booleanBox = new Box(true);
numberBox.display();
stringBox.display();
booleanBox.display();
//# sourceMappingURL=24_GenericBox.js.map