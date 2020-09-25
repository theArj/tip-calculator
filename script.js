function calculateTip() {
  const billamount = parseInt(document.getElementById("billamount").value);
  const serviceamount = document.getElementById("service").value;
  const peopleamount = document.getElementById("peopleamount").value;

  alert(
    `Your suggested tip amount is: ${peopleamount}per peroson. Your service feedback was: ${service}.`
  );

  if (billamount === "" || serviceamount === 0) {
    alert("Please enter value");
    return;
  }

  if (peopleamount === "" || peopleamount <= 0) {
    peopleamount = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  const total = (billamount * serviceamount) / peopleamount;
  total = Math.round(total * 100) / 100;

  total = total.toFixed(2); //rounds to two digits after decimal

  document.getElementById("totaltip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totaltip").innerHTML = "total";
document.getElementById("each").innerHTML = "each";
document.getElementById("btnClick").onclick = function () {
  calculateTip();
};

// Previously tested code:
// const display = document.querySelector("#display");
// const billInput = document.querySelector("#bill");
// const tipInput = document.querySelector("#tip");
// const peopleInput = document.querySelector("#people");

// billInput.addEventListener("input", calculateTip);
// tipInput.addEventListener("input", calculateTip);
// peopleInput.addEventListener("input", calculateTip);

// const displayInput = document.querySelector("#displayTip");
// const Input = document.querySelector("#displayTotal");

// function calculateTip() {
//   const billValue = parseFloat(billInput.value);
//   const tipValue = parseFloat(tipInput.value);
//   const peopleValue = parseFloat(peopleInput.value);
//   //   console.log("The bill is ", billValue);
//   //   console.log("The tip is ", tipValue);
//   //   console.log("The number of people are ", peopleValue);
//   const tipAmount = (billValue * (tipValue / 100)) / peopleValue;
//   console.log(tipAmount);
//   display.innerHTML = tipAmount;
// }

// calculateTip();

// function displayTotal() {
//   console.log("total", total);
//   document.getElementById("calc").innerHTML = total;
// }

// document.getElementById("demo").innerHTML = total;
// document.getElementById("calc").addEventListener("click", displayTotal);

// // billInput.addEventListener("input", calculateTip);
// // tipInput.addEventListener("input", calculateTip);
// // peopleInput.addEventListener("input", calculateTip);
