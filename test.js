const axios = require("axios");
const { headers } = require("next/headers");
const accessToken = "fca03617ae8988ba1b6082f25d2b1cdeb54a0084";
const endpoint = "https://api-ssl.bitly.com/v4/shorten";
const long_url = "https://dev.bitly.com/";
const group_guid = "Ba1bc23dE4F";
const domain = "bit.ly";

const data = {
  domain: "bit.ly",
  long_url: "https://dev.bitly.com/",
};

async function postData(endpoint = "", data = {}) {
  try {
    const response = await axios.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const shortenedLink = response.data.link;
    console.log(response.data.link);
  } catch (error) {
    console.error("Error in fetch operation:", error);
  }
}

postData(endpoint, data);
