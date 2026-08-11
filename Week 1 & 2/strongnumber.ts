let num: number = 145;
let original: number = num;
let sum: number = 0;

while (num > 0) {
    let digit: number = num % 10;
    let fact: number = 1;

    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    sum += fact;
    num = Math.floor(num / 10);
}

if (sum === original) {
    console.log(original + " is a Strong Number");
} else {
    console.log(original + " is not a Strong Number");
}