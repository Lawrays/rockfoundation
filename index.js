window.onload
let container = document.getElementById("container");
const preview = document.querySelector(".prev");
const active = document.querySelectorAll(".thumb");
let btn = document.querySelector(".checkbtn")
let check = document.getElementById("check")
let video = document.getElementById("myvideo")
 
/*btn.addEventListener("click", ()=> {
  check.classList.toggle("show")
});*/

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    preview.src = e.target.src;
    preview.classList.add("effect");
 
    setTimeout(function () {
      preview.classList.remove("effect");
    }, 100);
 
    active.forEach(function (thumb) {
      if (thumb.classList.contains("active")) {
        thumb.classList.remove("active");
      }
    });
 
    e.target.classList.add("active");
  }
});
video.autoplay = false
video.onload
