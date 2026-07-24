"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        console.log("Addition =", a + b);
    }
    MathOperations.add = add;
    function subtract(a, b) {
        console.log("Subtraction =", a - b);
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        console.log("Multiplication =", a * b);
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        console.log("Division =", a / b);
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
MathOperations.add(10, 5);
MathOperations.subtract(10, 5);
MathOperations.multiply(10, 5);
MathOperations.divide(10, 5);
//# sourceMappingURL=23_MathOperationsNamespace.js.map