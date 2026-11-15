

function myFunction() {
  document.getElementById("demo").style.display = "none";
}
function myopen(){
  document.getElementById("demo").style.display = "flex";
  document.getElementById("hack").style.display = "none";
  document.getElementById("th").style.display = "none";
  document.getElementById("about").style.display = "none";
  
}

function git(){
  window.open('https://github.com/hamarisun',"_self");
}

function os(){
  window.open('https://hamarisun.github.io/rock/',"_self");
}

function pageinf(){
  window.open('https://github.com/hamarisun/portfolio/',"_self");
}
//hack club info

function clubopen(){
  document.getElementById("hack").style.display = "flex";
  document.getElementById("th").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("demo").style.display = "none";
}
function clubclose(){
  document.getElementById("hack").style.display = "none";
}
//me
function mopen(){
  document.getElementById("about").style.display = "flex";
  document.getElementById("hack").style.display = "none";
  document.getElementById("th").style.display = "none";
  document.getElementById("demo").style.display = "none";
}
function mclose(){
  document.getElementById("about").style.display = "none";
}
//this project
function topen(){
  document.getElementById("th").style.display = "flex";
  document.getElementById("hack").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("demo").style.display = "none";
}
function tclose(){
  document.getElementById("th").style.display = "none";
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

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