// Funcionamiento de un callback
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

function nuevoMes(mes, callback) {
    setTimeout(() => {
        meses.push(mes)
        callback()
    }, 3000) // serian 3 segundos, esta expresado en milisegundos

}


function mostrarMeses() {
    setTimeout(() => {
        meses.forEach(mes => { console.log(mes) });
    }, 3000)
}

// mostrarMeses();
nuevoMes('Mayo', mostrarMeses);

// Ver en consola como se va mostrando la informacion con el setTimeout y como se va ejecutando el codigo primero una parte y despues otra
