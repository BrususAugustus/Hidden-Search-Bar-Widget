const btn = document.getElementById("active-btn");
const search = document.getElementById("search");
const input = document.getElementById("input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
