let arr: number[] = [1, 2, 3, 2, 4, 5, 1];

console.log("Duplicate Elements:");

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log(arr[i]);
            break;
        }
    }
}