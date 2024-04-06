import { createHand, createAllTime, mutilpleAppendChild } from "./util.js";

const AnalogClock = ($container) => {
  // do something!
  const handHour = createHand("hour");
  const handMinute = createHand("minute");
  const handSec = createHand("second");

  mutilpleAppendChild($container, [
    handHour,
    handMinute,
    handSec,
    ...createAllTime(),
  ]);

  setInterval(() => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const degH = hours * (360 / 12) + minutes * (360 / 12 / 60);
    const degM = minutes * (360 / 60);
    const degS = seconds * (360 / 60);

    handHour.style.setProperty("--deg", `${degH}`);
    handMinute.style.setProperty("--deg", `${degM}`);
    handSec.style.setProperty("--deg", `${degS}`);
    
  }, 100);
};

export default AnalogClock;
