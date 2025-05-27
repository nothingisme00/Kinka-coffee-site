// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingcart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-btn").onclick = (e) => {
  shoppingcart.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik diluar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchbtn = document.querySelector("#search-btn");
const shoppingcartbtn = document.querySelector("#shopping-cart-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!searchbtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!shoppingcartbtn.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const ItemDetailButtons = document.querySelectorAll(".item-detail-button");

ItemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik di luar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
