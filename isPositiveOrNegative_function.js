/**
 * check whether a given number is positive or negative. 
 * ******************************************
 * author : Abanoob Meseha
 */
function isPositiveOrNegative(){
    let inputNum = Number(prompt("Enter the number you want to check : "))
    if(inputNum > 0){
        console.log(`${inputNum} is a positive number`)
    }
    else if(inputNum < 0){
        console.log(`${inputNum} is a negative number`)
    }
    else{
        console.log(`${inputNum} is = 0 not a positive or negative`)
    }
}
// function call
isPositiveOrNegative();