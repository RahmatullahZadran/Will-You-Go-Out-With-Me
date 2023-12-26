
function changePicture() {
    var image = document.getElementById("image");
    image.src = "images/Pic2.png";
}

function moveButton() {
    var button = document.getElementById("no");
    button.style.transform = "translate(-20px, -20px)";
}

function startButton() {
    intervalId = setInterval(moveButton, 50);

}
 
function stopButton() {
    clearInterval(intervalId);
    var button = document.getElementById("no");
    button.style.transform = "translate(0px, 0px)";
}