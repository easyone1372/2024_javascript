const minus_btn = document.querySelector(".minus");
const plus_btn = document.querySelector(".plus");
const ticketSpan = document.querySelector(".ticketAmount");
const totalPriceSpan = document.querySelector(".totalPrice");

// minus_btn.addEventListener("click", () => {
//   const isMinus = Number(ticketSpan.innerText) === 0;
//   ticketSpan.innerText = isMinus
//     ? Number((ticketSpan.innerText = 0))
//     : Number(ticketSpan.innerText) - 1;
// });

plus_btn.addEventListener("click", () => {
  const ticketCount = Number(ticketSpan.innerText) + 1;
  const ticketPrice = ticketCount * 10000;

  if (ticketCount >= 10) {
    totalPriceSpan.innerText = ticketPrice * 0.8;
  } else if (ticketCount >= 5) {
    totalPriceSpan.innerText = ticketPrice * 0.9;
  } else {
    totalPriceSpan.innerText = ticketPrice * 1;
  }
  ticketSpan.innerText = Number(ticketSpan.innerText) + 1;
});

minus_btn.addEventListener("click", () => {
  const ticketCount = Number(ticketSpan.innerText) - 1;
  const ticketPrice = ticketCount * 10000;

  if (ticketCount >= 10) {
    totalPriceSpan.innerText = ticketPrice * 0.8;
    ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
  } else if (ticketCount >= 5) {
    totalPriceSpan.innerText = ticketPrice * 0.9;
    ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
  } else if (5 > ticketCount && ticketCount > 0) {
    totalPriceSpan.innerText = ticketPrice * 1;
    ticketSpan.innerText = Number(ticketSpan.innerText) - 1;
  } else {
    totalPriceSpan.innerText = 0;
    ticketSpan.innerText = 0;
  }
});
