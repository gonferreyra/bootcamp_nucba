const carrito = [
    { nombre: 'Ventilador', precio: 500 },
    { nombre: 'Televisor', precio: 400 },
    { nombre: 'Calefactor', precio: 350 },
    { nombre: 'Tablet', precio: 1500 },
    { nombre: 'Celular', precio: 2500 },
    { nombre: 'Teclado', precio: 800 },
]

// Uso del Foreach para sumar
let total = 0
carrito.forEach(prod => total += prod.precio)
console.log(total);

// Con un Reduce
const resultado2 = carrito.reduce((total, resultado) => total + resultado.precio,0)
console.log(resultado2);