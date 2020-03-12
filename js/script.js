var link = document.querySelector(".search-form-header-button-text");
var popup = document.querySelector(".form");

link.addEventListener("click", function(evt) {
                      evt.preventDefault();
popup.classList.toggle("form-hide");
                      });
