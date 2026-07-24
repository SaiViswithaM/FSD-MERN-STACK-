"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.id);
        console.log(this.name);
    }
}
let s = new Student(101, "Sai");
s.display();
//# sourceMappingURL=21_ReadonlyStudent.js.map