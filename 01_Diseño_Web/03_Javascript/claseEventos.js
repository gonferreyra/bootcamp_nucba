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
/*
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
    if (e.target.value === "") {
        console.log("debe llenar el campo");
        e.target.style.background = "red";
    } else {
        e.target.style.background = "";
    }
})
// Input toma todo lo que se ingresa
*/
/*
// Evento submit

const form = document.querySelector("#formulario");

form.addEventListener("submit", ejecutarAPI)

function ejecutarAPI(e) {
    e.preventDefault();
    console.log(e);
    // ver e.target todo lo que se puede hacer y consultar

}
*/
/*
const cardDiv = document.querySelector(".card");
const tituloDiv = document.querySelector(".titulo");

cardDiv.addEventListener("click", () => {
    console.log("click en card");
})

tituloDiv.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("click en titulo");
})
*/
/*
const img3 = document.querySelector("body > main > section:nth-child(1) > div > div:nth-child(3) > img");
// Aca tomamos la direccion de la imagen y la seleccionamos para que quede en la variable
// y la podemos modificar de la siguiente manera
img3.alt = "IMG No disponible" //cambiamos el atributo alt del tag de la imagen
img3.classList.add("nuevaClase"); // agregamos una nueva clase
img3.src = "img/hacer1" //cambiamos la imagen directamente con el atributo src
*/

const enlace = document.querySelector(".navegacion");

enlace.removeChild(enlace.children[2]);

var categoria = document.querySelector("");

categoria.textContent = "sdkjahdkjas"

// Realizar codigo para que cambie todo el contenido al hacer click o al hacer scroll, tambien buscar como se usa el setTimeOut(). 