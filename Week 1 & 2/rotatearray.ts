let arr: number[] = [1, 2, 3, 4, 5];
let k: number = 2;

k = k % arr.length;

let rotated: number[] = arr.slice(-k).concat(arr.slice(0, -k));

console.log("Rotated Array:", rotated);