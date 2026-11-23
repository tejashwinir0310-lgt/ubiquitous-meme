const toggleBtn = document.getElementById("theme-toggle");
const yearSpan = document.getElementById("year");

// Automatically display the current year in the footer
yearSpan.textContent = new Date().getFullYear();

// Check if the user previously picked dark mode
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle dark mode when the button is clicked
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});