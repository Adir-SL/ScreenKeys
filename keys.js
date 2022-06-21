function styleKeys(size = 1.5, posx = 'center', posy = 'bottom', delay = '500'){
    sk = document.getElementById("keysDisplay").style;
    sk.all = "unset";
    sk.backgroundColor = "#f4f4f4";
    sk.position = "fixed";
    sk.padding = "calc(" + size + "em / 2)";
    sk.borderRadius = "8px";
    sk.fontFamily = "sans-serif";
    sk.fontSize = size + "em";
    sk.backgroundColor = "#f4f4f4";
    sk.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    sk.opacity = "0";
    sk.pointerEvents = "none";
    sk.userSelect = "none";
    sk.transition = "opacity 100ms linear 0s";
    if(posx == 'center'){
        sk.left = "50%";
        transformXtemp = "-50%";
    }
    if(posx == 'left'){
        sk.left = "32px";
        transformXtemp = "0";
    }
    if(posx == 'right'){
        sk.right = "32px";
        transformXtemp = "0";
    }
    if(posy == 'center'){
        sk.top = "50%";
        transformYtemp = "-50%";
    }
    if(posy == 'top'){
        sk.top = "32px";
        transformYtemp = "0";
    }
    if(posy == 'bottom'){
        sk.bottom = "32px";
        transformYtemp = "0";
    }

    sk.transform = "translate(" + transformXtemp + ", " + transformYtemp + ")";
}

function initKeys(size, posx, posy, delay){

    // size referes to the font-size (in em);
    // posx is the position in the x axis, can be 'left', 'right' or 'center';
    // posy is the position in the y axis, can be 'top', 'bottom' or 'center';

    document.getElementsByTagName("body")[0].innerHTML += "<div id='keysDisplay'></div>";
    styleKeys(size, posx, posy);
    window.addEventListener('keydown', function(event) {
        document.getElementById("keysDisplay").style.opacity = "1";
        
        if(document.getElementById("keysDisplay").innerText == ''){
            document.getElementById("keysDisplay").innerText = event.key;
        }else{
            document.getElementById("keysDisplay").innerText += " + " + event.key;
        }
    
        clearTimeout(document.timeMe);
        clearTimeout(document.waitFor);
        document.timeMe = setTimeout(function(){
            document.getElementById("keysDisplay").style.opacity = "0";
            document.waitFor = setTimeout(function(){
                document.getElementById("keysDisplay").innerText = '';
            }, 100);
        }, delay);
    });
}