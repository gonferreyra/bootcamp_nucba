const carrito = [
    { nombre: 'Ventilador', precio: 500 },
    { nombre: 'Televisor', precio: 400 },
    { nombre: 'Calefactor', precio: 350 },
    { nombre: 'Tablet', precio: 1500 },
    { nombre: 'Celular', precio: 2500 },
    { nombre: 'Teclado', precio: 800 },
]

let resultado
// resultado = carrito.filter(car => car.precio > 450)
// resultado = carrito.filter(car => car.precio < 450)
// resultado = carrito.filter(car => car.nombre !== "Televisor")
// resultado = carrito.filter(car => car.nombre === "Televisor")
resultado = carrito.filter(car => menorPrecio(car)).filter(car => mayorPrecio(car))

function menorPrecio(car) {
    if (car.precio > 1400) {
        return car
    }
}
function mayorPrecio(car) {
    if (car.precio < 2000) {
        return car
    }
}
console.log(resultado);
console.log(carrito);