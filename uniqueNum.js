var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const freq = []
numbers.forEach(num =>{
    freq[num] = (freq[num] || 0)+1;
})

const uniqueNum = numbers.filter(num => freq[num]===1)
console.log(uniqueNum);