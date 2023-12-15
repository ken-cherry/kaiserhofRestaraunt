const social = [
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
  let displayIcons = social.map(function (item) {
    console.log(item);

    return `<div class="icons">
              <ul class="icons">
                <li>
                    <a href=${item.link} class=${item.icon} target="_blank"></a>
                </li>
              </ul>
            </div>`;
  });
  displayIcons = displayIcons.join("");
  console.log(displayIcons);

  socialMedia.innerHTML = displayIcons;
  socialMedia.innerHTML = displayIcons;
});
