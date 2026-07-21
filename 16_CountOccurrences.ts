let arr = [1, 2, 2, 3, 1, 4];

for (let i = 0; i < arr.length; i++) {

    let count = 1;

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }

    let found = false;

    for (let k = 0; k < i; k++) {
        if (arr[i] == arr[k]) {
            found = true;
        }
    }

    if (!found) {
        console.log(arr[i] + " = " + count);
    }
}