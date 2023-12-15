const links = [
  {
    id: 1,
    link: "index.html",
    text: "home",
  },
  {
    id: 2,
    link: "menu.html",
    text: "menu",
  },
  {
    id: 3,
    link: "staff.html",
    text: "staff",
  },
];

// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// show nav
if (navBtn) {
  navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");
  });
}
// close nav
if (navClose) {
  navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");
  });
}

// nav-links
const navLinks = document.querySelector(".nav-links");

window.addEventListener("DOMContentLoaded", function () {
  let displayLinks = links.map(function (item) {
    return `<ul>
              <li>
                <a href=${item.link} class="nav-link">${item.text} </a>
              </li>
            </ul>`;
  });
  displayLinks = displayLinks.join("");
  navLinks.innerHTML = displayLinks;
});
