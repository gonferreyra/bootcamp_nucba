const lista = [1, 2, 3, 5, 7, 10, 50, 10]
const lista2 = [4, 5, 6, 5, 6, 7, 8, 1]

// const resultado = lista.concat(lista2)
const resultado = [...lista, ...lista2, 4, 7, 25, 45]

// articulosCarrito = [...articulosCarrito, infoCurso];

// Metodo estatica
// function suma(n1, n2, n3) {
//     const resultado = n1 + n2 + n3
//     console.log(resultado);
// }

// Metodo dinamico
function suma(...listas) {
    // console.log(typeof listas);
    // console.log(listas);
    // listas.reduce((acumulador, actual) => {
    //     acumulador + actual
    // }, 0);
    const sumaTotal = listas.reduce((prev, current) => prev + current)
    return sumaTotal
    // listas.map(num => console.log(num))
}

// suma(lista[0], lista[1], lista[2])
// const sumar = suma(...lista, ...lista2, 5, 6, 7, 8, 9, 10)
const sumar = suma(...lista, ...lista2)
console.log(sumar);
// console.log(lista.length);
// console.log(lista2.length);
// console.log(resultado);

// Pendiente mostrar como hacer dinamica la funcion para pasar distintos elementos y que haga la suma segun los parametros

// Por ultimo los objetos

const direccion = {
    calle: 'Mejico',
    altura: 1500
}

const persona = {
    ...direccion,
    nombre: 'Ariel',
    apellido: "Tecay",
    estudios: {
        secundario: true,
        universitario: true
    }
}

console.log("Persona Inicio", persona);
persona.estudios.secundario = false
// persona.calle='BS AS'
direccion.calle = 'BS AS'
console.log("Persona Final", persona);
console.log(direccion);

// console.log("Direccion", direccion);

/* class Persona {
    constructor()
}
class Cliente extends Persona{
    constructor(){
        Persona
    }
} */