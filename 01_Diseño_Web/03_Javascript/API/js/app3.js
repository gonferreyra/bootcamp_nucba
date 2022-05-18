const jsonArray = document.querySelector("#abrirJSONArray")
jsonArray.addEventListener('click', mostrarDatos)

function mostrarDatos() {
    const url = "https://jsonplaceholder.typicode.com/photos"
    /*
    Tarea Realizar la consulta a la api y mostrar los datos en el DOM
    */


    // const url = 'data/nombres.json'

    fetch(url)
        .then(res => res.json())
        .then(datos => mostrarHTML(datos))
}

/*
function mostrarHTML(nombres) {
    const body = document.querySelector('body');
    let addContent = '';

    nombres.forEach(nombre => {
        const { name, username, address: { city } } = nombre;
        addContent += `
            <hr>
            <div class='nombre'>Nombre: ${name}</div>
            <div class='usuario'>Usuario: ${username}</div>
            <div class='ciudad'>Ciudad: ${city}</div>
            `
    });
    body.innerHTML = addContent;
}
//Reemplaza el contenido del html
/*
/*
function mostrarHTML(nombres) {
    nombres.forEach(nombre => {
        const { name, username, address: { city } } = nombre
        const body = document.querySelector('body')
        const div = document.createElement('div')

        div.innerHTML = `
        <hr>
        <div class='nombre'>Nombre: ${name} </div>
        <div class='usuario'>Usuario: ${username} </div>
        <div class='ciudad'>Ciudad: ${city} </div>
        `

        body.appendChild(div)
    })
}
// // Agrega abajo HTML
*/
const data = [1, 2, 3].map(e => e)
console.log(data);