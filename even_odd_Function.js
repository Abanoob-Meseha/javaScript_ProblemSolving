/**
 * check if the input number is even or odd
 * *******************************************
 * author: Abanoob Meseha
 */

function even_odd_check(){
    let inputNum = Number(prompt("Enter the number you want to check :"))
    if(inputNum % 2 == 0){
        console.log(`${inputNum} is an even number.`)
    }
    else{
        console.log(`${inputNum} is an odd number.`)
    }
}
// function call
even_odd_check();