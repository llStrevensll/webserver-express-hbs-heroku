const http = require('http');

/**Crear servidor */
http.createServer((req, res) => { //recibe un callback- tanto los request(solicitudes) como las respuestas

        //Se puede regresar un json como un servicio
        res.writeHead(200, { 'Content-Type': 'application/json' }); //Status:200->realizado correctamente

        let salida = { //objeto
            nombre: 'angel',
            edad: 21,
            url: req.url
        }

        res.write(JSON.stringify(salida)); //formato json
        res.end();
    })
    .listen(8080);
/**Despues de crear el servidor se debe especificar que puerto escuchara con listen*/

console.log('Escuchando el puerto 8080');