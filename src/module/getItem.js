/** @format */
const scoreListContainer = document.querySelector('#score-list');

// display

const display = (scoreList) => {
  let content = '';
  scoreList.forEach((score) => {
    content += `
<li class="score-list-item">${score.user}  : ${score.score} </li>`;
  });
  scoreListContainer.innerHTML = content;
};

// getItem
const getItems = async (gameId) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
  );
  const data = await response.json();

  display(data.result);
};

export default getItems;
