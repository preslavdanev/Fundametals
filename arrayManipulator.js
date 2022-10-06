function arrayManipulator(nums, commands) {

    for (let i = 0; i < commands.length; i++) {
        let currentValues = commands[i].split(' ');
        let currentCommand = currentValues.shift();
        currentValues = currentValues.map(Number);
        let sumPairs = 0;
        let pairsOfSumNum = [];

        switch (currentCommand) {
            case 'add':
                let indexToAdd = currentValues[0];
                let elementToAdd = currentValues[1];
                nums.splice(indexToAdd, 0, elementToAdd);
                break;
            case 'addMany':
                let indexToAddMany = currentValues.shift();
                nums.splice(indexToAddMany, 0, currentValues.join(', '));
                break;
            case 'contains':
                console.log(nums.indexOf(currentValues[0]));
                break;
            case 'remove':
                let indexToRemove = currentValues[0];
                nums.splice(indexToRemove, 1);
                break;
            case 'shift':
                for (let i = 0; i < currentValues[0]; i++) {
                    nums.push(nums.shift());
                }
                break;
            case 'sumPairs':
                if (nums.length % 2 === 0) {
                }else{
                    nums.push(0);
                }
                for (let i = 0; i < nums.length; i += 2) {
                    sumPairs = nums[i] + nums[i + 1];
                    pairsOfSumNum.push(sumPairs);
                }
                nums = pairsOfSumNum;
                break;
            case 'print':
                console.log(`[ ${nums.join(', ')} ]`);
                break;
        }
    }
}

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])