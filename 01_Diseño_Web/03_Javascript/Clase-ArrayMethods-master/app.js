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
    if (mes.toLowerCase() === "enero") {
        // console.log('Si Existe');
    }
})

const resultado = meses.includes('enero')
// console.log(resultado);

const resultado2 = carrito.some((car, i) => {
    // console.log(car);
    // console.log(i);
    return car.nombre.toLowerCase() === 'teclado'
})

console.log(resultado2);

const resultado3 = carrito.some(car => car.nombre.toLowerCase() === 'teclado')
console.log(resultado3);