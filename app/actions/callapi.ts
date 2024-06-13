"use server";
import axios from "axios";
import exp from "constants";
const accessToken = process.env.accessToken; //"fca03617ae8988ba1b6082f25d2b1cdeb54a0084";
const endpoint = process.env.endpoint || "https://api-ssl.bitly.com/v4/shorten"; //"https://api-ssl.bitly.com/v4/shorten";

const domain = "bit.ly";

let shortenedLink = "Initial";

let error = false;

export async function shortenLink(long_url: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const data = {
    domain,
    long_url,
  };
  try {
    const response = await axios.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    shortenedLink = response.data.link;
    console.log(response.data.link);
    return shortenedLink;
  } catch (error) {
    console.error("Error in fetch operation:", error);
  }
  console.log(accessToken);
}

export async function setShortenedLink(str: string) {
  shortenedLink = str;
}

export async function getShortenedLink() {
  return shortenedLink;
}

export async function getError() {
  return error;
}

export async function setError(isError: boolean) {
  error = isError;
}
