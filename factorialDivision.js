function factorialDivision(a,b){

    let sumB = 1;
    let sumA = 1;
    while(a > 0){
        sumA *= a;
        a--;
    }
    while(b > 0){
        sumB *= b;
        b--;
    }
    let result = sumA/sumB;
    console.log(result.toFixed(2));    
}
factorialDivision(6,2)