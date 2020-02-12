var next = 0;
var headerElement = document.getElementById('H1');
var textBoxElement = document.getElementById('text-box');
var interval = setTimeout(changeHeader, 12000);
var headLineList = ["Verified Avenues", "Trusted Advisors", "Informed Decisions"];

function changeHeader() {
    console.log("Changing Header.....");
    headerElement.style.animation = "fadeOut 1s 0s";
    //headerElement.style.animationFillMode = "forwards";
    console.log("Fading out the existing header!");
    headerElement.addEventListener("animationend", onFadeOutAnimationEnd);
}

function onFadeOutAnimationEnd() {
//    headerElement.style.animation = "fadeIn 0.6s 0s";
    console.log("FadeOut animation Ended, now Fading in New Header");
    if(next >= headLineList.length) next = 0;
    headerElement.innerHTML = headLineList[++next];
    headerElement.style.animation = "fadeIn 0.6s 0s";
    headerElement.style.animationFillMode = "forwards";
    headerElement.removeEventListener("animationend", onFadeOutAnimationEnd);
    headerElement.addEventListener("animationend", OnFadeInAnimationEnd);
}

function OnFadeInAnimationEnd() {
    console.log("FadeInAnimationEnded, waiting for 12 sec before changing");
    setTimeout(changeHeader, 12000); 
}