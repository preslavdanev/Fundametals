function magicSum(array, number){

    let validPair = '';

    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] + array[j] === number){
                validPair += `${array[i]} ${array[j]}\n`;
            }
        }
    }
    console.log(validPair);
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27)