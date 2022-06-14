function styleKeys(){
    sk = document.getElementById("keysDisplay").style;
    sk.all = "unset";
    sk.backgroundColor = "#f4f4f4";
    sk.position = "absolute";
    sk.left = "50%";
    sk.transform = "translate(-50%, 0)";
    sk.padding = "8px";
    sk.borderRadius = "8px";
    sk.backgroundColor = "#f4f4f4";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName("body")[0].innerHTML += "<div id='keysDisplay'></div>";
    styleKeys();
 }, false);

window.addEventListener('keydown', function(event) {
    console.log(event.key);
    document.getElementById("keysDisplay").innerText = event.key;
});