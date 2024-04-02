// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }



// CHANGE IMAGE SOURCE WHEN WINDOW WIDTH IS MORE THAN 990PX /////////////////////////////////////////////////

// function changeImageSource() {
//   var image = document.getElementById("slideshowImage");
//   var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//   if (windowWidth > 990) {
//     image.src = "./images/slideshow/img1-650.jpg"; // Zmena zdroja obrázka pre veľké šírky okna
//   } else {
//     image.src = "./images/slideshow/img1.jpg"; // Zmena zdroja obrázka pre menšie šírky okna
//   }
// }

// window.addEventListener('resize', changeImageSource);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}