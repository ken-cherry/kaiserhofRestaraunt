const menu = [
  {
    id: 1,
    title: "liverwurst dumpling",
    img: "../src/images/liverwurstDumpling.jpg",
    price: "12.99",
  },
  {
    id: 2,
    title: "roasted potatoes",
    img: "../src/images/roastedPotatoes.jpg",
    price: "13.00",
  },
  {
    id: 3,
    title: "grilled boar",
    img: "../src/images/grilledBoar.jpg",
    price: "18.00",
  },
  {
    id: 4,
    title: "salad",
    img: "../src/images/salad.jpg",
    price: "9.99",
  },
  {
    id: 5,
    title: "wine",
    img: "../src/images/wine.jpg",
    price: "7",
  },
  {
    id: 6,
    title: "beer",
    img: "../src/images/bier.jpg",
    price: "5",
  },
];

const menuContainer = document.querySelector(".menu-container");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    return ` <div class="menu">
              <img src=${item.img} alt="dinner menu" />
              <p>${item.title} </p>
              <p>$${item.price} </p>
            </div>`;
  });
  displayMenu = displayMenu.join("");
  menuContainer.innerHTML = displayMenu;
});
