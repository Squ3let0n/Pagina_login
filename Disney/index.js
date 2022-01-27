const numbers = [15,25,20,10,13,14,28,79,33]

cosnt newNumbers =[]
for(let index=0; index < numbers.length; index ++){
    let currentNumber = numbers[index]
    if(currentNumber % 5 === 0) || currentNumber % 3 === 0){
        newNumbers.push(currentNumber)
    }
}


console.log(newNumbers)