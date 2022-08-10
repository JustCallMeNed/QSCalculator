import { useState } from "react";
import display from "../src/App.js";
// eslint-disable-next-line react-hooks/rules-of-hooks
let [active, setActive] = useState(false);

setActive(active);
// eslint-disable-next-line no-lone-blocks
{
  if (display.toString === "") {
    active = false;
  } else if (display.toString[0] === "*" || "/") {
    active = false;
  } else if (display.toString[0] === "0") {
    active = false;
  } else {
    active = true;
  }
}
