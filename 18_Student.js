"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    marks;
    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}
let s = new Student(101, "Sai", 95);
s.display();
//# sourceMappingURL=18_Student.js.map