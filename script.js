const inputBill = document.getElementById("input-bill");
const inputTip = document.getElementById("input-tip");
const inputPeople = document.getElementById("input-people");
const displayTip = document.getElementById("display-tip");
const displayTotal = document.getElementById("display-total");
const displayEach = document.getElementById("display-each");

let bill = 0;

inputPeople.addEventListener("change", handleBill);
inputBill.addEventListener("change", handleBill);
inputTip.addEventListener("change", handleBill);

function handleBill() {
  const percent = parseInt(inputTip.value);
  const bill = parseFloat(inputBill.value);
  const people = parseInt(inputPeople.value);

  const tip = (bill * percent) / 100;
  const total = bill + tip;
  const per_person = total / people;

  console.log(total);
  console.log(per_person);

  console.log(percent, bill, people, tip, total, per_person);

  displayTip.innerHTML = tip.toFixed(2);
  displayTotal.innerHTML = total.toFixed(2);
  displayEach.innerHTML = per_person.toFixed(2);
}
