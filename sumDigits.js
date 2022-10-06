function sumDigits(num){

    let naString = num.toString();
    let sumOfDigits = 0;

    for (let index = 0; index < naString.length; index++) {
        let currentDigit = Number(naString[index]);
        sumOfDigits += currentDigit;
    }
    console.log(sumOfDigits);
}
sumDigits(245678);