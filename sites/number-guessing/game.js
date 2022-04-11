
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * ((max + 1)- min) + min); //The maximum is exclusive and the minimum is inclusive
}
var inicial = document.getElementById("inicial").value;
var final = document.getElementById("final").value;
var resposta = document.getElementById("resposta").value;
var tent = document.getElementById("tentativas");
var divposta = document.getElementById("respostadiv");
var randomNumber1;
var tentativas = 0;
function start(){
    inicial = document.getElementById("inicial").value;
    final = document.getElementById("final").value;
    resposta = document.getElementById("resposta").value;
    divposta = document.getElementById("respostadiv");
    randomNumber1 = randomNumber(inicial, final);
    tentativas = 0;
    tent.innerHTML = "Tries: 0";
    divposta.innerHTML = "Tips:";
    document.getElementById("answer").addEventListener('click', jogo);
}
function jogo() {
    console.log(inicial, final, "Resposta: ", randomNumber1);
    console.log("A");
    tentativas++;
    tent.innerHTML = "Tentativas: " + tentativas;
    resposta = document.getElementById("resposta").value;
    if (resposta == randomNumber1) {
        document.getElementById("answer").removeEventListener('click', jogo);
        document.querySelector("#start1").value = "Restart"
        divposta.innerHTML = "<p>You win!</p>";
    } else if (resposta > randomNumber1) {
        divposta.innerHTML = "<p>Your guessing is high!</p>";
    } else if (resposta < randomNumber1) {
        divposta.innerHTML = "<p>Your guessing is low!</p>";
    }
}