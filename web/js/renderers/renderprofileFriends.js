'use strict';

import { parseHTML } from '../utils/parseHTML.js';

function getProfileDiv() {
    return document.getElementById("profile");
}

const profileRenderer = {

    renderProfile: function (user) {
        let html = `
            <div class="card col-md-4">
                <img src="${user.photo}" class="card-img-top" alt="User photo">
                <div class="card-body">
                    <h5 class="card-title">${user.fullname}</h5>
                    <p class="card-text">${user.bio}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Username:</strong> ${user.username}</li>
                    <li class="list-group-item"><strong>Email:</strong> ${user.email}</li>
                    <li class="list-group-item"><strong>Location:</strong> ${user.location}</li>
                    <li class="list-group-item"><strong>Website:</strong> <a href="${user.website}" target="_blank">${user.website}</a></li>
                </ul>
            </div>
        `;

        let profileDiv = getProfileDiv();

        if (profileDiv === null) {
            console.error("You tried to render a profile, however, a " +
                `<div id="${profileDivID}"> could not be found in your view to show it there:`);
            console.error(user);
            return;
        }

        let profileElem = parseHTML(html);
        profileDiv.appendChild(profileElem);
    }
};

export { profileRenderer };
