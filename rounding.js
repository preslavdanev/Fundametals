function rounding(num1, num2) {

    if (num2 > 15) {
        num2 = 15;
    }
    roundNum = num1.toFixed(num2);
    console.log(parseFloat(roundNum));
}
rounding(10.5, 3)