/**mario game stars shape :
 *
 * * 
 * * *
 * * * *
 * * * * *
 
 ****************************************
 author:Abanoob Meseha

 */
function marioGameStars(){
    let nRows=Number(prompt("Enter the rows number of stars shape"))
    for(let i=1;i<=nRows;i++){
        for(let j=1;j<=i;j++){
            console.log("* ")
        }
        console.log("\n")
    }
}
//function call
marioGameStars();