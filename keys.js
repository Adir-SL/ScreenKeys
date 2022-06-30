function styleKeys(size = 16, posx = 'center', posy = 'bottom', delay = '500', bg='#cbd5e1', txt='#334155'){
    sk = document.getElementById("keysDisplay").style;
    sk.all = "unset";
    sk.position = "fixed";
    sk.padding = "calc(" + size + "px / 2)";
    sk.borderRadius = "12px";
    sk.fontFamily = "sans-serif";
    sk.fontSize = size + "px";
    sk.backgroundColor = bg;
    sk.color = txt;
    // sk.boxShadow = "0 4px 8px 0 #0000401a";
    sk.boxShadow = "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px"
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

function initKeys(size = 16, posx = 'center', posy = 'bottom', delay = '500', bg='#cbd5e1', txt='#334155'){

    // size referes to the font-size (in px);
    // posx is the position in the x axis, can be 'left', 'right' or 'center';
    // posy is the position in the y axis, can be 'top', 'bottom' or 'center';
    // delay refers to the time (in milliseconds) it takes for the toast to disappear;
    // bg is the color of the background of the keys (CSS background-color);
    // txt is the color of the text of the keys (CSS color);

    document.getElementsByTagName("body")[0].innerHTML += "<div id='keysDisplay'></div>";
    styleKeys(size, posx, posy, delay, bg, txt);
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