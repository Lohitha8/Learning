let button = document.getElementById("button");
button.addEventListener('click', function () {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = '#' + randomColor;
})
