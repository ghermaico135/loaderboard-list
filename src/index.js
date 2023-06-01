/** @format */
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import getGameID from './module/getGameId.js';
import getItems from './module/getItem.js';
import { addItem, clearValue } from './module/addItem.js';

const submitBtn = document.querySelector('#btn-submit');
const refreshBtn = document.querySelector('#btn-score');

const gameId = JSON.parse(localStorage.getItem('gameId')) || undefined;

if (!gameId) {
  getGameID(gameId);
}
// Get Game id from the api

refreshBtn.addEventListener('click', () => {
  getItems(gameId);
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addItem(gameId);
  clearValue();
});
