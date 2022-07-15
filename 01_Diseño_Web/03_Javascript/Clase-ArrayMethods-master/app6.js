const carrito = [
    { nombre: 'Ventilador', precio: 500 },
    { nombre: 'Televisor', precio: 400 },
    { nombre: 'Calefactor', precio: 350 },
    { nombre: 'Tablet', precio: 1500 },
    { nombre: 'Celular', precio: 2500 },
    { nombre: 'Teclado', precio: 800 },
]

const resultado = carrito.some(car => car.precio < 300)
// console.log(resultado);

const resultado2 = carrito.every(car => car.precio < 2500)
console.log(resultado2);