let icons = document.getElementById("icons");

icons.addEventListener("click", function () {
  if (!this.classList.contains("is-open")) {
    this.classList.remove("is-closed");
    this.classList.add("is-open");
  } else if (this.classList.contains("is-open")) {
    this.classList.remove("is-open");
    this.classList.add("is-closed");
  }
})