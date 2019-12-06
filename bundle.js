(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./src/Functions":2,"./src/config":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
module.exports = {
  ip: "192.168.100.14",
  baseUrl: "http://localhost/light",
  on_off_period: 200,
  transition_period: 75,
  transition_period_offset: 75,
  states: {
    on: "on",
    off: "off",
    low: "low",
    random: "random",
    rave: "rave",
    cycle: "cycle",
    hue: "hue"
  }
};

},{}]},{},[1]);
