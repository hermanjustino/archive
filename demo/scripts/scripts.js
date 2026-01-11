window.onload = function() {
    var links = document.querySelectorAll('.link');
    for (var i = 0; i < links.length; i++) {
        links[i].style.animationDelay = (i * 0.2) + 's';
    }
};// Add your JavaScript code here