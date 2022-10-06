function oddOccurrences(data){

    let result = new Map;

    let words = data.split(' ');
    for (let word of words){
        let newWord = word.toLowerCase();
        result.set(newWord,0);
    }
    for (let word of words){
        let newWord = word.toLowerCase();
        let oldValue = result.get(newWord);
        result.set(newWord,oldValue+1);
    }
    let finalResult = Array.from(result);
    let buff = '';
    for (let [key,value] of finalResult){
        if(value % 2 !== 0){
            buff += `${key} `;
        }
    }
    console.log(buff);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')