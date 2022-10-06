function nxNMatrix(num){

    let matrix = [];

    for (let i = 0; i < num; i++){
        let array = [];
        for(let j = 0; j < num; j++) {
            array.push(num);
        }
        matrix.push(array.join(' '));
    }
    console.log(matrix.join('\n'));
}
nxNMatrix(7)