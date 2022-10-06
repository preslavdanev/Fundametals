function loadingBar(input){

    let completed = '%'.repeat(input / 10);
    let incomplete = '.'.repeat((100 - input)/10);
    if(incomplete.length === 0){
        console.log(`100% Complete!`);
    }else{
        console.log(`${input}% [${completed}${incomplete}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(100);