const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const meses3 = ['varios', 'elementos']

const resultado = meses.concat(meses2, meses3, 'Nuevo Valor', false, 256)
// console.log(resultado);

const resultado2 = [...meses, ...meses2, ...meses3, 'Nuevo Valor', false, 256]
console.log(resultado2);