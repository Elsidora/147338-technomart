//.modal-cart

var modalCartLink = document.querySelectorAll(".item-buy");

var modalCart = document.querySelector(".modal-cart");

var modalCartClose = modalCart.querySelector(".modal-cart-close");

var overlay = document.querySelector(".overlay");

for (var i = 0; i < modalCartLink.length; i++) {
  modalCartLink[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalCart.classList.add("modal-cart-show");
    overlay.classList.add("overlay-show");
  });

  modalCartClose.addEventListener("click", function(event) {
  	event.preventDefault();
  	modalCart.classList.remove("modal-cart-show");
  	overlay.classList.remove("overlay-show");
  });

  overlay.addEventListener("click", function(event){
  	event.preventDefault();
  	modalCart.classList.remove("modal-cart-show");
  	overlay.classList.remove("overlay-show");
  });

  window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalCart.classList.contains("modal-cart-show")) {
      modalCart.classList.remove("modal-cart-show");
      overlay.classList.remove("overlay-show");
    }
  }
});
};

// .modal-write-us

var writeUsLink = document.querySelector(".contacts-email-btn");

var writeUsModal = document.querySelector(".modal-write-us");

var writeUsClose = writeUsModal.querySelector(".write-us-close");

var writeUsForm = writeUsModal.querySelector("form");

var writeUsName = writeUsModal.querySelector("[name=name]");

var writeUsEmail = writeUsModal.querySelector("[name=email]");

var writeUsMessage = writeUsModal.querySelector("[name=message]");

writeUsLink.addEventListener("click", function(event) {
  event.preventDefault();
  writeUsModal.classList.add("write-us-show");
  overlay.classList.add("overlay-show");
  writeUsName.focus();
});

writeUsClose.addEventListener("click", function(event) {
  event.preventDefault();
  writeUsModal.classList.remove("write-us-show");
  writeUsModal.classList.remove("write-us-error");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function(event){
  event.preventDefault();
  writeUsModal.classList.remove("write-us-show");
  writeUsModal.classList.remove("write-us-error");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (writeUsModal.classList.contains("write-us-show")) {
      writeUsModal.classList.remove("write-us-show");
      writeUsModal.classList.remove("write-us-error");
      overlay.classList.remove("overlay-show");
    }
  }
});

writeUsForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {
          event.preventDefault();
          writeUsModal.classList.remove("write-us-error");
          writeUsModal.offsetWidth = writeUsModal.offsetWidth;
          writeUsModal.classList.add("write-us-error");
        }
      });

// .modal-map

var modalMap = document.querySelector(".modal-map");

var modalMapLink = document.querySelector(".contacts-map");

var modalMapClose = modalMap.querySelector(".modal-map-close");

modalMapLink.addEventListener("click", function(event) {
  event.preventDefault();
  modalMap.classList.add("modal-map-show");
  overlay.classList.add("overlay-show");
});

modalMapClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalMap.classList.remove("modal-map-show");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function(event){
  event.preventDefault();
  modalMap.classList.remove("modal-map-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalMap.classList.contains("modal-map-show")) {
      modalMap.classList.remove("modal-map-show");
      overlay.classList.remove("overlay-show");
    }
  }
});
