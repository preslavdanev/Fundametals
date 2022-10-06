function maxNumber(arr) {

    let newArray = [];
    let arrayL = arr.length;

    for (let index = 0; index < arrayL; index++) {
        let number1 = arr[index];
        let isLargest = true;

        for (let j = index + 1; j < arrayL; j++) {
            let number2 = arr[j];
            if (number1 <= number2) {
                isLargest = false;
            }
        }
        if (isLargest) {
            newArray.push(number1);
        }
    }
    console.log(newArray.join(' '));

}
maxNumber([14, 24, 3, 19, 15, 17])