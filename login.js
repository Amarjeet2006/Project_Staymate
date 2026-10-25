const roleButtons = document.querySelectorAll(".role");
const userId = document.querySelector("#userId");
const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");
const form = document.querySelector("#loginForm");
const message = document.querySelector("#message");

let selectedRole = "student";

// Switch between Student and Admin login.
roleButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedRole = button.dataset.role;
    roleButtons.forEach(item => item.classList.toggle("active", item === button));
    userId.placeholder = selectedRole === "student" ? "Student ID" : "Admin ID";
    userId.setAttribute("aria-label", userId.placeholder);
    message.textContent = "";
  });
});

// Show or hide the password.
togglePassword.addEventListener("click", () => {
  const hidden = password.type === "password";
  password.type = hidden ? "text" : "password";
  togglePassword.textContent = hidden ? "Hide" : "Show";
  togglePassword.setAttribute("aria-label", hidden ? "Hide password" : "Show password");
});

// Demo only: connect this form to your backend for real authentication.
form.addEventListener("submit", event => {
  event.preventDefault();
  message.textContent = `Demo: ${selectedRole} login form submitted. Authentication is not connected yet.`;
});
