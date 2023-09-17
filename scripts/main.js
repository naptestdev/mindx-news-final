window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0)
    document.querySelector(".back-to-top").classList.add("back-to-top-visible");
  else
    document
      .querySelector(".back-to-top")
      .classList.remove("back-to-top-visible");
});

document
  .querySelector(".back-to-top")
  .addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

document.querySelector("#hamburger-button").addEventListener("click", () => {
  document
    .querySelector(".navbar-side-right")
    .classList.toggle("navbar-side-right-visible");
});

document.querySelector("#search-button").addEventListener("click", () => {
  document.querySelector(".search-box").classList.add("search-box-visible");
  document.querySelector("#search-button").style.background = "white";
  setTimeout(() => {
    document.querySelector(".search-box input").focus();
  }, 300);
});

// Detect click outside of input

document.querySelector(".search-box input").addEventListener("click", (e) => {
  e.stopPropagation();
});

document.querySelector("#search-button").addEventListener("click", (e) => {
  e.stopPropagation();
});

document.onclick = () => {
  document.querySelector(".search-box").classList.remove("search-box-visible");
  document.querySelector("#search-button").style.background = "none";
};
