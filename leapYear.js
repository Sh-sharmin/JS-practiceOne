const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isLeapYear=(year)=>{
    if((year %4==0) && (year%100!==0)||(year%400==0)){
        return true;
    }
    else{
        return false;
    }
}

rl.question("Enter a year: ", function(input) {
    if(isLeapYear(input)){
        console.log(`${input} is leap year`);
    }
    else{
        console.log(`${input} is not a leap year`);
    }
    rl.close();
});
