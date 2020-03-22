var link = document.querySelector(".search-form-header-button-text");
var popup = document.querySelector(".form");

var form = popup.querySelector("form");
var dateArrival = popup.querySelector("[name=dateArrival]");
var dateDeparture = popup.querySelector("[name=dateDeparture]");
var numberAdults = popup.querySelector("[name=numberAdults]");
var numberChildren = popup.querySelector("[name=numberChildren]");

var isStorageSupport;
var numberAdultsStorage = "";
var numberChildrenStorage = "";

try {
  numberAdultsStorage = localStorage.getItem("numberAdults");
  numberChildrenStorage = localStorage.getItem("numberChildren");
  isStorageSupport = true;
} catch (err) {
  isStorageSupport = false;
}

if (isStorageSupport) {
  numberAdults.value = numberAdultsStorage;
  numberChildren.value = numberChildrenStorage;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-hide");
  dateArrival.focus();
});

form.addEventListener("submit", function (evt) {
  if (!dateArrival.value
    || !dateDeparture.value
    || !numberAdults.value
    || !numberChildren.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно заполнить все поля");
  } else {
    localStorage.setItem("numberAdults", numberAdults.value);
    localStorage.setItem("numberChildren", numberChildren.value);
  }
});

document.querySelector(".map-picture").classList.add("map-pic-hidden");
