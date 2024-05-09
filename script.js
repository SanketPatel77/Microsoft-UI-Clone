const hamburger = document.getElementById("hamburger");
const options = document.getElementById("options");
const closeIcon = document.getElementById("close-icon");

function displayOptions() {
  if (options.style.display === "none") {
    options.style.display = "block";
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    options.style.display = "none";
    hamburger.style.display = "block";
    closeIcon.style.display = "none";
  }
}
