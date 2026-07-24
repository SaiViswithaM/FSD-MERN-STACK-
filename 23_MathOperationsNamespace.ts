namespace MathOperations {

    export function add(a: number, b: number) {
        console.log("Addition =", a + b);
    }

    export function subtract(a: number, b: number) {
        console.log("Subtraction =", a - b);
    }

    export function multiply(a: number, b: number) {
        console.log("Multiplication =", a * b);
    }

    export function divide(a: number, b: number) {
        console.log("Division =", a / b);
    }
}

MathOperations.add(10, 5);
MathOperations.subtract(10, 5);
MathOperations.multiply(10, 5);
MathOperations.divide(10, 5);