
let called = false;

const once = (callback) => {
    if (called) {
        console.log('Nop! solo una vez!!');
        return;
    } else {
        called = true;
        callback();
    }
};

const finDelJuego = () => {
    console.log('Ganaste!!');
    return;
};


once(finDelJuego)
once(finDelJuego)


/*

Escribir la función once, que acepte una función como parámetro, retorne el valor de la misma, pero que tenga la habilidad de saber si esa función ya fue ejecutada, en caso positivo no debería permitir que se ejecute otra vez.

function once(fn) { 
  
} 

function finDelJuego() {
 return "Ganaste!!" 
} 

const onceFindelJuego = once(finDelJuego) 
onceFindelJuego () // -> "Ganaste!!" 
onceFindelJuego () // -> Nop! solo una vez!! 

*/