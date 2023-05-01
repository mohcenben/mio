"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const perfil = {
    asPerfil: function (user) {
        console.log(user[0]);
        let html = `<div class="col-md-4">
                        <div class="card bg-light text-dark">
                            <img src="${user[0].photoProfile}" class="card-img-top">
                        </div>
                        <h4 class="title">${user[0].username}</h4>
                        <p class="aficion" id="aficion">${user[0].bio}</p>
                        <div class="infoProfile" id="infoProfile">
                            <a href="info_profile.html?userId=${user[0].userId}">
                                <p class="info">
                                    Más información
                                </p>
                            </a>
                        </div>
                    </div>`

        let info = parseHTML(html);
        return info;
    }
 
}

export { perfil };

const photoRenderer = {
    asCard: function (picture) {
        let html = `<div class="col-md-4">
                    <div class="card">
                        <a href="photo_detail.html?pictureId=${picture.pictureId}"">
                            <img src="${picture.pictureURL}" class="card-img-top">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title text-center">${picture.name}</h5>
                            <p class="card-text">${picture.description}</p>
                            <a href="user_profile.html">
                                <p class="text-end">@${picture.username}</p>
                                <img src="${picture.photoProfile}" class="photo-user-avatar">
                            </a>
                        </div>
                    </div>
                </div>`
        let card = parseHTML(html);
        return card;
    },

    asDetails: function (picture) {
        let html = `<div class="photo-details">
                        <h3>${picture.name}</h3>
                        <h6>${picture.description}</h6>
                        <p><a href="user_profile.html" class="user-link">@${picture.username}</a>
                        <br>
                        <p>${picture.date}<p>
                        <hr>
                        <img src="${picture.pictureURL}" class="img-fluid">
                    </div>`;
        let photoDetails = parseHTML(html);
        return photoDetails;
    }
        
};

export { photoRenderer };
