var productsContainer = document.getElementById("products")
var search = document.getElementById("search")
var productList = productsContainer.querySelectorAll(".products-box")

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase()

    for (var i = 0; i < productList.length; i++) {
        var productName = productList[i].querySelector("p").textContent.toUpperCase()

        if (productName.indexOf(enteredValue) < 0) {
            productList[i].style.display = "none"
        } else {
            productList[i].style.display = "block"
        }
    }

})
var productBoxes = document.querySelectorAll(".products-box")

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
