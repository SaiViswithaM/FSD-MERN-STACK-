let str = "apple";

for (let i = 0; i < str.length; i++) {

    let count = 1;

    for (let j = i + 1; j < str.length; j++) {

        if (str[i] == str[j]) {
            count++;
        }

    }

    let printed = false;

    for (let k = 0; k < i; k++) {
        if (str[i] == str[k]) {
            printed = true;
        }
    }

    if (!printed) {
        console.log(str[i] + " : " + count);
    }

}