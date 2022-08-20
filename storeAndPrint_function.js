/**
 * store elements in an array and print it. 
 * ****************************************
 * author : Abanoob Meseha
 */
function storeAndPrint(){
    let array = [],
        input = '';    
    while(input != '-1'){
        input = prompt("Enter the element you want to store....to sumbit enter '-1'")
        array.push(input)
    }
    for(let index in array){
        console.log(`Element-${index} : ${array[index]}`)
    }
}
// function call
storeAndPrint();