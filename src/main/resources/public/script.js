const menu = document.querySelector(".menu");
const menuLinks = document.querySelector(".menu-links");
const nav = document.querySelector(".link-container");



menu.addEventListener("click", function (e) {
  console.log(menu.getBoundingClientRect());
  let menuPos = menu.getBoundingClientRect();
  menuLinks.style.left = `${menuPos.left - 100}px`;

  menuLinks.style.top = `${Number(menuPos.top) + 40}px`;
  menuLinks.classList.toggle("hidden-modal");
});

nav.addEventListener("click", function (e) {
  e.preventDefault();
  let id = e.target.getAttribute("href");
  const section = document.querySelector(`${id}`);

  section.scrollIntoView({ behavior: "smooth" });
});

