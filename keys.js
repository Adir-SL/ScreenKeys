function styleKeys(){
    sk = document.getElementById("keysDisplay").style;
    sk.backgroundColor = "#f4f4f4";
    sk.position = "absolute";
    sk.padding = "8px";
    sk.borderRadius = "8px";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName("body")[0].innerHTML += "<div id='keysDisplay'></div>";
    styleKeys();
 }, false);

window.addEventListener('keydown', function(event) {
    console.log(event.key);
    document.getElementById("keysDisplay").innerText = event.key;
});