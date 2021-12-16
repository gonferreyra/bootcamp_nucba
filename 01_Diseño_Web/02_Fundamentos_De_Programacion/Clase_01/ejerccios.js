// 0) Solicitar al usuario su nombre y mostrarlo por alert. Luego Mostrar un alert que salude diciendo Hola y el nombre de la persona. Luego solicitar el apellido y que salude por alert con el nombre completo (Ej: Hola Florencia Andres).

// let nombre = prompt("Cual es tu nombre");
// alert("hola " + nombre);

// 1) Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.
 
// let num1 = prompt("Ingresa un numero");
// let num2 = prompt("Ingresa otro numero");
// alert(parseInt(num1) + parseInt(num2));
// Con parseint parsefloat convertmos los strings en numeros, sino los cncatena como strings

// 2) Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y mostrar un mensaje por alert (Ej: Usted nació en 1974)

// let edad = prompt("Cuantos años tenes?");
// alert("Usted nacio en " + (2021 - edad));

// 3) Mostrar al usuario su balance de cuenta (inventar un número de cuenta). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.

// let balance = 10550;
// alert(balance);
// let retiro = prompt("cuanto desea retirar de su cuenta?");
// alert(balance - retiro);

// 4) Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por alert.

// let nota1 = prompt("Ingresar primera nota");
// let nota2 = prompt("Ingresar segunda nota");
// let nota3 = prompt("Ingresar tercera nota");
// alert("Su promedio es de " + ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3));

// 5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centímetros y pulgadas. Mostrar por alert los tres resultados.

// let metros = prompt("Ingrese una medida en metros");
// let pies = metros * 3.28084;
// let centimetros = metros * 100;
// let pulgadas = metros * 39.37;
// alert("La conversion da " + pies + " pies, " + centimetros + " centimetros y " + pulgadas + "  pulgadas");

// 6) Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.

// let numero1= prompt("Ingrese un numero");
// let numero2= prompt("Ingresa otro numero");
// let suma = parseFloat(numero1)+parseFloat(numero2);
// alert("La suma da " + suma);
// let numero3= prompt("Ingresa otro numero");
// alert('Y su multiplicacion es ' + (suma * parseFloat(numero3)));

// 7) Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.

// let minutos = prompt("Ingresar un numero en minutos");
// let segundos = parseFloat(minutos) * 60;
// alert(minutos + " minutos equivale a " + segundos + " segundos");

// 8) Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.

// let base = prompt("Ingresa la base");
// let altura = prompt("Ingresa la altura");
// alert("Su superficie es " + (base * altura));

// 9) Solicitar al usuario la medida de la base y de la altura de un triángulo equilátero y devolver el área.

// let base = prompt("Ingresa la base");
// let altura = prompt("Ingresa la altura");
// alert("Su superficie es " + ((base * altura)) / 2);

// 10) Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.

// let monto = prompt("Ingresar monto");
// let descuento = prompt("Ingresar descuento");
// descuento /= 100;
// alert("El precio final es " + (monto - (monto * descuento)));

// 11) Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"

// let nombre = prompt("Ingrese su nombre");
// let nombre = prompt("Ingrese su nombre");
// alert("Hola " + nombre + ", usted nacio en el año " + (2021 - edad));

// 12) Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por alert su equivalente en Farenheit junto con un mensaje que incluya ambos datos. 

// let nombre = prompt("Ingrese su nombre");
// let temperatura = prompt("Ingresar temperatura celsius");
// alert("Hola " + nombre + ", la temperatura actual es de " + ((temperatura *1.8) + 32));

// 13) Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.

// let nombre = prompt("Ingrese su nombre");
// let temperatura = prompt("Ingresar temperatura fahrenheit");
// alert("Hola " + nombre + ", la temperatura actual es de " + (((temperatura - 32) * 5) / 9));

// 14) Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.

// let numero = prompt("Ingrese un numero");
// numero = (numero + 5) * 10;
// numero = numero % 3;
// alert(parseInt(numero));

// BONUS:
// 0) Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529).

// let num1 = prompt("ingresar un numero");
// let num2 = prompt("ingresar otro numero");
// alert(num1+num2);

// 1) Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por alert o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)

// let conversor= prompt("ingresar cantidad de dias");
// conversor *= 86400;
// alert("Son " + conversor + " segundos");

// 2) Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)

// let cantidadKilometros= prompt("Ingresar los kilometros que desea recorrer");
// let velocidadPromedio= prompt("Ingresar la velocidad promedio a la que desea ir en kilometros por hora");
// let tiempoEstimado = (cantidadKilometros / velocidadPromedio) *60;
// alert("El tiempo estimado es de " + tiempoEstimado + " minutos" );

// 3) Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.
// ej: Sueldo bruto: $70.000
// Deducciones:
// Obra social: $2100
// Ley 19032: $2100
// Jubilación: $7700
// Neto a pagar: $58100

// let sueldoBruto = prompt("ingrese su sueldo bruto");
// let obraSocial= sueldoBruto * (3/100);
// let jubilacion= sueldoBruto * (11/100);
// let ley19032= sueldoBruto * (3/100);
// let sueldoNeto= sueldoBruto - obraSocial - jubilacion - ley19032;
// alert("Su sueldo bruto es de: " + sueldoBruto + ". Deducciones: Obra social: " + obraSocial + ". Ley 19032: " + ley19032 + ". Jubilacion: " + jubilacion + ". Neto a pagar: " + sueldoNeto);