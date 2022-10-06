function triangleOfNumbers(number) {

    for (let index1 = 1; index1 <= number; index1++) {
        let print = '';
        for (let index2 = 1; index2 <= index1; index2++) {
            print += `${index1} `;
        }
        console.log(print);
    }
}
triangleOfNumbers(3)