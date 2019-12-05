const request = require("request");
const config = require("./src/config");

const baseHttp = "http://localhost/light";

const estado = document.querySelector("#header");

const on = document.querySelector("#on");
const off = document.querySelector("#off");
const low = document.querySelector("#low");
const cycle = document.querySelector("#cycle");
const rave = document.querySelector("#rave");

on.addEventListener("click", () => {
  changeStateText(config.states.on);
  makeRequest(`${baseHttp}/${config.states.on}`);
});

off.addEventListener("click", () => {
  changeStateText(config.states.off);
  makeRequest(`${baseHttp}/${config.states.off}`);
});

low.addEventListener("click", () => {
  changeStateText(config.states.low);
  makeRequest(`${baseHttp}/${config.states.low}`);
});

cycle.addEventListener("click", () => {
  changeStateText(config.states.cycle);
  makeRequest(`${baseHttp}/${config.states.cycle}`);
});

rave.addEventListener("click", () => {
  changeStateText(config.states.rave);
  makeRequest(`${baseHttp}/${config.states.rave}`);
});

function makeRequest(url) {
  window.stop();
  request(url, { json: true }, (err, res, body) => {});
}

function changeStateText(string) {
  console.log(string);
  estado.innerHTML = string;
}
