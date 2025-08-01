// Example: Dummy student attendance data
const students = [
  { id: "S101", name: "Ali Bin Ahmad" },
  { id: "S102", name: "Nur Aisyah" },
  { id: "S103", name: "John Lim" },
];

const tbody = document.getElementById("attendance-body");

students.forEach(student => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${student.id}</td><td>${student.name}</td>`;
  tbody.appendChild(row);
});

const profileName = document.getElementById("profileName");
const profileDropdown = document.getElementById("profileDropdown");

profileName.addEventListener("click", () => {
  profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
});

// Optional: Hide dropdown if clicking outside
window.addEventListener("click", (e) => {
  if (!profileName.contains(e.target) && !profileDropdown.contains(e.target)) {
    profileDropdown.style.display = "none";
  }
});
