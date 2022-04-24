import Tooltip from "./rao-ui/tooltip";
// create tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

import Dropdown from "./rao-ui/dropdown";

// create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

import Tabs from "./rao-ui/tab";

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

import Snackbar from "./rao-ui/snackbar";

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("you clicked me :)");
});
