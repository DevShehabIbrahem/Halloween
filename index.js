const open_Icon = document.getElementById("open-nav");
const close_Icon = document.getElementById("close");
const nav_menu_id = document.getElementById("nav-menu");

const open_Menu = () => {
  nav_menu_id.style.top = "0%";
  nav_menu_id.style.cursor = "pointer";
};

open_Icon.addEventListener("click", open_Menu);

const close_Menu = () => {
  nav_menu_id.style.top = "-150%";
};

close_Icon.addEventListener("click", close_Menu);
