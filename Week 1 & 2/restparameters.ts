function add(...numbers: number[]): number {
    let sum = 0;

    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

console.log("Sum =", add(10, 20, 30, 40));