/* Typerwriter Effect
* in HTML: <div id="console" onclick="typeWriter('console','sadasdw')">coś</div>
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
    document.getElementById(id).classList.add("typewriter");
    document.getElementById(id).after(document.createElement("br")); //add line break AFTER typewriter elment

    var i = 0;
    type(id, txt, speed, i);
}

function type(id, txt, speed, i) {
    if (i < txt.length) {
        document.getElementById(id).innerHTML += txt.charAt(i);
        i++;
        setTimeout(function () { type(id, txt, speed, i) }, speed);
    }
}

function aaa() {
    window.alert("aaa");
}
