

// Services Hover Image Effect
const link = document.querySelectorAll(".hover-item");
const linkHoverReveal = document.querySelectorAll(".hover-item__box");
const linkImages = document.querySelectorAll(".hover-item__box-img");
let activeIndex = null;
function handleMouseEnter(i, e) {
    if (activeIndex !== null && activeIndex !== i) {
        handleLeave(activeIndex);
    }
    activeIndex = i;
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(14deg)`;
    linkImages[i].style.transform = "scale(1, 1)";
    linkHoverReveal[i].style.left = e.clientX + "px";
}
function handleMouseLeave(i) {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-14deg)`;
    linkImages[i].style.transform = "scale(0.8, 0.8)";
    if (activeIndex === i) {
        activeIndex = null;
    }
}
function handleTouchStart(i, e) {
    if (activeIndex !== null && activeIndex !== i) {
        handleLeave(activeIndex);
    }
    activeIndex = i;
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(14deg)`;
    linkImages[i].style.transform = "scale(1, 1)";
    linkHoverReveal[i].style.left = e.touches[0].clientX + "px";
}
function handleTouchEnd(i) {
    handleLeave(i);
}
function handleLeave(i) {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-14deg)`;
    linkImages[i].style.transform = "scale(0.8, 0.8)";
}
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mousemove", (e) => handleMouseEnter(i, e));
    link[i].addEventListener("mouseleave", () => handleMouseLeave(i));
    link[i].addEventListener("click", (e) => handleMouseEnter(i, e));
    link[i].addEventListener("touchstart", (e) => handleTouchStart(i, e));
    link[i].addEventListener("touchend", () => handleTouchEnd(i));
}
