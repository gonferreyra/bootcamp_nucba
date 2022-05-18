/*
   Tarea Realizar la consulta a la api y mostrar los datos en el DOM
*/


cargarApiBtn = document.querySelector('#cargarApi');
cargarApiBtn.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    fetch(url)
        .then(response => response.json())
        .then(datos => mostrarHTML(datos))
}

function mostrarHTML(album) {
    album.forEach(datos => {
        const { id, title, thumbnailUrl } = datos;
        const body = document.querySelector('body');
        const div = document.createElement('div');
        div.innerHTML = `
            <p>id: ${id}</p>
            <p>title: ${title}</p>
            <img src='${thumbnailUrl}'>
        `
        body.appendChild(div);
    })
}