/**
 * function take 2 inputs from user and checks if one or sum of two = 50
 * **********************************************
 * author : Abanoob Meseha 
 */
function isEqual50(){
    let inputNum1 = Number(prompt("Enter the first number :")),
        inputNum2 = Number(prompt("Enter the second number :")),
        response = (inputNum1 + inputNum2 ==50) || inputNum1 ==50 ||inputNum2 ==50 ?
                    true : false;
    
    return response ;
}
// function call 
isEqual50();