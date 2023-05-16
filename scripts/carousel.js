// Define variables
var transitionTime = 5000;
var slideIndex = 0;  // Index of the current slide
var slideIndexPrevious = 0;  // Index of the previous slide
var slideIndexPreviousPrevious = 0;  // Index of the previous previous slide
var slides = document.getElementsByClassName("carousel-image");  // List of images
var n_slides = slides.length;  // Number of images
slides[0].style.display = "block";
setTimeout(showSlides, transitionTime);


function showSlides() {

  // Update slide index
  slideIndex++;
  if (slideIndex >= slides.length) {slideIndex = 0}  // Reset to 0

  // Get index of previous images
  slideIndexPrevious = slideIndex - 1;
  slideIndexPreviousPrevious = slideIndex - 2;
  if (slideIndex == 0) {  // Set indices for first slide (use last and second to last slides)
    slideIndexPreviousPrevious = slides.length - 2;
    slideIndexPrevious = slides.length - 1;
  }
  if (slideIndex == 1) {
    slideIndexPreviousPrevious = slides.length - 1;
  }

  // Change display value for current image
  // slides[slideIndex].style.zIndex = "2";
  slides[slideIndex].style.display = "block";

  // Change display value for previous image
  // slides[slideIndexPrevious].style.zIndex = "1";
  slides[slideIndexPreviousPrevious].style.display = "none";
  slides[slideIndexPrevious].style.display = "none";

  // Run the function again after 2000 ms
  setTimeout(showSlides, transitionTime);

}
