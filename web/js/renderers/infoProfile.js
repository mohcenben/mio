"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const infoProfileRenderer = {

    asInicio: function(info){
        console.log(info);
        let html = `<div class=inicio>
                        <h1 class="title">Perfil de usuario</h1>
                        <h3 class="title">${info[0].username}</h2>
    
                        <div class="col-md-4">
                            <div class="card bg-dark text-light">
                                <img src="${info[0].photoProfile}" class="card-img-top">
                            </div>
    
                            <a href="user_profile.html">
                                <p class="photo-gallery">Ver fotos de usuario</p>
                            </a>
                        </div>
                    </div>`
        let inicio = parseHTML(html);
        return inicio;
    },

    asInfo: function(info){
        let html = `<div class=info>

                    <!-- <form id="formCambiarFoto" enctype="multipart/form-data">
                        <input type="file" id="inputFoto" name="foto" accept="image/*">
                        <button id="btnCambiarFoto" type="submit" class="btn btn-primary">Cambiar foto</button>
                    </form> -->
    
            
    
                <h2 class="title">Información personal</h2>
                <h5 class="titulo">Nombre</h5>
                <p id="nombre" class="infoPerfil">${info[0].fullname}</p>
    
                <h5 class="titulo">Fecha de nacimiento</h5>
                <p id="edad" class="infoPerfil">${info[0].dateOfBirth}</p>
    
                <h5 class="titulo">Altura</h5>
                <p id="altura" class="infoPerfil">${info[0].height}</p>
    
                <h5 class="titulo">Peso</h5>
                <p id="peso" class="infoPerfil">${info[0].wheight}</p>
    
                <h5 class="titulo">Género</h5>
                <p id="genero" class="infoPerfil">${info[0].gender}</p>
    
                <h5 class="titulo">Color de pelo</h5>
                <p id="colorPelo" class="infoPerfil">${info[0].hairColor}</p>
    
                <h5 class="titulo">Color de ojos</h5>
                <p id="colorOjos" class="infoPerfil">${info[0].eyeColor}</p>
    
                <h5 class="titulo">Biografía</h5>
                <p id="biografia" class="infoPerfil">${info[0].bio}</p>
    
                <h5 class="titulo">Código postal</h5>
                <p id="codigoPostal" class="infoPerfil">${info[0].postcodeId} </p>
    
                <h5 class="titulo">Municipio</h5>
                <p id="municipio" class="infoPerfil">${info[0].municipalityId}</p>
    
                <h5 class="titulo">Provincia</h5>
                <p id="provincia" class="infoPerfil">${info[0].provinceId}</p>
    
                <h2 class="title">Información de la cuenta</h2>
    
                <h5 class="titulo">Nombre de usuario</h5>
                <p id="nombreUsuario" class="infoPerfil">${info[0].username}</p>
    
                <h5 class="titulo">Email</h5>
                <p id="correoElectronico" class="infoPerfil">${info[0].email}</p>
    
                <h5 class="titulo">Fecha de registro</h5>
                <p id="fechaRegistro" class="infoPerfil">${info[0].registrationDate}</p>
    
                <h5 class="titulo">Fecha de baja</h5>
                <p id="fechaBaja" class="infoPerfil">${info[0].withdrawalDate}</p>
            
            
            <div>
                <button id="btnEditarPerfil" type="submit" class="btn btn-primary">Editar perfil</button>
            </div>
            </div>`
        
        let information = parseHTML(html);
        return information;
    }

}

export { infoProfileRenderer };