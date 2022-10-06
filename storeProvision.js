function storeProvision(storage, newcomes){

    let myObj = {};

    for(let index = 0; index < storage.length; index+=2){
        let product = storage[index];
        myObj[product] = Number(storage[index+1]);
    }
    for(let i = 0; i < newcomes.length; i+=2){
        let product = newcomes[i];
        if(!myObj.hasOwnProperty(product)){
            myObj[product] = 0;
        }
        myObj[product] += Number(newcomes[i+1]);
    }
    for(let el in myObj){
        console.log(`${el} -> ${myObj[el]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )