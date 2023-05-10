'use strict';

import { messageRenderer } from './renderers/messages.js';
import { profileRenderer } from './renderers/renderprofileFriends.js';

const BASE_URL = '/api/v1';

function displayFriendship(friendship) {
  profileRenderer(friendship.friend);
  document.querySelector('#status').textContent = friendship.status;
}

function displayErrorMessage(msg, err) {
  messageRenderer.showErrorMessage(msg, err);
}

function displayFriendRequestError(msg, err) {
  messageRenderer.showErrorMessage(msg, err);
}

function displaySuccessMessage(msg) {
  messageRenderer.showSuccessMessage(msg);
}

async function sendFriendRequest() {
  const friendID = document.querySelector('#friend-id').value;
  const url = `${BASE_URL}/friend-request/${friendID}`;

  try {
    const response = await fetch(url, {
      method: 'POST'
    });

    if (response.ok) {
      displaySuccessMessage('Friend request sent successfully!');
      document.querySelector('#send-friend-request-btn').style.display = 'none';
      document.querySelector('#cancel-friend-request-btn').style.display = 'block';
      document.querySelector('#status').textContent = 'Pending';
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    displayFriendRequestError('Error sending friend request!', err);
  }
}

async function cancelFriendRequest() {
  const friendID = document.querySelector('#friend-id').value;
  const url = `${BASE_URL}/friend-request/${friendID}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE'
    });

    if (response.ok) {
      displaySuccessMessage('Friend request canceled!');
      document.querySelector('#send-friend-request-btn').style.display = 'block';
      document.querySelector('#cancel-friend-request-btn').style.display = 'none';
      document.querySelector('#status').textContent = '';
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    displayFriendRequestError('Error canceling friend request!', err);
  }
}

async function acceptFriendRequest() {
  const friendID = document.querySelector('#friend-id').value;
  const url = `${BASE_URL}/friend-request/${friendID}/accept`;

  try {
    const response = await fetch(url, {
      method: 'PUT'
    });

    if (response.ok) {
      displaySuccessMessage('Friend request accepted!');
      document.querySelector('#accept-friend-request-btn').style.display = 'none';
      document.querySelector('#decline-friend-request-btn').style.display = 'none';
      document.querySelector('#status').textContent = 'Friends';
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    displayErrorMessage('Error accepting friend request!', err);
  }
}

async function declineFriendRequest() {
  const friendID = document.querySelector('#friend-id').value;
  const url = `${BASE_URL}/friend-request/${friendID}/decline`;

  try {
    const response = await fetch(url, {
      method: 'PUT'
    });

    if (response.ok) {
      displaySuccessMessage('Friend request declined!');
      document.querySelector('#accept-friend-request-btn').style.display = 'none';
      document.querySelector('#decline-friend-request-btn').style.display = 'none';
      document.querySelector('#status').textContent = '';
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    displayErrorMessage('Error declining friend request!', err);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#send-friend-request-btn').addEventListener('click', sendFriendRequest);
  document.querySelector('#cancel-friend-request-btn').addEventListener('click', cancelFriendRequest);
  document.querySelector('#accept-friend-request-btn').addEventListener('click', acceptFriendRequest);
  document.querySelector('#decline-friend-request-btn').addEventListener('click', declineFriendRequest);
});