const prompt = require("prompt");

//Pide la edad y si es mayor de 18 años indica que ya puede conducir.

prompt.start()
let Edad = "Edad";
prompt.get(Edad, function(error,userInput) {
  if (userInput.Edad >= 18 ) {
    console.log ("Ya tiene edad para conducir")
  }
  else {
    console.log("No tiene edad suficiente para conducir")}
  
})