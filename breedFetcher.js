const request = require("request");
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("something went wrong", error);
  } else if (response.statusCode !== 200) {
    console.log("HTTp error", response.statusCode);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("the breed your looking for do not exist");
    } else {
      console.log(data[0].description);
    }
  }
});
