// index.js

// Crear elementos del head
const head = document.createElement("head");

const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");

const metaHttpEquiv = document.createElement("meta");
metaHttpEquiv.setAttribute("http-equiv", "X-UA-Compatible");
metaHttpEquiv.setAttribute("content", "IE=edge");

const metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

const linkStyle = document.createElement("link");
linkStyle.setAttribute("rel", "stylesheet");
linkStyle.setAttribute("href", "css/style.css");

const linkIcon = document.createElement("link");
linkIcon.setAttribute("rel", "icon");
linkIcon.setAttribute("href", "img/flowers.png");
linkIcon.setAttribute("type", "image/x-icon");

const title = document.createElement("title");
title.textContent = "Flowers";

// Agregar elementos al head
head.appendChild(metaCharset);
head.appendChild(metaHttpEquiv);
head.appendChild(metaViewport);
head.appendChild(linkStyle);
head.appendChild(linkIcon);
head.appendChild(title);

// Crear elementos del body
const body = document.createElement("body");

// Crear el contenedor de saludos
const greetingsDiv = document.createElement("div");
greetingsDiv.classList.add("greetings");

const letters = ["M", "A", "R", "I", "A", "J", "O", "S", "E"];
letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${index * 0.2}s`;
    greetingsDiv.appendChild(span);
});

// Crear el contenedor de descripción
const descriptionDiv = document.createElement("div");
descriptionDiv.classList.add("description");

const descriptionText = document.createElement("span");
descriptionText.textContent = "ESTE DETALLE ES PARA TI, AUNQUE ESTEMOS SEPARADOS, QUISE HACERTE ALGO ESPECIAL :)";
descriptionDiv.appendChild(descriptionText);

// Crear el botón
const buttonDiv = document.createElement("div");
buttonDiv.classList.add("button");

const button = document.createElement("button");
button.classList.add("botones");

const link = document.createElement("a");
link.setAttribute("href", "flower.html");
link.style.color = "#fff";
link.textContent = "CLICK AQUÍ";
button.appendChild(link);
buttonDiv.appendChild(button);

// Agregar elementos al body
body.appendChild(greetingsDiv);
body.appendChild(descriptionDiv);
body.appendChild(buttonDiv);

// Agregar head y body al documento
document.documentElement.appendChild(head);
document.documentElement.appendChild(body);

// Lógica para eliminar la clase "container" al cargar la página
document.body.classList.remove("container");
