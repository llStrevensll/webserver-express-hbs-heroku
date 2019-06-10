const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//Middleware: callback que se va a ejecutar simpre sin importar el url
app.use(express.static(__dirname + '/public')); //Especificar el folder estatico o publico


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

/* Archivo '/' */
app.get('/', (req, res) => {

    res.render('home', { // renderiza el archivo home.hbs, se puede enviar un objeto
        nombre: 'Angel',
        anio: new Date().getFullYear()
    });
})


/* Archivo '/about' */
app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

//lafuncion send detectara que es un objeto y automaticamente lo regresara en json