//1st and easy way:

// let usename= window.prompt("Enter you name : ");
// document.getElementById("p1").innerHTML = "My name is : "+usename;

//2nd way

document.getElementById("btn").onclick = function(){
    let usename = document.getElementById("Username").value;
    document.getElementById("nameDisplay").innerHTML = usename;
}
