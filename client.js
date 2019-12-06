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

const hueLabel = document.querySelector("#hue-label");
const hueSlider = document.querySelector("#hue-slider");

//Listeners

on.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.on}`);
  functions.changeElementText(config.states.on, header);
});

off.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.off}`);
  functions.changeElementText(config.states.off, header);
});

low.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.low}`);
  functions.changeElementText(config.states.low, header);
});

cycle.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.cycle}`);
  functions.changeElementText(config.states.cycle, header);
});

rave.addEventListener("click", () => {
  functions.makeRequest(`${config.baseUrl}/${config.states.rave}`);
  functions.changeElementText(config.states.rave, header);
});

hueSlider.addEventListener("change", () => {
  functions.makeRequest(
    `${config.baseUrl}/${config.states.hue}/${hueSlider.value}`
  );
  functions.changeElementText(hueSlider.value, hueLabel);
});
