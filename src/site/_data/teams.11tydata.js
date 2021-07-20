const fetch = require("node-fetch");

module.exports = async () => {
  const getTeams = async () => {
    const response = await fetch(
      "https://free-nba.p.rapidapi.com/teams",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
        },
      }
    );
    const json = await response.json();
    console.log(json.data)
    return json.data;
  };
  return await getTeams();
};

