const userNameInput = document.getElementById("passenger-name-input");
const userKmInput = document.getElementById("trip-km-input");
const userAgeInput = document.getElementById("passenger-age-input");
const submitButton = document.getElementById("submit-button");
const basicCostperKm = 0.21;
let basicPrice;
let discount;

let ticketPrice;

const passengerName = document.getElementById("passenger-name");
let ticketDiscount = document.getElementById("ticket-discount");
const carriageNum = document.getElementById("carriage-number");
const CpCode = document.getElementById("cp-code");
const ticketCost = document.getElementById("ticket-cost");
const ticketCard = document.getElementById("ticket-card");

submitButton.addEventListener("click", function () {
  const userName = userNameInput.value;
  console.log(userName);

  const userKm = parseInt(userKmInput.value);
  console.log(userKm);

  const userAge = userAgeInput.value;
  console.log(userAge);

  basicPrice = userKm * basicCostperKm;

  if (userAge === "minorenne") {
    discount = 0.2;
    ticketDiscount.innerText = "-20% under 18";
  } else if (userAge === "over65") {
    discount = 0.4;
    ticketDiscount.innerText = "-40% over 65";
  } else {
    discount = 0;
    ticketDiscount.innerText = "Biglietto intero";
  }
  ticketPrice = (basicPrice - basicPrice * discount).toFixed(2);
  console.log(ticketPrice);

  passengerName.innerText = userName;
  carriageNum.innerText = Math.floor(Math.random() * 9 + 1);
  CpCode.innerText = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  ticketCost.innerText = ticketPrice + "€";

  ticketCard.className += "d-block";
});
