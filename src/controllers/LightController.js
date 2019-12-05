const light = require("./LightFunctions");

const config = {
  on: "on",
  off: "off",
  low: "low",
  random: "random",
  rave: "rave",
  cycle: "cycle"
};

module.exports = {
  async light(req, res) {
    switch (req.params.state) {
      case config.on:
        light.turnOn();
        break;

      case config.off:
        light.turnOff();
        break;

      case config.low:
        light.lowLight();
        break;

      case config.random:
      case config.rave:
        light.rave();
        break;

      case config.cycle:
        light.cycle();
        break;

      default:
        light.toggle();
    }
  }
};
