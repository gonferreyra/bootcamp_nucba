// Primer parrafo
const parrafo1 = document.createElement('p');
parrafo1.textContent = "Deportes";
parrafo1.classList.add("categoria", "paseo");
// parrafo1.classList.add("paseo");
// Aca creamos la varibale parrafo1, le insertamos un parrado. Le agregamos el un texto y 2 clases.

const titulo = "Experimenta lo mejor del deporte";

// Segundo parrado
const parrafo2 = document.createElement("p");
parrafo2.textContent = titulo;
parrafo2.classList.add("titulo");

// Tercer parrafo
const parrafo3 = document.createElement("p");
parrafo3.textContent = "$2500 mensuales";
parrafo3.classList.add("precio");


// Creamos el div padre de los parrafos y le agregamos los parrafos como hijos, para que queden adentro del div, con el appendChild()
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Creamos imagen
const img = document.createElement("img");
img.src = "img/newyork2.jpg";


//Creamos el div contenedor
const contenedorCard = document.createElement("div");
contenedorCard.classList.add("contenedor-cards");

//Vamos a asignar la imagen al card
contenedorCard.appendChild(img);

//Vamos a agregar
contenedorCard.appendChild(info);

const contenedor = document.querySelector("body > main > section:nth-child(1) > div");
// contenedor.appendChild(contenedorCard);
const elReferencia = document.querySelector(
    "body > main > section:nth-child(1) > div > div:nth-child(2)"
);

contenedor.insertBefore(contenedorCard, elReferencia);
