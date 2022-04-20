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
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let i = 0;
while (i < 5) {
    console.log(numbers[i]);
    i++;
}

let i = 9;
while (i >= (numbers.length - 6)) {
    console.log(numbers[i]);
    i--;
}

let i = -1;
while (i < numbers.length) {
    i++;
    if (i == 4) {
        continue;
    }
    console.log(numbers[i]);
}
Ojo con el contador y el continue, si no va antes del continue entra en infinite loop
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = 0; i < 5; i++) {
    console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 5; i--) {
    console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
    if (i == 4) {
        continue;
    }
    console.log(arr[i]);
}
*/

// --------- Funcion recursiva ---------
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

/*
👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

👉 Crear una función que acepte ese array como parámetro.

Dentro de la función, debemos lograr lo siguiente:
👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares".
👉 Hacer lo mismo con los impares, enviándolos al array "impares".
👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares).
Los ingredientes impares son: (ingredientes en array impares)."
*/
/*
let ingredientes = ['muzarella', 'jamon', 'aceituna', 'huevo', 'panceta', 'salame', 'tomate', 'oregano', 'roquefort', 'anana'];

function parImpar(arr) {
    let pares = [];
    let impares = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 == 0) {
            pares.push(arr[i]);
        } else {
            impares.push(arr[i]);
        }
    }
    console.log(`Los ingredientes impares son: ${impares}, y los pares son: ${pares}`);
}

parImpar(ingredientes);
*/
/*
-Crear la clase constructora "Zapatillas". Debe aceptar como parámetros Marca, color y talle. 
-Crear, como mínimo, 5 objetos con esta clase. 
-Crear una función que acepte como parámetro un objeto. Esa función debe imprimir en consola la marca, el color y el talle del objeto que le pasamos. 
-La impresión en consola debe ser friendly para el usuario, no solo los datos sueltos.
*/
/*
class Zapatillas {
    constructor(marca, color, talle) {
        this.marca = marca;
        this.color = color;
        this.talle = talle;
    }
}
const nike = new Zapatillas('nike', 'negro', 35);
const adidas = new Zapatillas('adidas', 'azul', 33);
const reebok = new Zapatillas('reebok', 'blanco', 42);
const wilson = new Zapatillas('wilson', 'blanco', 44);
const fila = new Zapatillas('fila', 'rojo', 44);

function mostrarZapatilla(zapatilla) {
    console.log(`La zapatilla es de marca ${zapatilla.marca}, su color es ${zapatilla.color} y su talle ${zapatilla.talle}`);
}

mostrarZapatilla(wilson);
*/
/*
let dias= "lunes, martes, miércoles, jueves, viernes" 

-Partiendo de la variable días, utilizando los métodos vistos en clase imprimir en consola:
a): Longitud del string. 
b): String en mayúsculas.
c): Reemplazar TODAS las comas por guion medio.
d): Mediante un método de los strings, devolver un array. Cada elemento del array, debe ser un día de la semana.
*/
/*
let dias = "lunes, martes, miercoles, jueves, viernes";

console.log(dias.length);
console.log(dias.toUpperCase());
console.log(dias.replaceAll(",", " -"));
console.log(dias.split(" "));
*/
/*
let mes1= ["enero", "febrero", "marzo", "abril", "mayo", "junio"] 
let mes2= ["agosto", "septiembre", "octubre", "noviembre", "diciembre"] 

a) Siempre utilizando métodos, devolver un array que contenga los 12 meses del año.
b) Utilizando mes1, devolver un array que contenga solo desde "febrero" hasta "abril", inclusive. 
c) Utilizando mes1, devolver un array que contenga solo los meses que tienen mas de 4 letras en su nombre.
-Aprovechando la función constructora "Zapatillas" desarrollada en el ejercicio anterior, crear un array de objetos que contenga las zapatillas que construimos anteriormente. (Si es necesario, puede copiar y pegar la función constructora y los objetos). 
No crear el array de manera manual, hacerlo con las herramientas que nos provee JS (bucles, push, etc).
*/

/*
let mes1 = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
let mes2 = ["agosto", "septiembre", "octubre", "noviembre", "diciembre"];
*/
/*

a)
console.log(mes1.concat(mes2));
let meses = mes1.concat(mes2);
console.log(meses);

*/
/*

b) 
console.log(mes1.slice(1, 4));

*//*
-Aprovechando la función constructora "Zapatillas" desarrollada en el ejercicio anterior, crear un array de objetos que contenga las zapatillas que construimos anteriormente. (Si es necesario, puede copiar y pegar la función constructora y los objetos). */
/*

class Zapatillas {
    constructor(marca, color, talle) {
        this.marca = marca;
        this.color = color;
        this.talle = talle;
    }
}

const nike = new Zapatillas('nike', 'negro', 35);
const adidas = new Zapatillas('adidas', 'azul', 33);
const reebok = new Zapatillas('reebok', 'blanco', 42);
const wilson = new Zapatillas('wilson', 'blanco', 44);
const fila = new Zapatillas('fila', 'rojo', 44);

function mostrarZapatilla(zapatilla) {
    console.log(`La zapatilla es de marca ${zapatilla.marca}, su color es ${zapatilla.color} y su talle ${zapatilla.talle}`);
}

let array = [];
function newArray(marca, color, talle) {
    array.push(new Zapatillas(marca, color, talle));
}

newArray("Oasic", "negro", 44);
newArray("Jordan", "negro", 41);
console.log(array);
*/
/*

for (let i = 0; i < mes1.length; i++) {
    if (mes1[i].length > 4) {
        console.log(mes1[i]);
    }
}

*/

/*
-Crear una función que acepte como parámetro 2 números y retorne el resultado de la multiplicación de dichos números. 
*/
/*

function multiplicacion(a, b) {
    return a * b;
}

const multiplicacion2 = (a, b) => a * b;


console.log(multiplicacion(2, 5));
console.log(multiplicacion2(3, 5));
*/
/*
-Crear una función que acepte 3 parámetros. Los primeros dos, tienen que ser números, el tercero, la función creada anteriormente. 
*/ /*

const multiplicacion = (a, b) => a * b;

const numbers = (num1, num2, callback) => {
    let suma = num1 + num2;
    let test = callback(num1, num2);
    return `La suma de ambos numeros es ${suma}, y su multiplicacion ${test}`
}

console.log(numbers(15, 18, multiplicacion));
*/
/*
Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸
*/
const pizzas = [
    {
        id: 1,
        nombre: "muzzarella",
        ingredientes: "salsa de tomate, muzzarella",
        precio: 500
    },
    {
        id: 2,
        nombre: "margarita",
        ingredientes: "salsa de tomate, albahaca, muzzarella",
        precio: 900
    },
    {
        id: 3,
        nombre: "cuatro quesos",
        ingredientes: "mozzarella, gorgonzola, parmesano, fontina",
        precio: 1200
    },
    {
        id: 4,
        nombre: "pepperoni",
        ingredientes: "salsa de tomate, muzzarella, pepperoni, albahaca",
        precio: 1300
    },
    {
        id: 5,
        nombre: "champiñones",
        ingredientes: "salsa de tomate, muzzarella, portobellos, champiñones",
        precio: 1600
    },
    {
        id: 6,
        nombre: "fugazza",
        ingredientes: "cebolla, muzzarella, aceitunas",
        precio: 800
    }
]
/*
a) Las pizzas que tengan un id impar.

for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].id % 2 != 0) {
        console.log(pizzas[i]);
    }
}
*/ /*
b) ¿Hay alguna pizza que valga menos de $600?

for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].precio < 600) {
        console.log(`La pizza ${pizzas[i].nombre} tiene un valor de $${pizzas[i].precio}, y tiene los siguientes ingredientes ${pizzas[i].ingredientes}`);
    }
}
*/ /*
c) Los nombres de todos las pizzas.

let variedades = [];
for (let i = 0; i < pizzas.length; i++) {
   variedades.push(pizzas[i].nombre)
}
console.log(`Las variedades de pizzas disponibles son ${variedades}`)

-- Otra opcion

for (let i = 0; i < pizzas.length; i++) {
   console.log(`Pizza ${pizzas[i].nombre}`)
}

*/ /*
d) Los precios de las pizzas.

for (let i = 0; i < pizzas.length; i++) {
    console.log(`La pizza tiene un valor de ${pizzas[i].precio} pesos`);
}
*/
/*

e) El nombre de cada pizza con su respectivo precio.

for (let i = 0; i < pizzas.length; i++) {
    console.log(`La pizza ${pizzas[i].nombre} tiene un precio de ${pizzas[i].precio} pesos`);
} 
*/



