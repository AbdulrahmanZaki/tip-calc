"use strict";

//Custom function (calculateTip())
const calculate = document.getElementById("Calculate");
const each = document.getElementById("each");

function calculateTip() {
  // store the data of inputs
  let billAmount = document.getElementById("billAmount").value;
  let serviceQuality = document.getElementById("serviceQuality").value;
  let numPeople = document.getElementById("Sharing").value;

  //Quick Validation
  if (billAmount === "" || serviceQuality == 0) {
    return window.alert(
      "Please enter value into bill amount section and choose the service quality"
    ); // return is for preventing the function from continuing
  }
  //Check to see how many people sharing the bill by checinkg if the input is empty || equal to or less than 1
  if (numPeople === 0 || numPeople <= 1) {
    numPeople = 1;
    each.style.display = "none";
  } else {
    each.style.display = "inline";
  }

  // Do some math !
  let total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  console.log(total);

  //window.alert(total); For testing

  // Display the tip (totalTip div)
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the "tip amount" on load
document.getElementById("totalTip").style.display = "none"; //total tip is the div name
document.getElementById("each").style.display = "none"; //the <small> tag

calculate.addEventListener("click", calculateTip);
