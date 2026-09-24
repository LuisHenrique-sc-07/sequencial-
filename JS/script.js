//Variáveis
let numero1, numero2, resultado1;



function somar(){
//entrada
numero1= parseInt( document.getElementById("numero1").value);
numero2= parseInt(document.getElementById("numero2").value);

   //processamento
    resultado1= numero1+numero2;
    //Saída
    document.getElementById("resultado").innerHTML= "Resultado" + resultado1;
}





//Variaveis
let Celsius, F;

function converter(){
    //entrada
    Celsius = parseFloat (document.getElementById("celsius").value);

    //proccessamento
    F= (Celsius * 9/5 )+32;

    //Saida
    document.getElementById("resultado2").innerHTML ="F =" + F;

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

let altura1, raio1, comprimento;

 
function volume1(){
    altura1 = parseInt(document.getElementById("altura1").value);
    raio1 = parseInt(document.getElementById("raio1").value);
    comprimento = parseInt(document.getElementById("comprimento").value);
   
    resultado4 = altura1 * raio1 * comprimento;
 
    document.getElementById("resultado4").innerHTML =
    "Valor do volume: " + resultado4 }