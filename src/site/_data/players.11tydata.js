const fetch = require("node-fetch");
module.exports = async () => {
  const getPlayers = async () => {
    const response = await fetch(
      "https://free-nba.p.rapidapi.com/players?per_page=25&page=0",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
        },
      }
    );
    const json = await response.json();
    return json.data;
  };
  return await getPlayers();
};
