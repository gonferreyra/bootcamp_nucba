// Ejercicios con cadenas de textos:
// Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.

// let texto = prompt("Ingresar texto");
// if (texto.includes("a")) {
//     alert("Contiene la letra 'a'");    
// } else {
//     alert("No contiene la letra 'a'");
// }

// Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.

// let texto= prompt("Ingresar texto");
// alert(texto.toUpperCase() + " " + texto.toLowerCase());

// Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.

// let palabra = prompt("Ingresar palabra");
// alert("La palabra comienza con la letra " + palabra.charAt(0));

// Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
// let palabra = prompt("Ingresar palabra");
// alert("La palabra tiene " + palabra.length + " caracteres");

// Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.

// let numero= prompt("Ingresar un numero");
// alert("El numero ngresado tiene " + numero.length + " digitos");

// Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.

// let palabra= prompt("Ingrese una palabra");
// alert("La palabra termina con la letra " + palabra.slice(-1));
// Un índice de inicio negativo corta la cadena de length+index, a length, siendo el índice -1, el último carácter se extrae:

// Ingresar una cadena de texto y reemplazar los espacios por asteriscos.

// let texto = "cadena de texto";  
// alert(texto.replace(" ", "*"));

// Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.

// let texto= prompt("Ingresar texto");
// let letra= prompt("Ingresar una letra");
// if (texto.includes(letra)) {
//     alert("Contiene la letra " + letra);
// } else {
//     alert("No contiene la letra " + letra);
// }

// Solicitar un texto y mostrarlo todo menos la primera letra.

// let texto = prompt("ingresar un texto o palabra");
// console.log(texto.slice(1));

// Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.

// let nombre= prompt("Ingresar nombre en minuscula");
// console.log(nombre[0].toUpperCase() + nombre.slice(1));

// Ejercicios con condicionales (parte 1):

// Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error. 
// 5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centímetros y pulgadas. Mostrar por alert los tres resultados.

// let metros = prompt("Ingrese una medida en metros");
// let pies = metros * 3.28084;
// let centimetros = metros * 100;
// let pulgadas = metros * 39.37;
// if (isNaN(metros)) {
//     alert("Error, no ha ingresado un numero");
      
// } else {
//     alert("La conversion da " + pies + " pies, " + centimetros + " centimetros y " + pulgadas + "  pulgadas")  
// }


// Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor .

// let edad = parseInt(prompt("Ingresar tu edad"));
// if (edad < 18) {
//     alert("Eres menos de edad");    
// } else {
//     alert("Eres mayor de edad");
// }

// Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

// let sabores = prompt("Cuales son tus sabores favoritos?");
// let cobertura = prompt("Queres cobertura de chocolate con el helado?");
// if (cobertura == "si" || cobertura == "Si") {
//     alert("Su helado sabor " + sabores + " con cobertura de chocolate cuesta $180");
// } else {
//     alert("Su helado sabor " + sabores + " sin cobertura de chocolate cuesta $150");
// }

// Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.
// 1) Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.

// let num1 = prompt("Ingresa un numero");
// let num2 = prompt("Ingresa otro numero");
// let suma = parseInt(num1) + parseInt(num2)
// alert(suma);
// // Con parseint parsefloat convertmos los strings en numeros, sino los cncatena como strings
// if (suma %2 == 0) {
//     alert("El numero resultante es par");
// } else {
//     alert("El numero resultante es impar");
// }


// Solicitar al usuario un número e indicar si es positivo, negativo o cero.
// let numero = parseInt(prompt("Ingresar un numero"));
// if (numero == 0) {
//     alert("El numero es Cero");
// } else if (numero <0){
//     alert("El numero es Negativo");   
// } else{
//     alert("El numero es Positivo");
// }


// Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.

// let monto = prompt("Ingresar el monto a abonar");
// let descuento = 0.1;
// if (monto >2000) {
//     alert("El total a pagar es " + (monto - (monto*0.1)));
// } else {
//     monto;
// }


// Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)

// let texto = prompt("Ingrese una cadena de texto");
// let posicion = parseInt(prompt("Ingrese una posicion"));
// if(texto.charAt(posicion) == "a" || texto.charAt(posicion) == "e" || texto.charAt(posicion) == "i" || texto.charAt(posicion) == "o" || texto.charAt(posicion) == "u" )
// {
//     alert("El digito elegido es una vocal");
// }else
// {
//     alert("El digito elegido no es una vocal");
// }





// Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 

// let nota = prompt("Ingresar la nota");
// if (nota >=0 && nota <=3) {
//     alert("Aplazado");
// } else if (nota >=4 && nota <=5) {
//     alert("Reprobado");
// } else if (nota>=6) {
//     alert("Aprobado");
// }

// Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.

// let numero_1 = parseInt(prompt("Ingresar un numero"));
// let numero_2 = parseInt(prompt("Ingresar otro numero"));
// if (numero_1 == numero_2) {
//     alert("Ambos numeros son iguales")
// } else if (numero_1 > numero_2) {
//     alert("Numero 1 es mayor");
// } else{
//     alert("Numero 2 es mayor");
// }

// Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.
// let mes = parseInt(prompt("Ingresar un es (del 1 al 12)"));
// switch (mes) {
//     case 1:
//         alert("Enero tiene 12 dias");
//         break;
//     case 2:
//         alert("Febrero tiene 28 dias");
//         break;
//     default:
//         break;
// }
// Una forma con switch

// if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
//     alert("El mes indicado tiene 31 dias");
// } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
//     alert("El mes indicado tiene 30 dias");
// } else{
//     alert("El mes indicado tiene 28 dias");
// }

// Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.
// let num_1 = parseInt(prompt("Ingresar un numero"));
// let num_2 = parseInt(prompt("Ingresar otro numero"));
// let num_3 = parseInt(prompt("Ingresar otro numero"));
// if (num_1 > num_2 && num_1 > num_3) {
//     alert("El numero 1 es el mayor");
// } else if (num_2 > num_1 && num_2 > num_3) {
//     alert("El numero 2 es el mayor");
// } else if (num_3 > num_1 && num_3 > num_2){
//     alert("El numero 3 es el mayor");
// } else{
//     alert("Los 3 numeros son iguales");
// }


// Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
// (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).

// let bebida = prompt("Ingresar una bebida (cerveza, jugo o agua)");
// let edad = prompt("Ingresar edad");
// if (bebida == "cerveza" && edad < 18) {
//     alert("No puede realizar la compra por ser menor");
// } else {
//     if (bebida== "cerveza") {
//         let pago = prompt("La cerveza tiene un costo de $100, con cuanto va a abonar");
//         if (pago < 100) {
//             alert("No le alcanza para pagar");
//         } else {
//             alert("su vuelto es de " + (pago - 100));
//         }
//     } else if (bebida== "jugo") {
//         let pago = parseInt(prompt("El jugo tiene un costo de $70, con cuanto va a abonar"));
//         if (pago < 80) {
//             alert("No le alcanza para pagar");
//         } else {
//             alert("su vuelto es de " + (pago - 80));
//         } 
        
//     } else if (bebida== "agua") {
//         let pago = prompt("el agua tiene un costo de $70, con cuanto va a abonar");
//         if (pago < 70) {
//             alert("No le alcanza para pagar");
//         } else {
//             alert("su vuelto es de " + (pago - 70));
//         }
// }
// }


// Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).

// hacer con switch


// BONUS:

// Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.

// let clave = 1234;
// let balance = 50000;
// let claveIngresada = parseInt(prompt("Ingrese su clave de 4 digitos"));


// if (claveIngresada != clave) {
//     alert("La clave es incorrecta");
//     } else {
//         alert("ingresado");
//         let monto = parseInt(prompt("ingrese el monto a retirar"));
//         if (balance>=monto) {
//             alert("")
//         } else {
//             alert("Saldo insuficiente");
//         }
//     }

// Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.




// Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días.

// let hora = prompt("Ingresar la hora");
// let nombre = prompt("Ingresa tu nombre");

// if (hora >=12 && hora <19) {
//     alert("Buenas tardes " + nombre);
// } else if ((hora >= 19 && hora<=24) || (hora >=1 && hora <5)) {
//     alert("Buenas noches " + nombre);
// } else {
//     alert("Buen dia " + nombre);
// }



// Ejercicios de bucles

// 0) Agregar en el ejercicio de home banking la posibilidad de seguir operando hasta que el usuario decida salir.
// let bucle = true;

// let continuar = "";
// let clave = 1234;
// let balance = 50000;
// do
// {
//     let claveIngresada = parseInt(prompt("Ingrese su clave de 4 digitos"));
    
    
//     if(claveIngresada != clave)
//     {
//         alert("La clave es incorrecta");
    
//     }else
//     {
//         alert("Ud. ha podido ingresar con exito");
//         let monto = parseInt(prompt("Su balance es de " + balance + "\n Ingrese el monto a retirar"));
    
//         if(balance >= monto)
//         {
//             balance = balance - monto;
//             alert("La operacion fue realizada con exito \n El saldo restante es de: " + balance);
//         }else
//         {
//             alert("El balance es menor al monto a retirar");
//         }
//     }

//     continuar = prompt("Desea seguir operando? (Si o No)");    
// }while (continuar == "Si")


// Mostrar los primeros 10 números naturales. (1,2,3,4,5,6,7,8,9,10). 

// for (let numeros = 0; numeros < 11; numeros++) {
//     alert(numeros);
// }

// Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.

// let suma = Number();
// for (let resultado = 0; resultado < 5; resultado++) {
//     let numeros = parseInt(prompt("Ingrese 1 numero"));
//     suma += numeros;   
// }
// alert(suma);


// Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.
// Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.
// Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.
// Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido. 
// Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros. 
// Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.
// Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.
// Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)
// Realizar un programa que pida la base y el exponente y calcule la potencia. 
// Realizar un programa que pida un número y calcule su factorial.  (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )
// Realizar un programa que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)
// Solicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Nucba” , 4), debe mostrar:
// H
// O
// L
// A
// Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas. 
// Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. Mostrar todos los números ingresados.

// Bonus desafíos matemáticos !!

// Agregar al ejercicio 5 una validación de que solo se acepte números del 1 al 10. Si ingresa un número no válido, volver a solicitar el dato. 
// Realizar un programa que pida números consecutivos (3, 4 y 5; 9, 10 y 11, etc.). Cuando se introducen tres números consecutivos dice “gracias” y termina. Mientras no se introduzcan tres números consecutivos el programa sigue pidiendo números indefinidamente. 
// Realizar un programa que pida dos números y diga su máximo común divisor. 
// (notas sobre el Máximo Común Divisor: 
// - Es el máximo número por el cuál se puede dividir un número dejando resto 0.
// - No puede ser mayor al valor de la mitad del menor número o sí mismo.
//  (Ejemplo: Si mis números son 9 y 12, no puede estar entre 5 y 8, ni ser mayor a 9).
//  (Ejemplo: Si mis números son 10 y 15, no puede estar entre 6 y 9, ni ser mayor a 10). (Podemos probar: 1,2,3,4,10).
// Solicitar al usuario que ingrese números. Mostrar los primeros tres multiplicados por 1, luego los próximos tres multiplicados por 2 y así sucesivamente. Cortar cuando el usuario ingrese un número mayor a 100. En cada iteración se debe mostrar la salida. Ejemplo:
// Ingresa 1 > muestra 1 
// Ingresa 8 > muestra 8
// Ingresa 3 > Muestra 3
// ingresa 4 > Muestra 8
// Ingresa 9 > Muestra 18
// Ingresa 50 > Muestra 100
// Ingresa 7 > Muestra 21
// ingresa 10 > Muestra 30
// Solicitar al usuario que ingrese 10 números, calcular el factorial de cada uno de ellos  y mostrarlo.
// Solicitar al usuario que ingrese un número y mostrar esa cantidad de dígitos de la secuencia de Fibonacci. 
