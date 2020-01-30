require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    res.json('get usuario');
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (!body.nombre) {
        res.status(400).json({
            ok: false,
            mensaje: 'Nombre es requerido'
        });

    } else {
        res.json({
            usuario: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        status: {
            code: 200,
            response: 'ok'
        },
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});