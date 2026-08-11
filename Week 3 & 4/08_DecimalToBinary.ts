let num = 10;
let binary = "";

while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
}

console.log(binary);