let containerLinhas = document.getElementById("containerLinhas");
let columNav = document.getElementById("columNav");
let radioImgs = document.getElementsByClassName("radioImgs");
let showMore = document.getElementsByClassName("showMore");
let containerShowMore = document.getElementsByClassName("containerShowMore");

containerLinhas.addEventListener("click", function () {
  this.classList.toggle("openMenu");
  if (this.classList.contains("openMenu")) {
    columNav.style.animation = "faded 500ms ease-in-out forwards";
  } else {
    columNav.style.animation = "fadedOut 500ms ease-in-out forwards";
  }
});

let containerMais = document
  .querySelectorAll(".containerMais")
  .forEach((elemento) => {
    elemento.addEventListener("click", function () {
      document.querySelectorAll(".openOp").forEach((removeOpenOp) => {
        if (removeOpenOp !== this) {
          removeOpenOp.classList.remove("openOp");
        }
      });
      if (elemento.classList.contains("openOp")) {
        this.classList.remove("openOp");
      } else {
        this.classList.add("openOp");
      }
    });
  });

function linhaFaded(event) {
  event.target.nextElementSibling.classList.add("onMouseA");
  event.target.nextElementSibling.classList.remove("outMouseA");
}

function linhaFadedOut(event) {
  event.target.nextElementSibling.classList.add("outMouseA");
  event.target.nextElementSibling.classList.remove("onMouseA");
}

for (elemento of radioImgs) {
  elemento.addEventListener("click", function () {});
}

for (elemento of showMore) {
  elemento.addEventListener("click", function() {
    let thisParent = this.parentNode;
    thisParent.classList.toggle("containerShowMoreOpen");
  })
}