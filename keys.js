window.addEventListener('keydown', function(event) {
    console.log(event.key);
    document.getElementsByTagName("body")[0].innerHTML += "<div>"+event.key+"</div>"
});