

// This will run when the .click-me element is clicked
document.getElementsByClassName('menu_item')[0].addEventListener('click', function (event) {
    document.getElementsByClassName('content')[0].innerHTML = event.target.innerHTML;
});

