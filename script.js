const drawer = document.querySelector("#drawer"),
  shade = document.querySelector("#shade");
function closeMenu() {
  drawer.classList.remove("open");
  shade.classList.remove("show");
}
document.querySelector("#menu").onclick = () => {
  drawer.classList.add("open");
  shade.classList.add("show");
};
document.querySelector("#close").onclick = closeMenu;
shade.onclick = closeMenu;
function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.toggle("hidden", p.id !== id));
  document
    .querySelectorAll("nav button")
    .forEach((b) => b.classList.toggle("active", b.dataset.page === id));
  closeMenu();
  window.scrollTo(0, 0);
}
document
  .querySelectorAll("[data-page]")
  .forEach((b) => (b.onclick = () => showPage(b.dataset.page)));
document.querySelector("#logout").onclick = () =>
  alert("Connect logout to your login system.");
document.querySelectorAll(".photo").forEach(
  (input) =>
    (input.onchange = () => {
      let text = input.files[0] ? "Selected: " + input.files[0].name : "";
      document.querySelector("#photoName").textContent = text;
      document.querySelector("#formPhoto").textContent = text;
    }),
);
document.querySelector("#form").onsubmit = (e) => {
  e.preventDefault();
  document.querySelector("#msg").textContent =
    "Demo submitted. Connect a backend to save complaints.";
  e.target.reset();
  document.querySelector("#formPhoto").textContent = "";
};
