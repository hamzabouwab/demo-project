//Toggle button animation on click event
const btnToggle = document.querySelector(".navbar-toggler")
const sticks = document.querySelectorAll(".toggler-icon-stick")
btnToggle.addEventListener("click",()=>{
  for(var i=-1;i<sticks.length-1;i++){
    if(sticks[1].style.opacity!="0"){
      sticks[1].style.opacity="0"
      sticks.forEach(stick=>{
        stick.classList.add("toggle-animation")
      })
    }else{
      sticks[1].style.opacity="1"
      sticks.forEach(stick=>{
        stick.classList.remove("toggle-animation")
      })
    }
  }
}
)