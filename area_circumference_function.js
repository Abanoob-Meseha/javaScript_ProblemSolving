/**
 * take the raduis from user and calculate the area and circumference
 * ********************************************************
 * author : Abanoob Meseha
 */
function area_circuimference_calc(){
    let inputReduis = Number(prompt("Enter the circle raduis in m : ")),
        area = Math.PI * Math.pow(inputReduis,2),
        circumference = 2 * Math.PI * inputReduis;
        
    console.log(`the Area is ${area} m square and the circumference is ${circumference} m`)
}
// function call 
area_circuimference_calc();