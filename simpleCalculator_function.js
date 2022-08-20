/**
 * Create Simple Calculator (+ , - , * , /) 
 * ****************************************
 * author : Abanoob Meseha
 */
function simpleCalculator(){
    let inputNum1 = Number(prompt("Enter the first operand : ")),
        inputNum2 = Number(prompt("Enter the second operand :")),
        operator = prompt("Enter the operator '+ or - or * or /':");

    switch(operator){
        case '+':
            console.log(`${inputNum1 + inputNum2}`)
            break;
        case '-':
            console.log(`${inputNum1 - inputNum2}`)
            break;
        case '*':
            console.log(`${inputNum1 * inputNum2}`)
            break;
        case '/':
            console.log(`${inputNum1 / inputNum2}`)
            break;
    }
}
// function call
simpleCalculator();