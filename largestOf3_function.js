/**
 * find the largest of three given integers.
 * **************************************
 * Author : Abanoob Meseha
 */
function largestOf_3(){
    let inputNum1 = Number(prompt("Enter the first number :")),
        inputNum2 = Number(prompt("Enter the second number :")),
        inputNum3 = Number(prompt("Enter the third number :")),
        arr = [] ;
    arr.push(inputNum1,inputNum2,inputNum3);
    console.log(`the largest number is ${Math.max(...arr)}`)

}
// function call
largestOf_3();