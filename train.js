function train(arr) {

    let passengersInTrainArr = arr.shift().split(' ').map(Number);
    let maxCapacity = +arr.shift();

    for (let i = 0; i < arr.length; i++) {

        let commandNum = arr[i].split(' ');

        if (commandNum[0] === 'Add') {
            passengersInTrainArr.push(Number(commandNum[1]));
        } else {
            for (let j = 0; j < passengersInTrainArr.length; j++) {
                if (Number(commandNum[0]) + passengersInTrainArr[j] <= maxCapacity) {
                    passengersInTrainArr[j] += Number(commandNum[0]);
                    break;
                }
            }
        }
    }
    console.log(passengersInTrainArr.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])