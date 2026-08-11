"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fixed {
    name;
    amount;
    rate;
    years;
    constructor(name, amount, rate, years) {
        this.name = name;
        this.amount = amount;
        this.rate = rate ?? 6.5;
        this.years = years ?? 1;
    }
    calculate() {
        const interest = (this.amount * this.rate * this.years) / 100;
        return this.amount + interest;
    }
    method() {
        console.log(`receipt`);
        console.log(`name:${this.name}`);
        console.log(`amount:${this.amount}`);
        console.log(`rate:${this.rate}`);
        console.log(`years:${this.years}`);
        console.log(`update:${this.calculate()}`);
    }
}
const sFD = new Fixed("Sai", 80000);
const scFD = new Fixed("thanvi", 100000, 8.3, 2);
sFD.method();
scFD.method();
scFD.amount = 15000;
console.log(`update:${scFD.calculate()}`);
//# sourceMappingURL=class_objects.js.map