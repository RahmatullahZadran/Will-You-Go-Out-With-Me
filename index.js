var intervalId;
var isMoving = false;
function changePicture() {
    var image = document.getElementById("image");
    image.src = "images/Pic2.png";
}

function moveButton() {
    var button = document.getElementById("no");
    button.style.transform = "translate(-100px, -100px)";
}

function moveButton() {
    var button = document.getElementById("no");
    button.style.transform = "translate(-100px, -100px)";
}
function startMoving() {
    intervalId = setInterval(moveButton, 50);

}
 
function stopMoving() {
    clearInterval(intervalId);
    var button = document.getElementById("no");
    button.style.transform = "translate(100px, 100px)";
}

function stopMoving() {
    clearInterval(intervalId);
    var button = document.getElementById("no");
    button.style.transform = "translate(60px, 100px)";
}

