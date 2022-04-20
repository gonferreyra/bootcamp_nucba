/*
window.addEventListener('scroll', () => {
    // const premium = document.querySelector(.premium);
    const ubicacion = document.getBoundingClientRect();
    console.log(ubicacion);
    if (ubicacion.top < 760) {
        alert("El elemento ya esta visible");
    } else {
        console.log("Aun no esta visible");
    }
})

// getBoundingClientRect nos da informacion sobre el documento, en esta caso el evento es scroll nso va diciendo su posicion entre otras cosas. 
*/

const input = document.querySelector('.input');

input.addEventListener('blur', (e) => {
    e.target.placeholder = "texto nuevo";
    // Aca cuando hace el evento del blur (que es cuando desenfoca en la variable, en este caso input) nos cambia el contenido del placeholder.-m-1
    e.style.background = 'red';
    e.target.className = 'conteiner';
    // cambiamos color de fondo y agregamos nueva clase al input.

})

input.addEventListener('focus', (e) => {

})

input.addEventListener('input', (e) => {
    // console.log(e.target.value);
    if (e.target.value == "algo") {
        console.log("do something");
    }
})
// Imput toma todo lo que se ingresa