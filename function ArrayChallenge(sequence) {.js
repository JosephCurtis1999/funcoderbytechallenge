function ArrayChallenge(arr) {
    // creating new array
    const lengths = new Array(arr.length).fill(1);
    // nested loop in order to compare numbers to decide if a number is greater or less than previous number
    for (let i=1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            // here we're creating sub problems, adding 1 each time the greater than requirement is passed
            const isIncreasing = arr[j] < arr[i];
            const arrLength = lengths[j] + 1;
            const islonger = arrLength > lengths[i];
            // the && operator means these both have to be satisfied
            // we're effectively saving the length of a sequence each time the criteria are satisfied
            // later on we render the longest sequence length found after iterating through the arrays
            if(isIncreasing && islonger) {
                lengths[i] = arrLength
            }
        }

    }
    // we're returning the maximum length using the .max and the spread operator, so out of the sequence lengths collected we're choosing to return the highest one 
    // if we wanted to return a random sequence length we'd use .random
    return Math.max(...lengths)
}



// testing within the console to see if it works, output should be 7
console.log(ArrayChallenge([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]))

// is 22 greater than 10? Yes, 1+1 = 2, is 9 greater than 22? No, is 33 greater than 9? Yes, 2+1=3