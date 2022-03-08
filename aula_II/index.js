//Atribuiçao de valores
var nome = "Aline Antunes";
var notaDoPrimeiroBimestre = 9.4;
var notaDoSegundoBimestre = 7.3;
var notaDoTerceiroBimestre = 4.2;
var notaDoQuartoBimestre = 2.5;

//Concatenação de Strings
console.log("Sejam todos, Bem Vindos! Code Pen de: " + nome);

//Calculo das notas bimestrais
var notaFinal = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre

//Para definir as casas decimais depois do (.) 
var notaFixada = notaFinal.toFixed(1)

//variavel que vai conter o calculo da média
var media = notaFinal/4;

//Imprimindo soma das medias | Conta inteira da média em apenas uma linha
console.log(notaFinal)
console.log(media)
//alert(media)

//Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
if (media >= 7){
  console.log("APROVADO")
}else{
  console.log("REPROVADO")
}

//Conversor de temperaturas entre farenheit e celcius
function main()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CtoF").checked==true)
  resp.innerHTML = ctof(num);

 if(document.getElementById("FtoC").checked==true)
  resp.innerHTML = ftoc(num);
}

function ctof(x)
{
 return (1.8*x + 32);
}

function ftoc(x)
{
  
 return ( (x-32)*5/9 );
}



