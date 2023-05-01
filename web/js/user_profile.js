"use strict";


import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js"
import { perfil } from "/js/renderers/userProfile.js"
import { picturesAPI_auto } from "/js/api/_pictures.js";
import { usersAPI_auto } from "/js/api/_users.js";


async function main() {
    cargarInfo();
    cargarFotos();
}

async function cargarFotos() {
    let galleryContainer = document.querySelector("div.photo-container");
    try {
        let photos = await picturesAPI_auto.getAll();
        let cardGallery = galleryRenderer.asCardGallery(photos);
        galleryContainer.appendChild(cardGallery);
    } catch (err) {
        messageRenderer.showErrorMessage("Error while loading photos", err);
    }
}
async function cargarInfo() {
    let moreInfoContainer = document.querySelector("div.info-container");
    try {
        let info = await usersAPI_auto.getAll();
        let moreInfo = perfil.asPerfil(info);
        moreInfoContainer.appendChild(moreInfo);
    } catch (err) {
        messageRenderer.showErrorMessage("Error while loading info", err);
    }
}

document.addEventListener("DOMContentLoaded", main);

/*
function agregarFotos(){
    let container = document.getElementById("row");
    
    //objetos
    let photo1 = {
        title: "Focus",
        description: "",
        user: "jessicahawkings95",
        url: "images/JessicaHawkings3.jpg",
    };

    let photo2 = {
        title: "Race Week!!",
        description: "",
        user: "jessicahawkings95",
        url: "images/JessicaHawkings4.jpg",
    };

    let photo3 = {
        title: "Ready for the new season!!",
        description: "",
        user: "jessicahawkings95",
        url: "images/JessicaHawkings2.jpg",
    };

    //renderizador de fotos
    let card1 = photoRenderer.asCard(photo1);
    let card2 = photoRenderer.asCard(photo2);
    let card3 = photoRenderer.asCard(photo3);
    
    //agregar las fotos
    container.appendChild(card1);   
    container.appendChild(card2);
    container.appendChild(card3);   
}

document.addEventListener("DOMContentLoaded", agregarFotos);
*/



// user_profile.js

// Función para cambiar el campo de texto al darle clic al botón de editar
function editarAficion() {
    var aficionElement = document.getElementById('aficion');
    var editButton = document.getElementById('editButton');

    // Habilitar edición del campo de texto
    aficionElement.contentEditable = true;
    aficionElement.focus();

    // Cambiar texto del botón a "Guardar" y asignarle función
    editButton.innerHTML = "Guardar";
    editButton.onclick = guardarAficion;
}

// Función para guardar la afición al darle clic al botón de guardar
function guardarAficion() {
    var aficionElement = document.getElementById('aficion');
    var editButton = document.getElementById('editButton');

    // Deshabilitar edición del campo de texto
    aficionElement.contentEditable = false;

    // Cambiar texto del botón a "Editar" y asignarle función
    editButton.innerHTML = "Editar";
    editButton.onclick = editarAficion;
}




