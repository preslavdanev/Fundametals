function perfectNumber(number) {
    isFound = false;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            let sum = i;
            isFound = true;
        } else {
            isFound = false
        }
    }
    if (isFound) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

}
perfectNumber(6)