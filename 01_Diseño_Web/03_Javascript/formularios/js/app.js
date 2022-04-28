const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

// const expresiones = {
//     password: 
//     nombre:
// }

const validarFormulario = ()=> {};

inputs.forEach((input) => {
    input.addEventListener('blur', validarFormulario)
    input.addEventListener('keyup', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("enviando formulario");
})