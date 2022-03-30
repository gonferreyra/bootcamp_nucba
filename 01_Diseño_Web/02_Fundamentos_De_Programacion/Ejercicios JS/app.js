// 1. Ejercicio 1: imprima la suma de todos los números pares entre 1 y 100
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// impares
// for (let i = 0; i < 100; i++) {
//     if (i % 2 != 0){
//         console.log(i);
//     }
// }

// 2. Ejercicio 2 Imprime el número y la suma de todos los múltiplos de 7 entre 1-100
// for (let i = 0; i < 100; i++) {
//     if((i % 7) ===0) {
//         console.log(i);
//     }
    
// }

// 3. El número de narcisos se refiere a un número de 3 dígitos y la suma de los dígitos a la potencia de 3 es igual a sí mismo. (Por ejemplo: 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 153), imprima todos los números de narcisos.

// 4. Reciba un número ingresado por el usuario en la página y determine si el número es un número primo. Número primo: Un número que solo puede ser divisible por 1 y él mismo. 1 no es un número primo ni un número compuesto. Un número primo debe ser un número natural mayor que 1.
// const num = prompt('Ingrese un numero entre 1 y 50');
// if (num%2 ==0) {
//     console.log('El numero ingresado es primo');
// } else {
//     console.log("El numero no es primo");
// }

// 5. Imprime la tabla de multiplicar del 99

// 6. Imprima todos los números primos entre 1 y 100
// for (let i = 0; i <= 100; i++) {
//     if (i%2 == 0) {
//         console.log(i);
//     }
    
// }

// cambiar de ejercicio - switch

// 1. Si la puntuación es mayor o igual a 60 puntos, la salida se "pasa". Si la puntuación es inferior a 60, el resultado es "no calificado"

// let puntuacion = 59;

// switch (true) {
//     case puntuacion<= 60:
//         console.log(`No calificado, obtuviste ${puntuacion}`);
//         break;
//     case puntuacion>60:
//         console.log(`Pasaste`);

//     default:
//         break;
// }

// 2. Reciba parámetros enteros desde el teclado, si el número es 1-7, imprima la semana correspondiente, de lo contrario imprima parámetros ilegales.

// const week = parseInt(prompt('Ingrese un numero entre 1 y 7'));
// switch (week) {
//     case 1:
//         alert('Lunes');
//         break;
//     case 2:
//         alert('Martes');
//         break;
//     case 3:
//         alert('Miercoles');
//         break;
//     case 4:
//         alert("Jueves");
//         break;
//     case 5:
//         alert('Viernes');
//         break;
//     case 6:
//         alert('Sabado');
//         break;
//     case 7:
//         alert('Domingo');
//         break;
//     default:
//         alert('Parametro ilegal');
//         break;
// }

// while loop

// 1. Si la tasa de interés anual de la inversión es del 5%, ¿cuántos años se necesitarán para pasar de 1000 yuanes a 5000 yuanes? 1000 1000 + 10000.05=10001.05
// 1050 1050+10500.05=10501.05

// var money = 1000;
// var anios = 0
// while(money<=5000){
//     money *= 1.05;
//     anios++;
// }
// console.log(anios);