/**
 * check from two given integers, whether one is positive and another one is negative
 * **********************************************
 * author : Abanoob Meseha
 */
function positive_negative(){
    let inputNum1 = Number(prompt("Enter the first integer number :")),
        inputNum2 = Number(prompt("Enter the second integer number :")),
        response1 = (inputNum1 > 0) ? "is positive integer" : "is not positive integer",
        response2 = (inputNum2 < 0) ? "is negative integer" : "is not negative integer";
    
    console.log(`${inputNum1} ${response1} and ${inputNum2} ${response2}`);
}
//function call 
positive_negative();