//VARIAVEIS

let numero1, numero2, resultado1;

//entrada

function somar() {
    numero1 = parseInt(document.getElementById("numero1").value);
    numero2 = parseInt(document.getElementById("numero2").value);
    resultado1 = numero1 + numero2;
    //saida
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado1;
}

//variaveis
let celsius, F;

function converter() {
    celsius = parseFloat(document.getElementById("celsius").value);

    F = (celsius * 9 / 5) + 32

    document.getElementById("resultado2").innerHTML = "F=  " + F;
}

let altura, raio;
const pi =3.14159;

function volume(){
    altura = parseInt(document.getElementById("altura").value);
    raio = parseInt(document.getElementById("raio").value);
    
    resultado3 = pi * raio**2 *altura;

    document.getElementById("resultado3").innerHTML =
    "Valor do volume: " + resultado3;
}

let altura1, comprimento, largura;

function volumecaixa(){
    altura1 = parseInt(document.getElementById("altura1").value);
    comprimento = parseInt(document.getElementById("comprimento").value);
    largura = parseInt(document.getElementById("largura").value);

    resultado4 = comprimento*altura1*largura;

    document.getElementById("resultado4").innerHTML="Valor do volume: " + resultado4;
}