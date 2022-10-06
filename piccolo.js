function piccolo(data){

    let parking = new Map;

    for(let line of data){
        let [command, regNum] = line.split(', ');
        switch(command){
            case 'IN':
                if(!parking.has(regNum)){
                    parking.set(regNum);
                }
                break;
            case 'OUT':
                if(parking.has(regNum)){
                    parking.delete(regNum);
                }
                break;
        }
    }
    let result = Array.from(parking.keys()).sort();
    console.log(result.join('\n'));
    // for(let [key,value] of result){
    //     console.log(key);
    // }
    if(parking.size < 1){
        console.log('Parking Lot is Empty');
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)