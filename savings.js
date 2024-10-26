const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter elements separated by space: ", function (input1) {
    const array = input1.split(" ");
    const numberArray = array.map(Number);

    rl.question("Enter a number: ", function (input2) {
        if (numberArray.some(isNaN) || isNaN(input2)) {
            console.log("Invalid input");
            rl.close();
        }
        else {
            let sum = 0;
            for (let i = 0; i < numberArray.length; i++) {
                if (numberArray[i] >= 3000) {
                    sum += (numberArray[i] - numberArray[i] * 0.2);
                }
                else {
                    sum += numberArray[i];
                }
            }
            sum -= input2;
            if (sum >= 0) {
                console.log(sum);
            }
            else {
                console.log("earn more");
            }
            rl.close();
        }
    });
});
