"use strict"
const buttonmd = document.querySelectorAll(".show-modal");
const closemd = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const  closemodal = ()=>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
const modalopen = ()=>{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
for (let i = 0; i < buttonmd.length; i++) {
buttonmd[i].addEventListener("click",modalopen)
}
closemd.addEventListener("click",closemodal);
overlay.addEventListener("click",closemodal);

//keyboard events
document.addEventListener('keydown',(e)=>{
  if (e.key === "Escape" &&  !modal.classList.contains("hidden")) {
          closemodal();
  }
});