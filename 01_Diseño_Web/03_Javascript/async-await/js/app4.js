/* Practicar en agregar el reject en cada promesa y permutar los errores * /
/* Verificar tambien los errores en el promise.all */

function descargarClientes() {
    console.log('Descargando Clientes...');
    return new Promise((resolve, reject) => {
        const condicion = true;

        setTimeout(() => {
            if (condicion) {
                resolve('Clientes descargado')
            } else {
                reject('Clientes no se pudieron descargar')
            }

        }, 5000)
    })
}

function descargarProductos() {
    console.log('Descargando Productos...');
    return new Promise((resolve, reject) => {
        const productos = true;
        setTimeout(() => {
            if (productos) {
                resolve('Productos descargado')
            } else {
                reject('Los productos no se pudieron descargar')
            }

        }, 1000)
    })
}

const app = async () => {
    try {

        // const clientes = await descargarClientes()
        // console.log(clientes);
        // const productos = await descargarProductos()
        // console.log(productos);

        const respuesta = await Promise.all([descargarClientes(), descargarProductos()])
        mostrarHTML(respuesta)
        // Cuando usamos el promise.all si uno de los 2 no queda fullfilled o completado, no ejecuta los demas por mas que se resuelvan
        console.log(respuesta[0]);
        console.log(respuesta[1]);

    } catch (error) {
        console.log(error);
    }
}
/*
A HACER - Mostrar en el HTML la respuesta!!
*/

function mostrarHTML(respuesta) {
    const h1 = document.querySelector('h1');
    const div = document.createElement('div');
    div.innerHTML = `
    <p>${respuesta}</p>
    `
    h1.appendChild(div);
}


app()
