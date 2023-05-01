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

const pictureswithusersAPI_auto = {

    /** Gets all entries from 'pictureswithusers' */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/pictureswithusers`, requestOptions);
        return response.data;
    },

    /** Gets an array entries from 'pictureswithusers' by their pictureId.
        Note that this always returns an array. */
    getByPictureId: async function() {
        let response = await axios.get(`${BASE_URL}/pictureswithusers?pictureId=${pictureId}`, requestOptions);
        return response.data;
    },

    /** Gets an array entries from 'pictureswithusers' by their userId.
        Note that this always returns an array. */
    getByUserId: async function() {
        let response = await axios.get(`${BASE_URL}/pictureswithusers?userId=${userId}`, requestOptions);
        return response.data;
    },
};

export { pictureswithusersAPI_auto };