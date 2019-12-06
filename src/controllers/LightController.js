const config = require("../config");
const light = require("./LightFunctions");

module.exports = {
  light(req, res) {
    switch (req.params.state) {
      case config.states.on:
        light.turnOn();
        break;

      case config.states.off:
        light.turnOff();
        break;

      case config.states.low:
        light.lowLight();
        break;

      case config.states.random:
      case config.states.rave:
        light.rave();
        break;

      case config.states.cycle:
        light.cycle();
        break;
    }

    res.send("ok");
  },

  hue(req, res) {
    light.hue(req.params.value);

    res.send("ok");
  }
};
