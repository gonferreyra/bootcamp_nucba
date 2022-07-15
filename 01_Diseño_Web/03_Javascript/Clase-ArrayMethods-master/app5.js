const carrito = [
    { nombre: 'Ventilador', precio: 500 },
    { nombre: 'Televisor', precio: 400 },
    { nombre: 'Calefactor', precio: 350 },
    { nombre: 'Tablet', precio: 1500 },
    { nombre: 'Celular', precio: 2500 },
    { nombre: 'Teclado', precio: 800 },
]

// Busqueda por Foreach
let resultado
carrito.forEach((car, i) => {
    if (car.nombre === 'Calefactor') {
        resultado = car
    }
})
// console.log(resultado);


// Metodo .find
let resultado2 = carrito.find(car => car.nombre === 'Calefactor')
let resultado3 = carrito.find(car => car.precio < 1500)
console.log(resultado3);