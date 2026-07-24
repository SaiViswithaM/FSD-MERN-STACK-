"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
let emp = new Employee("Sai", 50000, "AI&DS");
emp.display();
//# sourceMappingURL=20_EmployeeAccessModifiers.js.map