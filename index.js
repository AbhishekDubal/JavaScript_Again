
/*
let side1 =window.prompt("Enter side1= ");
side1 = Number(side1);

let side2 =window.prompt("Enter side2= ");
side2 = Number(side2);

let side3 = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));

console.log(side3+ " is side 3");
*/

//Another way to do, on web page:

document.querySelector("button").onclick = function(){
    let side1 = document.querySelector("#side1").value;
    side1 = Number(side1);
    let side2 = document.querySelector("#side2").value;
    side2 = Number(side2);

    let side3 = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));

    document.getElementById("side3Label").innerHTML = "Side 3: "+side3;
}