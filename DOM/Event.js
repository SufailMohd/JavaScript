

   var heading = document.getElementById("head")
   var btn = document.getElementById("btn")

   btn.addEventListener("click", changeColor)
   heading.addEventListener("mouseover", chnageBg)

   function changeColor(){
        heading.style.color = "red"
   }

   function chnageBg(){
    heading.style.backgroundColor = "blue"
   }