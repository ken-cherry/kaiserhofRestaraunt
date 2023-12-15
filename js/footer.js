const socialIcons = [
  {
    id: 1,
    link: "placeholder",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    link: "placeholder",
    icon: "fab fa-instagram",
  },
  {
    id: 3,
    link: "placeholder",
    icon: "fa-brands fa-yelp",
  },
];

const socialMedia = document.querySelector(".social-icons");

window.addEventListener("DOMContentLoaded", function () {
  let displayIcons = socialIcons.map(function (item) {
    return `
         <ul class="icons">
          <li>
            <a href="https://www.facebook.com/Kaiserhof-Restaurant-and-Biergarten-111648901412933"
              class="fab fa-facebook" target="_blank"></a>
          </li>
        </ul>
        `;
  });
});
