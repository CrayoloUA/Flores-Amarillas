// server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos (CSS, imágenes, sonidos, etc.)
app.use(express.static("public"));

// Ruta para la página principal (index.js)
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/css/style.css">
            <link rel="icon" href="/img/flowers.png" type="image/x-icon">
            <title>Flowers</title>
        </head>
        <body>
            <script src="/js/index.js"></script>
        </body>
        </html>
    `);
});

// Ruta para la página de flores (flower.js)
app.get("/flower", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/css/main.css">
            <link rel="icon" href="/img/flowers.png" type="image/x-icon">
            <title>Flower</title>
        </head>
        <body class="container">
            <script src="/js/flower.js"></script>
        </body>
        </html>
    `);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});