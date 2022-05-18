
const bodyDiv = document.querySelector('.body');

const aplicarDescuento = new Promise((resolve, reject) => {
    const dto = true;
    if (dto) {
        resolve('Descuento aplicado');
    } else {
        reject('Descuento no aplicado');
    }
});

aplicarDescuento
    .then(resultado => {
        const parrafo = document.createElement('p');
        parrafo.textContent = resultado;
        bodyDiv.appendChild(parrafo);
        console.log(resultado)
    })
    .catch(error => console.log(error));


// console.log(aplicarDescuento);

// Existen 3 estados de las promesas: 
/*
fulfilled = cuando la promesa se cumplio
rejected = cuando la promesa no se cumplio
pending = cuando la promesa queda pendiente, no se cumplio pero ampoco se rechazo
*/