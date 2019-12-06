//Imports
const config = require("./src/config");
const functions = require("./src/Functions");

//References
const header = document.querySelector("#header");

const on = document.querySelector("#on");
const off = document.querySelector("#off");
const low = document.querySelector("#low");
const cycle = document.querySelector("#cycle");
const rave = document.querySelector("#rave");

const hue = document.querySelector("#hue");

//Listeners

on.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.on}`);
  functions.changeStateText(config.states.on, header);
});

off.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.off}`);
  functions.changeStateText(config.states.off, header);
});

low.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.low}`);
  functions.changeStateText(config.states.low, header);
});

cycle.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.cycle}`);
  functions.changeStateText(config.states.cycle, header);
});

rave.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.rave}`);
  functions.changeStateText(config.states.rave, header);
});

hue.addEventListener("change", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.hue}/${hue.value}`);
  functions.changeStateText(hue.value, header);
});
