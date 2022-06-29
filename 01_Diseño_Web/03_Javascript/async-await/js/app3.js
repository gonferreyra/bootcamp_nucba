const url = 'https://picsum.photos/list'
const body = document.querySelector("body")

document.addEventListener('DOMContentLoaded', function () {
    ejecutar()
})

/* Primer metodo aprendido */
/*
const obtenerDatos = () => {
    fetch(url)
        .then(datos => datos.json())
        .then(photos => mostrar(photos))
        .catch(error => console.log(error))
}
*/

/*Segundo metodo aprendido Convertir a Async Await y mostrarlo en el html*/

// function descargarDatos() {
//     return new Promise((resolve, reject) => {
//         const clientes = true
//         setTimeout(() => {
//             if (clientes) {
//                 resolve('descargando clientes');
//             } else {
//                 reject('clientes no se descargaron');
//             }
//         }, 3000);
//     })
// }

async function ejecutar() {
    try {
        const respuesta = await fetch(url)
        const json = await respuesta.json()
        mostrarHTML(json)
    } catch (error) {
        console.log(error);
    }
}

function mostrarHTML(datos) {
    datos.forEach(dato => {
        const { id, author, post_url } = dato;
        const h1 = document.querySelector('h1');
        const div = document.createElement('div')
        div.innerHTML = `
        <p>id: ${id}</p>
        <p>autor: ${author}</p>
        <p><a src='${post_url}'</p>
        `
        h1.appendChild(div);
    })
}