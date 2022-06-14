function styleKeys(){
    sk = document.getElementById("keysDisplay").style;
    sk.all = "unset";
    sk.backgroundColor = "#f4f4f4";
    sk.position = "fixed";
    sk.left = "50%";
    sk.bottom = "16px"
    sk.transform = "translate(-50%, 0)";
    sk.padding = "8px";
    sk.borderRadius = "8px";
    sk.fontFamily = "sans-serif";
    sk.backgroundColor = "#f4f4f4";
    sk.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    sk.transition = "opacity 300ms linear 0s";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName("body")[0].innerHTML += "<div id='keysDisplay'></div>";
    styleKeys();
 }, false);

window.addEventListener('keydown', function(event) {
    document.getElementById("keysDisplay").style.opacity = "1";
    console.log(event.key);
    document.getElementById("keysDisplay").innerText = event.key;
    setTimeout(function(){ document.getElementById("keysDisplay").style.opacity = "0"; }, 1000);
});