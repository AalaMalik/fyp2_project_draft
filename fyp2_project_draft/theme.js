const studentBtn = document.getElementById("student-btn");
const lecturerBtn = document.getElementById("lecturer-btn");
const body = document.body;

studentBtn.onclick = () => {
  body.classList.remove("lecturer-theme");
  body.classList.add("student-theme");
  studentBtn.classList.add("active");
  lecturerBtn.classList.remove("active");
};

lecturerBtn.onclick = () => {
  body.classList.remove("student-theme");
  body.classList.add("lecturer-theme");
  lecturerBtn.classList.add("active");
  studentBtn.classList.remove("active");
};
