// flower.js

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
linkStyle.setAttribute("href", "css/main.css");

const linkIcon = document.createElement("link");
linkIcon.setAttribute("rel", "icon");
linkIcon.setAttribute("href", "img/flowers.png");
linkIcon.setAttribute("type", "image/x-icon");

const title = document.createElement("title");
title.textContent = "Flower";

// Agregar elementos al head
head.appendChild(metaCharset);
head.appendChild(metaHttpEquiv);
head.appendChild(metaViewport);
head.appendChild(linkStyle);
head.appendChild(linkIcon);
head.appendChild(title);

// Crear elementos del body
const body = document.createElement("body");
body.classList.add("container");

// Crear el elemento de audio
const audio = document.createElement("audio");
audio.setAttribute("src", "sound/ChristianBasso&HaienQiu-Flowers.mp3");
audio.setAttribute("autoplay", "");
body.appendChild(audio);

// Crear el div para las letras de la canción
const lyricsDiv = document.createElement("div");
lyricsDiv.setAttribute("id", "lyrics");
body.appendChild(lyricsDiv);

// Crear el título principal
const h1 = document.createElement("h1");
h1.classList.add("titulo");
h1.textContent = "Puede que estemos separados, pero recuerda que te amo mucho y no serás espectadora, mi hermosa.";
body.appendChild(h1);

// Crear el div de la noche
const nightDiv = document.createElement("div");
nightDiv.classList.add("night");
body.appendChild(nightDiv);

// Crear el contenedor de flores
const flowersDiv = document.createElement("div");
flowersDiv.classList.add("flowers");

// Función para crear una flor
function createFlower(flowerClass) {
    const flower = document.createElement("div");
    flower.classList.add("flower", flowerClass);

    const leafs = document.createElement("div");
    leafs.classList.add("flower__leafs", `flower__leafs--${flowerClass.split("--")[1]}`);

    for (let i = 1; i <= 4; i++) {
        const leaf = document.createElement("div");
        leaf.classList.add("flower__leaf", `flower__leaf--${i}`);
        leafs.appendChild(leaf);
    }

    const whiteCircle = document.createElement("div");
    whiteCircle.classList.add("flower__white-circle");
    leafs.appendChild(whiteCircle);

    for (let i = 1; i <= 8; i++) {
        const light = document.createElement("div");
        light.classList.add("flower__light", `flower__light--${i}`);
        leafs.appendChild(light);
    }

    const line = document.createElement("div");
    line.classList.add("flower__line");

    for (let i = 1; i <= 6; i++) {
        const lineLeaf = document.createElement("div");
        lineLeaf.classList.add("flower__line__leaf", `flower__line__leaf--${i}`);
        line.appendChild(lineLeaf);
    }

    flower.appendChild(leafs);
    flower.appendChild(line);
    return flower;
}

// Agregar flores al contenedor
flowersDiv.appendChild(createFlower("flower--1"));
flowersDiv.appendChild(createFlower("flower--2"));
flowersDiv.appendChild(createFlower("flower--3"));

// Agregar el contenedor de flores al body
body.appendChild(flowersDiv);

// Agregar scripts al final del body
const scriptAnim = document.createElement("script");
scriptAnim.setAttribute("src", "anim.js");

const scriptMain = document.createElement("script");
scriptMain.setAttribute("src", "main.js");

body.appendChild(scriptAnim);
body.appendChild(scriptMain);

// Agregar head y body al documento
document.documentElement.appendChild(head);
document.documentElement.appendChild(body);
