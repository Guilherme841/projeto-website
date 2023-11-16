let containerLinhas = document.getElementById("containerLinhas");
let columNav = document.getElementById("columNav");

// columNav.addEventListener("click", function() {
//   this.classList.toggle("open")
// })

containerLinhas.addEventListener("click", function() {
  this.classList.toggle("openMenu");
  if (this.classList.contains("openMenu")) {
    // columNav.style.display = "block";
    // columNav.style.opacity = "1";
    columNav.style.animation = "faded 500ms ease-in-out forwards"
  } else {
    // columNav.style.display = "none";
    // columNav.style.opacity = "0";
    columNav.style.animation = "fadedOut 500ms ease-in-out forwards"
  }
})
