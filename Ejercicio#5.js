/* Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, ofreciendo un descuento del 15% por la compra de más de 3 docenas y 10% en caso contrario. Además por la compra de más de 3 docenas se obsequia una unidad del producto por cada docena en exceso sobre  3. 
Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, el monto a pagar y el número de unidades de obsequio por la compra de cierta cantidad de docenas del producto. 

*/

var montodecompra, montodedescuento, montoapagar, precio
let docenas, obsequio

docenas = 2
precio = 150

montodecompra = docenas*precio 

if (docenas > 3) {
  montodedescuento = 0.15*montodecompra 
  obsequio = docenas -3
}
else {
  montodedescuento =0.10* montodecompra
    obsequio= 0
}
//Determina el monto a pagar
montoapagar = montodecompra - montodedescuento

//Resultado
console.log("El monto de compra es de "+ montodecompra + " pesos.")
console.log("El monto de descuento es de " + Math.ceil(montodedescuento) + " pesos.")
console.log("El monto a pagar es de " + Math.ceil(montoapagar) + " pesos.")
console.log("Unidades de obsequio " + obsequio + ".")

