function printandSum(num1, num2) {

    let sum = 0;
    let print = '';

    for (let index = num1; index <= num2; index++) {
        sum += index;
        if (index === num2) {
            print += `${index}`;
        } else {
            print += `${index}` + " ";
        }
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}
printandSum(5, 10)