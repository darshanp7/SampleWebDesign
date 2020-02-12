var headerElement = document.getElementById('H1');
var textBoxElement = document.getElementById('text-box');
var interval = setTimeout(changeHeader, 12000);
var headLineList = ["Verified Avenues", "Trusted Advisors", "Informed Decisions"];



function changeHeader() {
    console.log("Changing Header.....");
    headerElement.style.animation = "fadeOut 1s 0s";
    headerElement.addEventListener("animationend", onAnimationEnd);;
}

function onAnimationEnd() {
//    headerElement.style.animation = "fadeIn 0.6s 0s";
    headerElement.innerHTML = "Verified Avenues";
    headerElement.style.animation = "fadeIn 0.6s 0s";
}