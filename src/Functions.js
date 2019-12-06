module.exports = {
  makeRequest(url) {
    console.log(`Request -> ${url}`);

    fetch(url, {
      method: "GET",
      mode: "no-cors"
    }).catch(function(err) {});
  },

  changeElementText(string, element) {
    console.log(string);
    element.innerHTML = string;
  },

  sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  },

  random(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }
};
