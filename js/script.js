let containerLinhas = document.getElementById("containerLinhas");
let columNav = document.getElementById("columNav");
let containerShowMore = document.getElementsByClassName("containerShowMore");
let showMore = document.getElementsByClassName("showMore");
let radioImgs = document.getElementsByClassName("radioImgs");
let radioImg1 = document.getElementById("radioImg1");
let radioImg2 = document.getElementById("radioImg2");
let containerImgs = document.getElementsByClassName("containerImgs");

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

for (elementoRadio of radioImgs) {
  elementoRadio.addEventListener("click", function () {
    if (this.id === "radioImg1") {
      for (let i = 0; i < containerImgs.length; i++) {
        containerImgs[i].classList.add("containerImgsFadedOut");
        containerImgs[i].classList.remove("containerImgsFadedIn");
      }
    } else if (this.id === "radioImg2") {
      for (let i = 0; i < containerImgs.length; i++) {
        containerImgs[i].classList.add("containerImgsFadedIn");
        containerImgs[i].classList.remove("containerImgsFadedOut");
      }
    }
  });
}

for (elemento of showMore) {
  elemento.addEventListener("click", function () {
    let thisParent = this.parentNode;
    let thisButton = this;
    thisButton.classList.toggle("open");
    if (thisButton.classList.contains("open")) {
      thisButton.innerHTML = "Show Less";
    } else {
      thisButton.innerHTML = "Show More";
    }
    thisParent.classList.toggle("containerShowMoreOpen");
  });
}
