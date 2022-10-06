function arrayRotation(arr, n){

    while(n > 0){
        let cut = arr.shift();
        arr.push(cut);
        n--;
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)