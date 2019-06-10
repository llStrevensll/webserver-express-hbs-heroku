//helpers-> funcion que se activa cuando el templeate lo requiera
const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});


hbs.registerHelper('capitalizar', (texto) => { //Primera letra en mayuscula y otras en minuscula

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
})