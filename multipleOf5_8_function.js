/**
 * check whether a given positive number is a multiple of 5 or a multiple of 8.
 * ***********************************************
 * author : Abanoob Meseha
 */
function multipleOf_5_8(){
    let inputNum = Number(prompt("Enter the positive number : "));

    if ((inputNum % 5 == 0) && (inputNum % 8 == 0) ){
        console.log(`${inputNum} is multiple of 5 and 8`)
    }
    else if ((inputNum % 5 == 0)){
        console.log(`${inputNum} is multiple of 5`)
    }
    else if ((inputNum % 8 == 0)){
        console.log(`${inputNum} is multiple of 8`)
    }
    else{
        console.log(`${inputNum} is not multiple of 5 or 8`)
    }

}
// function call 
multipleOf_5_8();