function first(input) {

    let str = input.shift();

    for (let lines of input) {
        let line = lines.split(' ');
        let command = line[0];
        let move = line[1];
        let newCh = line[2]
        switch (command) {
            case 'End':
                break;
            case 'Translate':
                if (str.includes(move)) {
                    str = str.replace(move, newCh);
                    console.log(str);
                }
                break;
            case 'Includes':
                if (str.includes(move)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case 'Start':
                if (str.startsWith(move)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case 'Lowercase':
                str = str.toLowerCase();
                console.log(str);
                break;
            case 'FindIndex':
                let indexOfMove = str.lastIndexOf(move);
                console.log(indexOfMove);
                break;
            case 'Remove':
                let startIndex = move + newCh
                let sliced = str.slice(startIndex,);
                console.log(sliced);
                break;
        }
    }
}
first(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])