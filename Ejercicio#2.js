const prompt= require("prompt")

/* 
Pide una nota (numero). Muestre la calificación segun su nota
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/
prompt.start();
let nota= "nota";
prompt.get(nota, function(error,userInput) {
   
  let nota= +userInput.nota

  if (nota >=9 && nota <= 10 ) {
    console.log("La calificación es sobresaliente.")
  }

  else if (nota >= 7 && nota < 9) {
    console.log("La calificación es notable.")
  }
  
  else if (nota >= 6 && nota < 7) {
    console.log("La calificación es bien.")
  }
  
  else if (nota >= 5 && nota < 6){   
        console.log("La calificación es suficiente.")
      }
  
  else if (nota >= 3 && nota < 5) {
     console.log("La calificación es insuficiente.")
    }
  
  else if (nota >= 0 && nota < 3) {
    console.log("La calificación es muy deficiente.")
  }
  
  else {
    console.log("No se encontro ninguna calificación.")
  }
  
}) 
  
