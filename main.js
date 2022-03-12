const bar = document.querySelector(".bar");
const exit = document.querySelector(".exit");
const leftCotainer = document.querySelector(".leftCotainer");
const shadowNav = document.querySelector(".shadowNav");

bar.addEventListener("click", () => {
  leftCotainer.classList.remove("hidden");
});
shadowNav.addEventListener("click", () => {
  leftCotainer.classList.add("hidden");
});
exit.addEventListener("click", () => {
  leftCotainer.classList.add("hidden");
});
