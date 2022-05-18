// Typerwriter Effect
// @author wsu808.github.io
/* Paste this in your HTML; last parameter (speed/timeout) is optional
* <script src="https://raw.githubusercontent.com/wsu808/wsu808.github.io/main/utils/typewriter_effect/typewriter.js">
* <script>
*       window.addEventListener("DOMContentLoaded", () => 
*           typeWriter("element_id", "some text | some text in new line",100)
*       );
*  </script>
*/

//LOAD CSS
var link = document.createElement('link'); // Create new link Element
link.rel = 'stylesheet'; // set the attributes for link element 
link.type = 'text/css';
link.href = 'https:///wsu808.github.io/utils/typewriter_effect/typewriter.css';
document.getElementsByTagName('HEAD')[0].appendChild(link);



function typeWriter(id, txt, speed = 200) {
    let elem = document.getElementById(id);
    elem.innerHTML = "<span class='typewriter-content'></span><span class='typewriter-blinker'></span>";
    type(id, txt, speed);
}

function type(id, txt, speed, i=0) {
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
