import * as UI from './interfaz.js'

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    async consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        // Acá va el Spinner
        UI.divResultado.innerHTML = '<div class="loader"></div>'
        //Metodo ASYNC/AWAIT
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const { lyrics } = resultado
            if (lyrics) {
                UI.divResultado.textContent = lyrics
                UI.headingResultado.textContent = `Cancion ${this.cancion.toUpperCase()} de ${this.artista.toUpperCase()}`
            } else {
                UI.divMensajes.textContent = 'Cancion no Encontrada'
                UI.divMensajes.classList.add('error')
                UI.divResultado.textContent = ' '
                setTimeout(() => {
                    UI.divMensajes.textContent = ' '
                    UI.divMensajes.classList.remove('error')
                }, 3000);
            }
        } catch (error) {
            console.log(error);
        }

    }
}

// Mostrar de mejor manera en el DOM y que al no cargar datos muestre los errores
// Mejorar el spinner
// Utilizar async/await

export default API