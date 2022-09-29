//*TODO === === === === === === App E-commerce Javascript === === === === === === */
//** === === === === ===  vARIABLES === === === ===  === */
const userIcon = document.querySelector(`#idNavUser`);
const desktopMenu = document.querySelector("#idDesktopMenu");

//** === === === === === Execute Code ===  === === === === */
//desktop.classList.add("visible");
//desktop.classList.add("active");
//if (desktopMenu.classList.contains("inactive")) {}
const toggleMenu = () => {
  if (desktopMenu) {
    desktopMenu.classList.toggle(`inactive`);
  }
};

userIcon.addEventListener("click", toggleMenu);
