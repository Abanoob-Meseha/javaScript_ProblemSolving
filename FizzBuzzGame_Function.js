
/**fizz buzz game
 * prints :
 * fizz when number is divisable by 3
 * buzz when number is divisable by 5
 * fizzbuzz when number is divisable by 3 and also 5
 * **********************************************************
 * author:Abanoob Meseha 
 */

function fizz_buzz(){
    // the final number of the game
    let endNumber=Number(prompt("Enter the final number of the game :"))
    for(let i=1;i<=endNumber;i++){
        if((i%3==0) && (i%5==0)){
            console.log("FizzBuzz")
        }
        else if(i%3==0){
            console.log("Fizz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}
//function call
fizz_buzz();

