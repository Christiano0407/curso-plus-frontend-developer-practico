//*TODO === === === === === === App E-commerce Javascript === === === === === === */
//** === === === === ===  vARIABLES === === === ===  === */
const userIcon = document.querySelector(`#idNavUser`);
const desktopMenu = document.querySelector("#idDesktopMenu");

//** === === === === === Execute Code ===  === === === === */

const toggleMenu = () => {
  if (desktopMenu) {
    desktopMenu.classList.toggle(`inactive`);
    //desktop.classList.add("visible");
    //desktop.classList.add("active");
  }
};

userIcon.addEventListener("click", toggleMenu);
