const burger = document?.querySelector(".burger");
const navBar = document?.querySelector(".nav-bar");
const body = document.body;
const header = document.header;

burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger-active");
  navBar?.classList.toggle("nav-visible");
});
