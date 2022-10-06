function equalSums(input) {

    let foundIndex = 'no';

    for (let i = 0; i < input.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let l = 0; l < i; l++) {
            leftSum += input[l];
        }
        for (let r = i + 1; r < input.length; r++) {
            rightSum += input[r];
        }
        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);

}
equalSums([1, 2, 3, 3])