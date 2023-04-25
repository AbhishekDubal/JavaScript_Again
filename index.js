
let rows  = window.prompt("ENter The ROWS: ")
let columns  = window.prompt("ENter The CULUMNS: ")
let symbol  = window.prompt("ENter The symbol: ")

for (let i = 1; i <= rows; i+=1) {
    for(let j = 1; j<= columns; j+=1 ) {
        // document.createElement("p");
        document.getElementById("p1").innerHTML += symbol;
    }
    document.getElementById("p1").innerHTML += "<br>";
}