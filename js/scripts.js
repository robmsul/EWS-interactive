console.log('scripts loaded');


// POPUPS on MAP
function puChi() {
    var popup = document.getElementById("pu1");
    popup.classList.toggle("show");
}

function puCol() {
    var popup = document.getElementById("pu2");
    popup.classList.toggle("show");
}

function puFra() {
    var popup = document.getElementById("pu3");
    popup.classList.toggle("show");
}

function puSlo() {
    var popup = document.getElementById("pu4");
    popup.classList.toggle("show");
}

function puIta() {
    var popup = document.getElementById("pu5");
    popup.classList.toggle("show");
}

function puCan() {
    var popup = document.getElementById("pu6");
    popup.classList.toggle("show");
}

function puSpa() {
    var popup = document.getElementById("pu7");
    popup.classList.toggle("show");
}

function puIta2() {
    var popup = document.getElementById("pu8");
    popup.classList.toggle("show");
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
};

// TABS
$( function() {
    $( "#tab1" ).tabs();
    $( "#tab2" ).tabs();
    $( "#tab3" ).tabs();
    $( "#tab4" ).tabs();
    $( "#tab5" ).tabs();
    $( "#tab6" ).tabs();
    $( "#tab7" ).tabs();
    $( "#tab8" ).tabs();
    $( "#tab9" ).tabs();
  } );



