const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (input) {
    if (input % 2 == 0) {
        console.log(`${input} is Even`);
    }
    else {
        console.log(`${input} is Odd`);
    }
    rl.close();
});
