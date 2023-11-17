let containerLinhas = document.getElementById("containerLinhas");
let columNav = document.getElementById("columNav");
let containerOpAll = document.querySelectorAll(".containerOpAll");
let containerOpAllArr = Array.from(containerOpAll);

for (const elemento of containerOpAllArr) {
  elemento.addEventListener("click", function () {
    if (this.classList.contains("openOp")) {
      this.classList.remove("openOp");
    } else {
      for (const e of containerOpAllArr) {
        e.classList.remove("openOp");
      }
      this.classList.add("openOp");
    }
  })
}

containerLinhas.addEventListener("click", function () {
  this.classList.toggle("openMenu");
  if (this.classList.contains("openMenu")) {
    columNav.style.animation = "faded 500ms ease-in-out forwards";
  } else {
    columNav.style.animation = "fadedOut 500ms ease-in-out forwards";
  }
})
