const userNameInput = document.getElementById("passenger-name-input");
const userKmInput = document.getElementById("trip-km-input");
const userAgeInput = document.getElementById("passenger-age-input");
const submitButton = document.getElementById("submit-button");
const basicCostperKm = 0.21;
let basicPrice;
let discount;

let ticketPrice;

const passengerName = document.getElementById("passenger-name");
const ticketDiscount = document.getElementById("ticket-discount");
const carriageNum = document.getElementById("carriage-number");
const CpCode = document.getElementById("cp-code");
const ticketCost = document.getElementById("ticket-cost");

submitButton.addEventListener("click", function () {
  const userName = userNameInput.value;
  console.log(userName);

  const userKm = parseInt(userKmInput.value);
  console.log(userKm);

  const userAge = userAgeInput.value;
  console.log(userAge);

  basicPrice = userKm * basicCostperKm;

  passengerName.innerText = userName;

  if (userAge == "Minorenne") {
    discount = 0.2;
    ticketPrice = basicPrice * discount;
    ticketDiscount.innerText = "-20% under 18";
  } else if (userAge == "Over65") {
    discount = 0.4;
    ticketPrice = basicPrice * discount;
    ticketDiscount.innerText = "-40% over 65";
  } else {
    discount = 1;
    ticketPrice = basicPrice * discount;
    ticketDiscount.innerText = "Biglietto intero";
  }
  console.log(ticketPrice);
});
