const studentName = document.getElementById("studentName");
const studentDropdown = document.getElementById("studentDropdown");

// Toggle dropdown
studentName.addEventListener("click", () => {
  studentDropdown.style.display = studentDropdown.style.display === "block" ? "none" : "block";
});

// Hide dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!studentName.contains(e.target) && !studentDropdown.contains(e.target)) {
    studentDropdown.style.display = "none";
  }
});

// Example data (replace later with backend fetch)
const sampleAttendance = [
  { date: "2025-06-25", time: "09:00 AM", status: "Present" },
  { date: "2025-06-26", time: "09:00 AM", status: "Absent" },
  { date: "2025-06-27", time: "09:00 AM", status: "Present" }
];

const tbody = document.getElementById("attendance-table");

sampleAttendance.forEach(entry => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${entry.date}</td>
    <td>${entry.time}</td>
    <td>${entry.status === "Present" ? "✅" : "❌"}</td>
  `;
  tbody.appendChild(row);
});
