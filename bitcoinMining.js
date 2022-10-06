function bitcoinMining(input){

    let index = 0;
    let command = input[index];
    index++
    let total = 0;

    while (command !== Number) {
        money = Number(command)
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += money;
        command = input[index];
        index++
    }
}
bitcoinMining([100, 200, 300]);