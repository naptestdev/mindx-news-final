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
