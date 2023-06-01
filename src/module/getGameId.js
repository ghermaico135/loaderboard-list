const getGameID = async (gameId) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    body: JSON.stringify({ name: 'microverse' }),
  });
  const data = await response.json();
  gameId = data.result.slice(14, 34);

  localStorage.setItem('gameId', JSON.stringify(gameId));
};

export default getGameID;
