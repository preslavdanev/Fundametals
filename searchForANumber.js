function searchForANumber(arr1, arr2){

    let cuttedNumbers = arr2[0];
    let deletedNumber = arr2[1];
    let searchedNumber = arr2[2];

    let changedArr = arr1.splice(0,cuttedNumbers);
    changedArr.splice(0, deletedNumber);
    let counter = 0;
    for(let el of changedArr){
        if(el === searchedNumber){
            counter++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])