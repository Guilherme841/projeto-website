let icon = document.querySelector(".icon");

icon.addEventListener("click", function () {

  let iconImg = document.getElementById("iconImg");
  let getIconImgSrc = iconImg.getAttribute("src");
  let setIconImgSrc;
  if (getIconImgSrc === "icons/menu.png") {
    setIconImgSrc = iconImg.setAttribute("src", "icons/xis.png");
  } else {
    setIconImgSrc = iconImg.setAttribute("src", "icons/menu.png");
  }
  //    let iconImgSrc = iconImg.getAttribute("src");
  //    iconImgSrc = "icons/xis.png"
  //    console.log(iconImgSrc);
});
