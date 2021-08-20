//Diseñe un algoritmo que determine si un número es o no es, par positivo.
const prompt = require("prompt");

prompt.start();
let numero = "numero";

prompt.get(numero, function(error, userInput){

if(userInput.numero % 2 == 0){
  console.log("El " + numero + " es un par positivo.");
} 
else{
  console.log("El " + numero + " no es par positivo.");
}
})
