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

const postcodesAPI_auto = {

    /** Gets all entries from 'postcodes' */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/postcodes`, requestOptions);
        return response.data;
    },

    /** Gets an entry from 'postcodes' by its primary key */
    getById: async function(postcodeId) {
        let response = await axios.get(`${BASE_URL}/postcodes/${postcodeId}`, requestOptions);
        return response.data[0];
    },

    /** Creates a new entry in 'postcodes' */
    create: async function(formData) {
        let response = await axios.post(`${BASE_URL}/postcodes`, formData, requestOptions);
        return response.data;
    },

    /** Updates an existing entry in 'postcodes' by its primary key */
    update: async function(formData, postcodeId) {
        let response = await axios.put(`${BASE_URL}/postcodes/${postcodeId}`, formData, requestOptions);
        return response.data;
    },

    /** Deletes an existing entry in 'postcodes' by its primary key */
    delete: async function(postcodeId) {
        let response = await axios.delete(`${BASE_URL}/postcodes/${postcodeId}`, requestOptions);
        return response.data;
    },
};

export { postcodesAPI_auto };