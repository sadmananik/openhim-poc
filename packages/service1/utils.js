const fetch = require("node-fetch");

const fetchOpenhim = async () => {
  try {
    const response = await fetch("http://localhost:5001/openhim");
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

module.exports = fetchOpenhim;
