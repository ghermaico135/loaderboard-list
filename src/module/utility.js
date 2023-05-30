/** @format */

// import store from './storage.js';

const nameInput = document.querySelector('#name-input');
const scoreInput = document.querySelector('#score-input');
const scoreListContainer = document.querySelector('#score-list');

const add = (scoreList) => {
  scoreList.push({
    name: nameInput.value,
    score: scoreInput.value,
  });

  localStorage.setItem('scoreList', JSON.stringify(scoreList));
  // setItem(scoreList);
};

const clearValue = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

const display = (scoreList) => {
  let content = '';
  scoreList.forEach((score) => {
    content += `
    <li class="score-list-item">${score.name}  : ${score.score} </li>
    `;
  });
  scoreListContainer.innerHTML = content;
  localStorage.setItem('scoreList', JSON.stringify(scoreList));
};

export { add, clearValue, display };
