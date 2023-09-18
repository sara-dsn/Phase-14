 document.querySelector("#button1").onclick = function()
 {
    console.log("queryselector");
    verificateur();
 };

function verificateur()
{
 
 if(nombre<x)
 {
    document.getElementById("label1").innerHTML="Trop petit!";
    console.log("Trop petit!");
 }
 else if (nombre>x)
 {
    document.getElementById("label1").innerHTML="Trop Grand!";
    console.log("Trop Grand!");
 }
 else if (nombre==x)
 {
    document.getElementById("label1").innerHTML="Bien joué! Vous avez trouvé! ";
    console.log("Bien joué! Vous avez trouvé! ");
 }
 else{
    document.getElementById("label1").innerHTML="Attention le chiffre doit être un entier compris entre 0 et 100 !";
    console.log("Attention le chiffre doit être un entier compris entre 0 et 100 !");
}
};

var nombre=document.getElementById("textBox1").value;

var x= Math.floor((Math.random()*100)+1);

console.log(x);