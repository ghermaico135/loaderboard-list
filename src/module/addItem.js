/** @format */

const nameInput = document.querySelector('#name-input');
const scoreInput = document.querySelector('#score-input');

const addItem = async (gameId) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      body: JSON.stringify({
        user: nameInput.value,
        score: Number(scoreInput.value),
      }),
    },
  );

  const data = await response.json();
  return data;
};

const clearValue = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

export { addItem, clearValue };
