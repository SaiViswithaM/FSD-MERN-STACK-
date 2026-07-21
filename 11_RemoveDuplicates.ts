let str = "programming";
let result = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch !== undefined && result.indexOf(ch) == -1) {
        result = result + ch;
    }
}

console.log(result);