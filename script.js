let imageIndex = 0; //velger å vise det første bildet
const images = [
    "lasagna.jpg", 
    "tapas.jpg", 
    "kjøttkake.jpg",
    "lasagna2.jpg",
    "mat1.jpg",
    "catering.jpg",
]; //legger til bilder i rulleten

function changeImage() {
    imageIndex = (imageIndex + 1) % images.length;  //gå til neste bilde og passer på å gå tilbake ti start
    const imageElement = document.getElementById("image-gallery");
    imageElement.src = images[imageIndex];
}


setInterval(changeImage, 5000); //bytte bildet hvert 5 sekund eller 5000 ms