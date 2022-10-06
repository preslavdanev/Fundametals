function hardWord(input){

    let text = input[0];
    let missingWords = input[1];
    let underscores = [];
 
    for (const el of missingWords) {
        let underscore = '_';
        underscore = underscore.repeat(el.length);
        underscores.push(underscore);
    }
    missingWords.sort((a, b) => b.length - a.length);
    underscores.sort((a, b) => b.length - a.length);
 
    for (let i = 0; i < underscores.length; i++) {
        text = text.replace(underscores[i], missingWords[i])
    }
    console.log(text);
}
hardWord