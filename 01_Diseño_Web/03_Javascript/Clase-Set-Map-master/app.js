// Eliminar los duplicados
// Los set no almacenan valores duplicados y son literales
const carrito = new Set()

carrito.add('Funcionando')
carrito.add('Funcionando2')
carrito.add('Funcionando3')
carrito.add('Funcionando4')
carrito.add('Funcionando5')
carrito.add('Funcionando6')

// console.log("Tamaño", carrito.size);
// console.log(carrito.has('Funcionando7'));
// console.log(carrito);
// carrito.delete('Funcionando4')
// carrito.clear()
// carrito.forEach((car, i) => {
//     // console.log(car)
//     console.log(i)
// })
// console.log(carrito);

// const noDuplicados = new Set(variables);
// console.log(noDuplicados);

const variables = [10, 10, 5, 25, 40, 5, 5, 2, 1, 6, 8, 5, 7, 10, 6, 3]


/* function removeDuplicados(arr) {
    let unicos = [];
    for (let i = 0; i < arr.length; i++) {
        // if (unicos.indexOf(arr[i]) === -1) {
        //     unicos.push(arr[i]);
        // }
        if (arr[i] !== arr[i + 1]) {
            unicos.push(arr[i])
        }
    }
    return unicos;
}

console.log(removeDuplicados(variables)); */





/* const array2 = [];

const noDuplicados = () => {
    for (let i = 0; i < variables.length; i++) {
        if (variables[i] !== variables[i + 1]) {
            array2.push(variables[i]);
        }
    }
    return array2;
}
console.log(noDuplicados(variables)); */

function removeDuplicado(arr) {
    const unicos = []
    for (var indice = 0; indice < arr.length; indice++) {
        const persona = arr[indice];
        let esDuplicado = false;
        for (var i = 0; i < unicos.length; i++) {
            if (unicos[i] === persona) {
                esDuplicado = true;
                break;
            }
        }
        if (!esDuplicado) {
            unicos.push(persona);
        }
    }
    return unicos
}

console.log(removeDuplicado(variables));

// const numeros = [10, 5, 8, 41, 10, 9, 10];


// const var2 = []

/* const noDuplicados = (arr) => {
    const unicos = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[i] !== arr[j + 1]) {
                unicos.push(arr[i]);
            }
        }
    }
    return unicos;
}

console.log(noDuplicados(variables)); */


// ADVERTENCIA: Sin utilizar metodos solo javascript vanilla
// Una vez que tenemos el array que no tiene repetidos entonces ordenar de menor a mayor a pedido de Leo.
// A pedido de tomas podemos hacer que se sumen los elementos del array