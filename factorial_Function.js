/**factorial function for number n is =
 * n*(n-1)*(n-2)*(n-3).......*1
 * 
 * **************************************
 * author:Abanoob Meseha
 */
function factorial(){
    let factNum=Number(prompt("Enter the number:")),
        result=1;
    while(factNum!=1){
        result *=factNum--;
    }
    console.log(`the result is ${result}`)
}
//function call
factorial()