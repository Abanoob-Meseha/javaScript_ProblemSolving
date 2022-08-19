/**
 * reverse input string function
 * ************************************
 * author : Abanoob Meseha
 */
function reverseString(){
    let inputString = prompt("Enter the word you want to reverse :");
    // change string to array then reverse array elements finally join them again in string
    finalString = inputString.split("").reverse().join("")
    console.log(`the reverse of ${inputString} is ${finalString}`)
}
// function call 
reverseString();