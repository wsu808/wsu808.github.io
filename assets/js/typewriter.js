var i = 0;

function typeWriter(txt,speed,id) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
