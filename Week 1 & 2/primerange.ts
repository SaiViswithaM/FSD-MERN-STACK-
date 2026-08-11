let start: number = 10;
let end: number = 30;

console.log("Prime numbers:");

for (let num = start; num <= end; num++) {
    let isPrime: boolean = true;

    if (num < 2) {
        isPrime = false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}