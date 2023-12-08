let containerLinhas = document
  .getElementById("containerLinhas")
  .addEventListener("click", function () {
    let columNav = document.getElementById("columNav");
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

let spanMais = document
  .querySelectorAll(".span-mais")
  .forEach(function (element) {
    element.addEventListener("click", function () {
      let containerInfo = element.parentNode;
      let elementThis = this;
      containerInfo.classList.toggle("open");
      if (containerInfo.classList.contains("open")) {
        elementThis.innerHTML = "-";
      } else {
        elementThis.innerHTML = "+";
      }
    });
  });

window.addEventListener("scroll", function() {
  let nav = document.getElementById("nav");
  let scrollTop = document.documentElement.scrollTop;
  if (matchMedia("(min-width: 1024px)").matches) {
    if (scrollTop > 150) {
      nav.style.transition = "300ms"
      nav.style.backgroundColor = "#10403B"
    } else {
      nav.style.transition = "300ms"
      nav.style.backgroundColor = "transparent"
    }
  } 
})