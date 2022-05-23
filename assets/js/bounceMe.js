function bounceIt(outer, inner, xPos=10, yPos=10, xSpd=2.5, ySpd=2.5) {
    let outerframe = document.getElementById(outer);
    let innerframe = document.getElementById(inner);
    let FPS = 60;
    // Logo moving velocity Variables
    let xPosition = xPos;
    let yPosition = yPos;
    let xSpeed = xSpd;
    let ySpeed = ySpd;
    //CSS
    outerframe.style.zIndex = 2;
    outerframe.style.position = "absolute";
    outerframe.style.top = 0;
    outerframe.style.left = 0;
    innerframe.style.position = "absolute";
    innerframe.style.color = "rgba(0,0,0,0)"; //visible after first bounce

    setInterval(() => {
        if (xPosition + innerframe.clientWidth >= window.innerWidth || xPosition <= 0) {
            xSpeed = -xSpeed;
            innerframe.style.color = randomColor();
        }
        if (yPosition + innerframe.clientHeight >= window.innerHeight || yPosition <= 0) {
            ySpeed = -ySpeed;
            innerframe.style.color = randomColor();
        }

        xPosition += xSpeed;
        yPosition += ySpeed;
        //update
        innerframe.style.left = xPosition + "px";
        innerframe.style.top = yPosition + "px";
    }, 1000 / FPS);
}

function randomColor() {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8).toUpperCase();
    return color;
}
