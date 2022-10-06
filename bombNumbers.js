function bombNumbers (sequence, bomb){

    let bombNumber = bomb[0];
    let bombPower = bomb[1];
    let sum = 0;
    for (let el of sequence){
        if (el === bombNumber){
            let indexOfBomb = sequence.indexOf(bombNumber);
            let startNumber = indexOfBomb - bombPower;
            if(startNumber  < 0){
                startNumber = 0;
            }
            sequence.splice(startNumber, bombPower*2+1);
        }
    }
    for (let el of sequence){
        sum+=el;
    }
    console.log(sum);
}

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
)