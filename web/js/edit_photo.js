"use strict";
import {picturesAPI_auto} from "/js/api/_pictures.js"
import {messageRenderer} from "/js/renderers/messages.js"

const urlParams = new URLSearchParams(window.location.search);
const pictureId = urlParams.get('pictureId');

document.addEventListener("DOMContentLoaded", main);

async function main(){
    let registerForm = document.getElementById("form-photo-upload");
    if (pictureId !== null){
        loadFotoActual(); //Editar foto
    }
    registerForm.onsubmit = handleSubirFoto;
}

async function handleSubirFoto(event){
    event.preventDefault(); //Inhibir submit
    let formData = new FormData(event.target); //Transformar en FormData
    formData.append("userId",1);
    let actual = new Date().toLocaleString("ja-JP").replaceAll("/","-");
    formData.append("date", actual);
    if(!pictureId){
        try{
            let resp = await picturesAPI_auto.create(formData);
            let lId = resp.lastId;
            window.location = `/photo_detail.html?pictureId=${lId}`;
        }catch(err){
            messageRenderer.showErrorMessage("Error loading photo: " + err.response.data.message);
        }
    } else{
        try {
            await picturesAPI_auto.update ( formData, pictureId ); // Añadir photo
            window.location = `/photo_detail.html?pictureId=${pictureId}`; // Vuelve a photo_detail.html
        } catch ( err) {
            messageRenderer.showErrorMessage(" Error loading photo: "+ err.response.data.message);
        }
    }
}

async function loadFotoActual(){
    let pageTitle = document.getElementById("page-title");
    pageTitle.textContent = `Editar foto #${pictureId}`;
    let urlInput = document.getElementById("input-url");
    let titleInput = document.getElementById("input-title");
    let descriptionInput = document.getElementById("input-description");
    let imgEdit = document.getElementById("img-edit");

    let fotoActual = await picturesAPI_auto.getById ( pictureId );
    try{
        fotoActual = await picturesAPI_auto.getById(pictureId);
        urlInput.value = fotoActual.pictureURL;
        titleInput.value = fotoActual.name;
        descriptionInput.value = fotoActual.description;
        imgEdit.src = fotoActual.pictureURL;
    }catch(err){
        messageRenderer.showErrorMessage("Error loading photo: "+ err.response.data.message);
    }
    
}