// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('drop', onDrop);
    squares[i].addEventListener('dragenter', ondragenter);
    squares[i].addEventListener('dragLeave', ondragleave);
}

function onDrop(event) {
    console.log(event);
}

function ondragenter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("redd")) return;
    even.preventDefault();
    event.target.style.backgroundColor = "yellow";
}

function onDragStart(event) {
    dragging = {
        x: event.target.dataset.x,
        y: event.target.dataset.y;
    }
}

function ondragleave(event) {
    event.target.style.backgroundColor = null;
}

function onDragEnd