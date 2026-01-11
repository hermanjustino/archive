// Select all elements with the class 'link'
const links = document.querySelectorAll('.link');

// Loop through each link
links.forEach((link, index) => {
    // Apply an increasing animation delay to each link
    link.style.animationDelay = `${index}s`;
});

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }