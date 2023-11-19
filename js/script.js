let containerLinhas = document.getElementById("containerLinhas");
let columNav = document.getElementById("columNav");


// let containerOpAllArr = Array.from(containerOpAll);

containerLinhas.addEventListener("click", function () {
  this.classList.toggle("openMenu");
  if (this.classList.contains("openMenu")) {
    columNav.style.animation = "faded 500ms ease-in-out forwards";
  } else {
    columNav.style.animation = "fadedOut 500ms ease-in-out forwards";
  }
})

let containerOpAll = document.querySelectorAll(".containerOpAll").forEach(elemento => {
  elemento.addEventListener("click", function () {
    if (elemento.classList.contains("openOp")) {
      this.classList.remove("openOp");
    } else {
      this.classList.add("openOp")
    }
  })
})