function towns(input){

    let myObj = {};

    for (let el of input){
        let arr = el.split(" | ");
        let town = arr[0];
        let latitude = arr[1];
        let longitude = arr[2];
        myObj.name = town;
        myObj.latitude = Number(latitude);
        myObj.longitude = Number(longitude);
        console.log(`{ town: '${myObj.name}', latitude: '${myObj.latitude.toFixed(2)}', longitude: '${myObj.longitude.toFixed(2)}' }`);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)