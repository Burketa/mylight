const lightIp = "192.168.100.14";

const TPLSmartDevice = require("tplink-lightbulb");
const light = new TPLSmartDevice(lightIp);

const cmd = require("node-cmd");

const transition_period = 100;
const transition_period_offset = 50;
const transition_period_total = transition_period + transition_period_offset;

const on_off_period = 200;

const randomHex = require("random-hexadecimal");

module.exports = {
  async turnOn(req, res) {
    light.power(true, on_off_period, {
      saturation: 0,
      brightness: 80,
      color_temp: 3700
    });
    return true;
  },

  async turnOff(req, res) {
    light.power(false, on_off_period);
    return true;
  },

  async breathe(req, res) {
    let i = 0;
    do {
      light
        .send({
          "smartlife.iot.smartbulb.lightingservice": {
            transition_light_state: {
              hue: i,
              transition_period: transition_period
            }
          }
        })
        .catch(e => console.error(e));

      i++;

      await sleep(transition_period_total);
    } while (true);
  },

  async random(req, res) {
    do {
      let hex = randomHex().slice(2, 8);

      let command = `tplight -t ${transition_period} hex ${lightIp} "${hex}`;

      console.log(`"${command}"`);
      cmd.run(command);

      await sleep(transition_period_total);
    } while (true);
  }
};

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
