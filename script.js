const unitElement = document.querySelector("#unit");
const unitButton = document.querySelector("#unitBtn");

let unit = 0;
const units = [
  "Chemistry of Life",
  "Cell Structure and Function",
  "Cellular Energetics",
  "Cell Communication and Cell Cycle",
  "Heredity",
  "Gene Expression and Regulation",
  "Natural Selection",
  "Ecology",
];

const colors = [
  "red",
  "lime",
  "fuchsia",
  "teal",
  "violet",
  "orange",
  "sky",
  "pink",
];

function CycleUnits() {
  for (let i = 0; i < units[unit].length; i++) {
    setTimeout(() => {
      unitElement.innerHTML = units[unit].slice(0, i + 1);
      unitElement.innerHTML += "|";
    }, 50 * i);
  }
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      unitElement.innerHTML = units[unit];
      if (i % 2 == 0) {
        unitElement.innerHTML += "|";
      }
    }, 50 * units[unit].length + i * 500);
  }
  for (let i = units[unit].length - 1; i >= 0; i--) {
    setTimeout(() => {
      unitElement.innerHTML = units[unit].slice(0, i);
      unitElement.innerHTML += "|";
    }, 50 * units[unit].length + 5000 + 50 * (units[unit].length - i - 1));
  }
  setTimeout(() => {
    unitButton.classList.remove(`bg-${colors[unit]}-500`);
    unitElement.classList.remove(`text-${colors[unit]}-500`);

    unit++;
    unit %= units.length;
    unitButton.innerHTML = "Jump To Unit " + (unit + 1);

    unitButton.classList.add(`bg-${colors[unit]}-500`);
    unitButton.href = "#unit-" + (unit + 1);
    unitElement.classList.add(`text-${colors[unit]}-500`);
    CycleUnits();
  }, 50 * units[unit].length + 5000 + 50 * (units[unit].length - 1) + 300);
}

window.onload = CycleUnits;
