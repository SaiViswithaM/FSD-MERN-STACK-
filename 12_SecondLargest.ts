let arr = [10, 40, 30, 50, 20];

let largest = arr[0]!;
let second = arr[0]!;

for (let i = 0; i < arr.length; i++) {

    if (arr[i]! > largest) {
        second = largest;
        largest = arr[i]!;
    }
    else if (arr[i]! > second && arr[i]! != largest) {
        second = arr[i]!;
    }

}

console.log("Second Largest =", second);