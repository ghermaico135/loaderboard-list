/** @format */
import './style.css';
import store from './module/storage.js';
import { add, clearValue, display } from './module/utility.js';

const submitBtn = document.querySelector('#btn-submit');

window.addEventListener('load', () => {
  display(store.scoreList);
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  add(store.scoreList);
  clearValue();
  display(store.scoreList);
});
