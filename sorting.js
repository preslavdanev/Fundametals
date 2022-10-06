function sorting(arr){

    finalArray = []
    let sortedArray = arr.sort((a,b)=>{
        return a - b;
    });
    let anotherArray = arr.sort((a,b)=>{
        return b - a;
    })
    for(let el = 0; el < (sortedArray.length)/2; el++){
        finalArray.push(sortedArray[el]);
        
    }
    
    console.log(finalArray);

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])