const display = document.querySelector("#display");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const peopleInput = document.querySelector("#people");

// const displayInput = document.querySelector("#displayTip");
// const Input = document.querySelector("#displayTotal");

function calculateTip() {
  const billValue = parseFloat(billInput.value);
  const tipValue = parseFloat(tipInput.value);
  const peopleValue = parseFloat(peopleInput.value);
  console.log("The bill is ", billValue);
  console.log("The tip is ", tipValue);
  console.log("The number of people are ", peopleValue);
  const tipAmount = (billValue * (tipValue / 100)) / peopleValue;
  console.log(tipAmount);
  display.innerHTML = tipAmount;
}

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

calculateTip();

function displayTotal() {
  console.log("total", total);
  document.getElementById("demo").innerHTML = total;
}

// console.log("total", total);
//   document.getElementById("demo").innerHTML = total;
// }
// document.getElementById("calc").addEventListener("click", displayTotal);

// billInput.addEventListener("input", calculateTip);
// tipInput.addEventListener("input", calculateTip);
// peopleInput.addEventListener("input", calculateTip);
