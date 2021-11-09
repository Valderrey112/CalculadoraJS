
let operando_pulsado = false;
let calcularOperacion = false;
let coma_puesta = false;
let num1 = "";
let num2 = "";

function comprobarSalidaCero(){
  if(document.getElementById("salida").value == "0"){document.getElementById("salida").value = "";}
  if(operando_pulsado){
    calcularOperacion = true;
    operando_pulsado = false;
  }
}

function limpiarSalida(){
  document.getElementById("salida").value = "";
  document.getElementById("salida").value = "0";
}

function anhadirNumero(numero){
  comprobarSalidaCero();
  document.getElementById("salida").value += numero;

}

function cambiarOperando(operando){
  var arrayDeCadenas = document.getElementById("salida").value.split(" ");
  num1 = arrayDeCadenas[0];
  document.getElementById("salida").value = num1 + " " + operando + " ";
}

function pulsarOperando(operando){
  if(!operando_pulsado & calcularOperacion){
    calcular(true);
    document.getElementById("salida").value += " " + operando + " ";
    operando_pulsado = true;
    coma_puesta = false;
    calcularOperacion = false;
  }else if(!operando_pulsado){
    document.getElementById("salida").value += " " + operando + " ";
    coma_puesta = false;
    operando_pulsado = true;
  }else{
    cambiarOperando(operando);
  }
}

function anhadirComa(){
  let ultimo_caracter = document.getElementById("salida").value.substr(document.getElementById("salida").value.length-1, document.getElementById("salida").value.length);
  if(!coma_puesta & ultimo_caracter != " "){
    document.getElementById("salida").value += ".";
    coma_puesta = true;
  }
}

//Si el parametro es true significa que habremos calculado la operación haciendo click en un operando.
//Si le pasamos false significara que queremos calcular la operacion pero dando en el boton de iguala.
function calcular(conOperando){

  var arrayDeCadenas = document.getElementById("salida").value.split(" ");

  num1 = arrayDeCadenas[0];
  operando = arrayDeCadenas[1];
  num2 = arrayDeCadenas[2];

  if(!conOperando){
    operando_pulsado = false;
    coma_puesta = false;
  }

  switch (operando) {
    case '+':
      document.getElementById("salida").value = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      document.getElementById("salida").value = parseFloat(num1) - parseFloat(num2);
      break;
    case 'x':
      document.getElementById("salida").value = parseFloat(num1) * parseFloat(num2);
      break;
    case '·/·':
      document.getElementById("salida").value = parseFloat(num1) / parseFloat(num2);
      break;
  }
}
