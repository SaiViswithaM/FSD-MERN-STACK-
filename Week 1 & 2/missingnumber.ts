let arr: number[] = [1, 2, 3, 5];
let n: number = 5;

let total: number = (n * (n + 1)) / 2;
let sum: number = 0;

for (let num of arr) {
    sum += num;
}

console.log("Missing Number =", total - sum);