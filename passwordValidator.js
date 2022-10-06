function passwordValidator(pass) {

    let digitsCounter = 0;
    let isFound = true;

    for (let index = 0; index < pass.length; index++) {
        let currentChar = pass[index];
        let charToNumber = Number(currentChar.charCodeAt(0));

        if (charToNumber >= 48 && charToNumber <= 57) {
            digitsCounter++;
        }
        if ((!(charToNumber >= 48 && charToNumber <= 57) &&
            !(charToNumber >= 65 && charToNumber <= 90) &&
            !(charToNumber >= 97 && charToNumber <= 122))) {
            isFound = false;
            console.log(`Password must consist only of letters and digits`);
            break;
        }
    }
    if (!(pass.length >= 6 && pass.length <= 10)) {
        isFound = false;
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (digitsCounter === pass.length){
        console.log(`Password must consist only of letters and digits`);
        isFound = false;
    }
    if (digitsCounter < 2) {
        isFound = false;
        return console.log(`Password must have at least 2 digits`);
    }
    if (isFound) {
        console.log(`Password is valid`);
    }
}
passwordValidator('123456asd')