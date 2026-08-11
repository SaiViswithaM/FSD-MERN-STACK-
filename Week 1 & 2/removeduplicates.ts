let arr: number[] = [1, 2, 2, 3, 4, 4, 5];

let result: number[] = [];

for (let num of arr) {
    if (!result.includes(num)) {
        result.push(num);
    }
}

console.log("Array after removing duplicates:", result);