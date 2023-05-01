"use strict";

import { messageRenderer } from "/js/renderers/messages.js";
import { infoProfileRenderer } from "/js/renderers/infoProfile.js";
import { usersAPI_auto } from "/js/api/_users.js"

async function main(){
    cargarInicio();
    cargarInfo();
}


async function cargarInicio(){
    let inicioContainer = document.querySelector("div.inicio-container");
    try {
        let ini = await usersAPI_auto.getAll();
        let inicio = infoProfileRenderer.asInicio(ini);
        inicioContainer.appendChild(inicio);
    } catch (err) {
        messageRenderer.showErrorMessage("Error while loading information", err);
    }
}
async function cargarInfo(){
    let infoContainer = document.querySelector("div.info-container");
    try {
        let info = await usersAPI_auto.getAll();
        let information = infoProfileRenderer.asInfo(info);
        infoContainer.appendChild(information);
    } catch (err) {
        messageRenderer.showErrorMessage("Error while loading information", err);
    }
}

document.addEventListener("DOMContentLoaded", main);

