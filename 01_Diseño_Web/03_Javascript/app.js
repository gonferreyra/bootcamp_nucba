// let sueldo1 = prompt('Ingresar sueldo');

// function iva(arr) {
//     return arr * 0.21;
// }

// console.log(iva(100000));

// function factorial(n) {
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(4));

/*
-Crear una variable llamada "edad" y asignarle tu edad como valor.
-Crear un condicional que imprima en la consola "Soy menor de edad" si edad es menor a 18 y "Soy mayor de edad" si edad es mayor o igual a 18.
-Crear otro condicional que imprima en consola "y tengo menos de 25 años" si tu edad esta entre los 18 y los 25. Caso contrario, que imprima "y tengo mas de 25 años".
*/
/*
let edad = 35;
if (edad >= 18) {
    console.log('Soy mayor de edad');
    if (edad >= 18 && edad <= 25) {
        console.log('y tengo menos de 25 años');
    } else {
        console.log('Y tengo mas de 25 años');
    }
} else {
    console.log('Soy menor de edad');
}
*/

/*
-Crear un array con los números del 1 al 10.
-Crear un bucle for que imprima en consola todos los números del array.
-Crear un bucle que imprima solo los primeros 5 números.
-Crear un bucle que imprima los últimos 5 números.
-Crear un bucle que imprima todos los números, excepto el que este en la 4ta posición.
*/

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// let i = 0;
// while (i < 5) {
//     console.log(numbers[i]);
//     i++;
// }

// let i = 9;
// while (i >= (numbers.length - 6)) {
//     console.log(numbers[i]);
//     i--;
// }

// let i = -1;
// while (i < numbers.length) {
//     i++;
//     if (i == 4) {
//         continue;
//     }
//     console.log(numbers[i]);
// }
// Ojo con el contador y el continue, si no va antes del continue entra en infinite loop

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(arr[i]);
// }

// for (let i = arr.length - 1; i >= 5; i--) {
//     console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//     if (i == 4) {
//         continue;
//     }
//     console.log(arr[i]);
// }



// Funcion recursiva
/*
function preguntarPresupuesto() {
    const presupuesto = prompt('Cual es su presupuesto?');

    if (presupuesto === '' || presupuesto === NaN || presupuesto === null) {
        alert('presupuesto no valido, ingrese nuevamente el presupuesto');
        preguntarPresupuesto();
    }
}

preguntarPresupuesto();
*/

// Class

// class Robot {
//     constructor(color, posicionX, posicionY) {
//         this.color = color;
//         this.posicionX = posicionX;
//         this.posicionY = posicionY;
//     }
//     // Metodo dentro de class (son funciones pero al estar dentro de la class se llaman metodos)
//     desplazar = function (X, Y) {
//         this.posicionX = X;
//         this.posicionY = Y;
//     }
//     // Metodo
//     posicion = function () {
//         return `Robot ${this.color}, en X ${this.posicionX} y en Y ${this.posicionY}.`;
//     }
// }

// const robot1 = new Robot("celeste", 10, 15);
// console.log(robot1);
// robot1.desplazar(20, 25);
// console.log(robot1);
// console.log(robot1.posicion())

// class Chocolate {
//     constructor(tipo, marca) {
//         this.tipo = tipo;
//         this.marca = marca;
//     }
// }

// let miChocolate = new Chocolate("Blanco", "Milkaut");


// class Auto {
//     constructor(marca, modelo, anio) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.anio = anio;
//     }
//     // Metodo
//     arrancar = function () {
//         return `El auto arranco`;
//     }
//     // Metodo
//     getMarca = function () {
//         return this.marca;
//     }
// }

// let auto1 = new Auto('Ford', 'Focus', 2017);


// 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

// 👉 Crear una función que acepte ese array como parámetro.

// Dentro de la función, debemos lograr lo siguiente:
// 👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares".
// 👉 Hacer lo mismo con los impares, enviándolos al array "impares".
// 👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares).
// Los ingredientes impares son: (ingredientes en array impares)."

// let ingredientes = ['muzarella', 'jamon', 'aceituna', 'huevo', 'panceta', 'salame', 'tomate', 'oregano', 'roquefort', 'anana'];

// function parImpar(arr) {
//     let pares = [];
//     let impares = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length % 2 == 0) {
//             pares.push(arr[i]);
//         } else {
//             impares.push(arr[i]);
//         }
//     }
//     console.log(`Los ingredientes impares son: ${impares}, y los pares son: ${pares}`);
// }

// parImpar(ingredientes);
/*
const capitalizeName = (names) => {
    const splitNames = names.split(' ');
    let fullName = '';

    for (let index = 0; index < splitNames.length; index++) {
        const capitalizeFirstLetter = splitNames[index].split('')[0].toUpperCase();
        const namesSplit = splitNames[index].split('');
        namesSplit[0] = capitalizeFirstLetter;
        fullName = `${fullName} ${namesSplit.join('')}`;
        // console.log(fullName)
    }
    return fullName.trim();
};

console.log(capitalizeName('gonzalo ferreyra'));
*/
