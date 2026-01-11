const titleText = `

 Logos`;
const captionText = "Favourite loading animation?";
let titleIndex = 0;
let captionIndex = 0;

function typeWriterTitle() {
    if (titleIndex < titleText.length) {
        document.getElementById("title").innerHTML += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeWriterTitle, 50);  // Adjust speed here
    } else {
        setTimeout(typeWriterCaption, 1000);  // Wait before starting caption
    }
}

function typeWriterCaption() {
    if (captionIndex < captionText.length) {
        document.getElementById("caption").innerHTML += captionText.charAt(captionIndex);
        captionIndex++;
        setTimeout(typeWriterCaption, 20);  // Adjust speed here
    }
}

typeWriterTitle();  // Start the effect