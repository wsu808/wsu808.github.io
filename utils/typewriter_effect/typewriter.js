/* Typerwriter Effect
* in HTML: <div id="console" onclick="typeWriter('console','sad|asdw')">coś</div>
* use | character instead of line breaks
* typeWriter(id,txt)
* or
* typeWriter(id,txt,speed)
* @author wsu808.github.io
*/

//LOAD CSS
var link = document.createElement('link'); // Create new link Element
link.rel = 'stylesheet'; // set the attributes for link element 
link.type = 'text/css';
link.href = 'https:///wsu808.github.io/utils/typewriter_effect/typewriter.css';
document.getElementsByTagName('HEAD')[0].appendChild(link);



function typeWriter(id, txt, speed = 200) {
    let elem = document.getElementById(id);
    //elem.classList.add("typewriter");
    //elem.after(document.createElement("br")); //add line break AFTER typewriter elment
    elem.innerHTML = "<span class='typewriter-content'></span><span class='typewriter-blinker'></span>";


    var i = 0;
    type(id, txt, speed, i);
}

function type(id, txt, speed, i) {
    if (i < txt.length) {
        let elem = document.getElementById(id).getElementsByClassName("typewriter-content")[0];
        if (txt.charAt(i)=="|") { //print line break
            elem.innerHTML += "<br/>";
        } else { //print next character
            elem.innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(function () { type(id, txt, speed, i) }, speed);
    }
}
