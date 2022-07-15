const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

const carrito = [
    { nombre: 'Ventilador', precio: 500 },
    { nombre: 'Televisor', precio: 400 },
    { nombre: 'Calefactor', precio: 350 },
    { nombre: 'Tablet', precio: 1500 },
    { nombre: 'Celular', precio: 2500 },
    { nombre: 'Teclado', precio: 800 },
]

// Comprobar si un valor existe en el arreglo
meses.forEach((mes, i) => {
    // console.log(mes);
    // console.log(i);
    if (mes.toLowerCase() === "abril") {
        console.log(`El mes se encuentra en el indice ${i}`);
    }
})

// Encontrar el indice
const indice = meses.findIndex(mes => mes.toLowerCase() === 'Abril')
console.log(indice);

// if(indice !== -1){

// }

// Encontra un indice de un arreglo de objetos
const indice2 = carrito.findIndex(car => car.nombre.toLowerCase() === 'teclado')
console.log(indice2);