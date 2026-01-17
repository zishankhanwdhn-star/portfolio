const toggleBtn = document.getElementById("themeToggle");

// page load par default DARK mode
document.body.classList.remove("light");
toggleBtn.textContent = "☀️";

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "🌙"; // light mode → moon
  } else {
    toggleBtn.textContent = "☀️"; // dark mode → sun
  }
});