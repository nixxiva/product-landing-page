// This line sets the initial slide index to 1 and calls the showSlides function to display the first slide when the page loads.
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// This function increments or decrements the slideIndex by the value of n. If n is positive, it goes to the next slide. If n is negative, it goes to the previous slide. After updating the index, it calls showSlides to display the appropriate slide.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// This function sets the slideIndex to the value of n, which corresponds to the selected slide (e.g., when clicking on a thumbnail). It then calls showSlides to display the corresponding slide.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Retrieve elements: It first retrieves all elements with the class name "mySlides" and "dot".
// Adjust slide index: If the updated index n is greater than the number of slides, it resets the index to 1. If it's less than 1, it sets the index to the last slide.
// Hide all slides: It loops through all slides and sets their display to "none" to hide them.
// Deactivate all dots: It loops through all dots and removes the "active" class to deactivate them.
// Display current slide: It displays the current slide based on the updated slideIndex and adds the "active" class to the corresponding dot.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
