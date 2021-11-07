// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// a small notice on footer
const notice = document.querySelector("footer");

const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

// Generate and count guest list from input
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    // let listItem = document.createElement("li");
    // listItem.innerText = guest;
    // guestList.append(listItem);
    // clearInput();
    addToList(guest);
  }
  clearInput();
  updateGuestCount();
});

// Clear input box after enter guest name
const clearInput = function () {
  guestInput.value = "";
};

// Add each guest name to list
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

// Count guest and notify when enough guest
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
    notice.classList.remove("hide");
  }
};

// Assign dish to each guest, no duplicate
const assignItems = function () {
  const potluckItems = [
    "chicken salad spring roll",
    "sandwich",
    "pineapple salsa",
    "pasta salad",
    "black-eyed pea salad",
    "veggie nori rolls",
    "lemon cream icebox cake",
    "muffin tin ice cream cake",
    "nutella peanut butter cookie",
    "peach tart",
    "chocolate energy bar"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

// Disable assign button after assigning is done
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
