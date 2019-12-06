//Imports
const lightConfig = require("../config");
const functions = require("../Functions");
const TPLSmartDevice = require("tplink-lightbulb");

//Inits
const light = new TPLSmartDevice(lightConfig.ip);

const transition_period_total =
  lightConfig.transition_period + lightConfig.transition_period_offset;

let isBreathing = false;
let isRandom = false;

//Funcs
module.exports = {
  turnOn() {
    isBreathing = false;
    isRandom = false;

    light.power(true, lightConfig.on_off_period, {
      color_temp: 3700,
      saturation: 0,
      brightness: 80
    });
  },

  turnOff() {
    isBreathing = false;
    isRandom = false;

    light.power(false, lightConfig.on_off_period);
  },

  lowLight() {
    isRandom = false;
    isBreathing = false;

    light.power(true, lightConfig.on_off_period, {
      saturation: 0,
      brightness: 20,
      color_temp: 3700
    });
  },

  hue(value) {
    isBreathing = false;
    isRandom = false;

    console.log(`Hue -> ${value}`);

    light
      .power(true, lightConfig.transition_period, {
        color_temp: 0,
        saturation: 100,
        brightness: 10,
        hue: parseInt(value)
      })
      .catch(err => console.error(err));
  },

  async cycle() {
    isBreathing = true;
    isRandom = false;

    let i = 0;
    do {
      light
        .power(true, lightConfig.transition_period, {
          color_temp: 0,
          saturation: 100,
          brightness: 10,
          hue: i
        })
        .catch(err => console.error(err));

      i++;
      i = i > 360 ? 0 : i;

      await functions.sleep(transition_period_total);
    } while (isBreathing);
  },

  async rave() {
    isRandom = true;
    isBreathing = false;

    do {
      let value = functions.random(0, 360);

      light
        .power(true, lightConfig.transition_period, {
          color_temp: 0,
          saturation: 100,
          brightness: 30,
          hue: value
        })
        .catch(err => console.error(err));

      await functions.sleep(transition_period_total);
    } while (isRandom);
  }
};
