function makeDictionary(input) {
    let sorted = []
    let heroes = []
    for (let line of input) {
        let obj = JSON.parse(line);
        sorted.push(Object.entries(obj));
    }
    for (let line of sorted) {
        let name = line[0][0]
        let info = line[0][1]
        let currentHero = {
            name: name,
            info: info,
        }
        heroes.push(currentHero);
    }
    let sortedByLevel = heroes.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    for (const hero of sortedByLevel) {
        console.log(`Term: ${hero.name} => Definition: ${hero.info}`);

    }
    // let sortEntries = arr.sort(([keyA,valueA],[keyB,valueB])=>{
    //     return keyA.localeCompare(keyB)
    // })
    // console.log(sortEntries);
    // let unsortedKey = Object.keys(obj);
    // let sortKey = unsortedKey.sort((a,b)=>{
    //     a.localeCompare(b)
    // });
    // for(let key of sortKey){
    //     console.log(`Term: ${key} => Definition: ${obj[key]}.`)
    // }    
}
makeDictionary([
    '{"Coffee":"4."}',
    '{"Bus":"2."}',
    '{"Boiler":"3."}',
    '{"Tape":"1."}',
    '{"Microphone":"5."}'
])