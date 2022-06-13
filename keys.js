document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByTagName("body")[0].innerHTML += "<div id='keysDisplay'></div>";
 }, false);

window.addEventListener('keydown', function(event) {
    console.log(event.key);
    document.getElementById("keysDisplay").innerText = event.key;
});