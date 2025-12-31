var gT = document.querySelector('.side-navbar');
 
function showNavbar(){
    gT.style.left = "0"

}
function closeNavbar(){
    gT.style.left = "-60%"

}var productBoxes = document.querySelectorAll(".new-arrival-container")

productBoxes.forEach(function (box) {

     
    box.addEventListener("mouseover", function () {
        box.style.transform = "scale(1.05)"
        box.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)"
        box.style.transition = "0.3s"
    })

 
    box.addEventListener("mouseout", function () {
        box.style.transform = "scale(1)"
        box.style.boxShadow = "none"
    })

})

