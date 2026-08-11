let arr = [1, 2, 3, 4, 5];
let n = 2;

for (let i = 0; i < n; i++) {
    let first = arr.shift();
    arr.push(first!);
}

console.log(arr);