const backToTupButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) { //show backToTopButton
        if (!backToTupButton.classList.contains("btnEntrance")) {
            backToTupButton.classList.remove("btnExit")
            backToTupButton.classList.add("btnEntrance");
            backToTupButton.style.display = "block";
        }
    } else {
        if (backToTupButton.classList.contains("btnEntrance")) {
            backToTupButton.classList.remove("btnEntrance");
            backToTupButton.classList.add("btnExit");
            setTimeout(function () {
                backToTupButton.style.display = "none";
            }, 250);

        }
    }
}

backToTupButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutcubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutcubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
// Function 
function ready() {
    //remove product from cart
    var Cartremove = document.getElementsByClassName('cart-remove');
    console.log(Cartremove);
    for (var i = 0; i < Cartremove.length; i++) {
        var abutton = Cartremove[i];
        abutton.addEventListener('click', Itemremove);
    }
    //quantity changed
    var quantityinputs = document.getElementsByClassName('input-style')
    for (var i = 0; i < quantityinputs.length; i++) {
        var input = quantityinputs[i];
        input.addEventListener('change', quantityChanged);
    }
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener('click',addCartClicked);
    }
    document.getElementsByClassName('buy-btn')[0]
    .addEventListener("click",buyButtonClicked)
    }

    function buyButtonClicked(){
        alert("下單成功！")
        var Cartcontent = document.getElementsByClassName('cardleft')[0]
        while (Cartcontent.hasChildNodes()){
            Cartcontent.removeChild(Cartcontent.firstChild)
        }
        updatetotal()
    }

    //remove product from cart 
    function Itemremove(event) {
        var abuttonClicked = event.target;
        abuttonClicked.parentElement.remove();
        updatetotal();
    }

    function quantityChanged(event) {
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatetotal();
    }
    // function addCartClicked(event){
    //     var button = event.target
    //     var shopProducts = button.parentElement
    //     var title = shopProducts.getElementsByClassName("product-title")[0].innerText
    //     var price = shopProducts.getElementsByClassName("price")[0].innerText
    //     var productImg = shopProducts.getElelog("product-img")[0].src

    //     addProductToCart(title,price,productImg)
    //     updatetotal()
    // }
    // function  addProductToCart(title,price,productImg){
    //     var cartShopBox = document.createElement('div')
    //     cartShopBox.classList.add('img-style')
    //     var carItems = document.getElementsByClassName('cardleft')
    // }

    //update total

    

    function updatetotal() {
        var Cartcontent = document.getElementsByClassName('cardleft')[0];
        var cartboxes = Cartcontent.getElementsByClassName("img-style");
        var total = 0;
        for (var i = 0; i < cartboxes.length; i++) {
            var cartbox = cartboxes[i];
            var priceElement = cartbox.getElementsByClassName('price-style')[0];
            var quantityElement = cartbox.getElementsByClassName('input-style')[0];
            var price = parseFloat(priceElement.innerText.replace("$", ""));
            var quantity = quantityElement.value;
            total = total + (price * quantity);
        }
            //
            document.getElementsByClassName('totalprice-style')[0].innerText = "$" + total;
        

    }