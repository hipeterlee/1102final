const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")


        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

var checkExist = setInterval(function () { //自動換頁 BUTTON
    document.getElementById("button_carousel").click();
}, 5000); // check every 5000ms




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

backToTupButton.addEventListener("click",smoothScrollBackToTop);

function smoothScrollBackToTop() {
    const targetPosition=0;
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

// backToTupButton.addEventListener("click",backToTop);
// function backToTop(){
//     window.scrollTo(0,0)
// }