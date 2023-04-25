document.querySelector("button").onclick = function(){
    let p1 = Math.floor(Math.random()*6 +1);
    let p2 = Math.floor(Math.random()*6 +1);

    document.getElementById("p1").innerHTML = "Player1: "+p1;
    document.getElementById("p2").innerHTML = "Player2: "+p2;
    
}