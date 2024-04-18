let menu = document.querySelector("#icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bi-x");
  navlist.classList.toggle("open");
};
