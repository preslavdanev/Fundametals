function third(data){

    let likeObj = {};
    let countUnLiked = 0;
    for(let line of data){
        let [command,name,product] = line.split('-');
        switch(command){
            case 'Like':
                if(!likeObj[name]){
                    likeObj[name] = product;
                }else{
                    let oldValue = likeObj[name];
                    likeObj[name] = [oldValue,product];
                }
                break;
            case 'Dislike':
                
                if(!(likeObj.hasOwnProperty(name))){
                    console.log(`${name} is not at the party.`);
                }else{
                    let [firstPerson,secondPerson] = Object.entries(likeObj);
                    let names = firstPerson[0]
                    let meals = firstPerson[1];
                    if(meals.includes(product)){
                        countUnLiked+=1;
                        console.log(`${names} doesn't like the ${product}.`);
                        let toArr = Object.values(likeObj);
                        if(toArr[0].includes(product)){
                            delete likeObj[name][product];
                        }
                    }else{
                        console.log(`${names} doesn't have the ${product} in his/her collection.`);
                    }
                }
                break;
            case 'Stop':
                break;
        }
    }
    toArr = Object.keys(likeObj);
    for(let key of toArr){
        console.log(`${key}: ${likeObj[key]}`);
    }
    console.log(`Unliked meals: ${countUnLiked}`);
}
third(["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"])




