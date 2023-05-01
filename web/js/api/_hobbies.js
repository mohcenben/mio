/*
 * DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
 * All changes done to this file will be lost upon re-running the 'silence createapi' command.
 * If you want to create new API methods, define them in a new file.
 *
 * Silence is built and maintained by the DEAL research group at the University of Seville.
 * You can find us at https://deal.us.es
 */

"use strict";

import { BASE_URL, requestOptions } from './common.js';

const hobbiesAPI_auto = {

    /** Gets all entries from 'hobbies' */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/hobbies`, requestOptions);
        return response.data;
    },

    /** Gets an entry from 'hobbies' by its primary key */
    getById: async function(hobbyId) {
        let response = await axios.get(`${BASE_URL}/hobbies/${hobbyId}`, requestOptions);
        return response.data[0];
    },

    /** Creates a new entry in 'hobbies' */
    create: async function(formData) {
        let response = await axios.post(`${BASE_URL}/hobbies`, formData, requestOptions);
        return response.data;
    },

    /** Updates an existing entry in 'hobbies' by its primary key */
    update: async function(formData, hobbyId) {
        let response = await axios.put(`${BASE_URL}/hobbies/${hobbyId}`, formData, requestOptions);
        return response.data;
    },

    /** Deletes an existing entry in 'hobbies' by its primary key */
    delete: async function(hobbyId) {
        let response = await axios.delete(`${BASE_URL}/hobbies/${hobbyId}`, requestOptions);
        return response.data;
    },
};

export { hobbiesAPI_auto };