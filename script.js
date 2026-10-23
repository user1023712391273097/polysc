const root = document.documentElement;
const btn = document.getElementById("theme-toggle");
const saved = localStorage.getItem("theme") || "dark";
root.dataset.theme = saved;
btn.textContent = saved === "dark" ? "Switch to light mode" : "Switch to dark mode";

btn.onclick = () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
  btn.textContent = next === "dark" ? "Switch to light mode" : "Switch to dark mode";
};
