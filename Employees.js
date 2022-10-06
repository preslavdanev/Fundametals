function Employees(arr){

    let myObj = {};

    for(let el of arr){
        myObj.name = el;
        myObj.number = el.length;
        console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.number}`);
    }
}

Employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])