function sortNumbers(){
    let num1 = 0;
    let num2 = 1;
    let num3 = 2
    let largerNum = 0;
    let secondNum = 0;
    let thirdNum = 0;
    
    if(num1 > num2 && num1 > num3){
        largerNum = num1;
    }else if(num2 > num1 && num2 > num3){
        largerNum = num2;
    }else{
        largerNum = num3
    }
    if(num1 < num2 && num1 < num3){
        thirdNum = num1;
    }else if(num2 < num1 && num2 < num3){
        thirdNum = num2;
    }else{
        thirdNum = num3
    }
    if((num1 < num2 && num1 > num3) || (num1 > num2 && num1 < num3)){
        secondNum = num1;
    }else if((num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3)){
        secondNum = num2;
    }else{
        secondNum = num3
    }
    console.log(largerNum);
    console.log(secondNum);
    console.log(thirdNum);
}
sortNumbers();