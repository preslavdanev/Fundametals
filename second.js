function second(input){

    let patern = /[|](?<name>[A-Z]{4,})[|][:]{1}[#](?<title>[A-Za-z]+[\s][A-Za-z]+)[#]/g;
    let inputNumber = input.shift();
    let text = input.join(' ');
    let valid;
    let isValid = false
    
    while((valid = patern.exec(text))!== null){
        let validName = valid.groups['name'];
        let validTitle = valid.groups['title'];
        console.log(`${validName}, The ${validTitle}`);
        console.log(`>> Strength: ${validName.length}`);
        console.log(`>> Armor: ${validTitle.length}`);
        isValid = true       
    }
    if((valid = patern.exec(text))!== null){
        console.log("Access denied!");
    }
}
second(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])