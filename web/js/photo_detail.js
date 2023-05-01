"use strict";
import { photoRenderer } from "/js/renderers/userProfile.js";
import { picturesAPI_auto } from "/js/api/_pictures.js";

import { messageRenderer } from "/js/renderers/messages.js";

// Get the ID of the photo to load from the URL params
let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("pictureId");
console.log("The photo ID to load is: " + photoId);
async function main() {
    // Check that we have an ID before doing anything else
    if (photoId === null) {
        messageRenderer.showErrorMessage("Please, provide a photoId");
        return;
    }
    cargarDetallesFoto();

    let deleteBtn = document.querySelector("#button-delete");
	deleteBtn.onclick = borrarFoto;

	let editBtn = document.querySelector("#button-edit");
	editBtn.onclick = editarFoto;
}
async function cargarDetallesFoto() {
    let photoContainer = document.querySelector("#photo-details-column");
    try {
        let photo = await picturesAPI_auto.getById(photoId);
        let photoDetails = photoRenderer.asDetails(photo);
        photoContainer.appendChild(photoDetails);
    } catch (err) {
        messageRenderer.showErrorMessage("Error loading photo ", err.response.data.message);
    }
}

async function borrarFoto() { // Borrará foto
	let answer = confirm("Do you want to delete this photo?");
	if (answer) {
		try {
			await picturesAPI_auto.delete ( photoId ); // Borrar mediante endPoint photos.delete
			window.location = "/user_profile.html"; // Vuelve a la galería
		} catch(err) {
			messageRenderer.showErrorMessage("Error deleting photo " + err.response.data.message);
		} 
	}
}

function editarFoto() {
	window.location = `/edit_photo.html?pictureId=${photoId}`; // Recircular a editPhoto
}
document.addEventListener("DOMContentLoaded", main);