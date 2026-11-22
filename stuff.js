const slide = document.getElementById("#dis1");
const about = document.getElementById("about");
const th = document.getElementById("th");
const hack = document.getElementById("hack");
const github = 'https://github.com/hamarisun';
const webos = 'https://hamarisun.github.io/rock/';
const code = 'https://github.com/hamarisun/portfolio/';
const title_text = document.querySelector("#mhtext");
const main = document.querySelector("#m");
const welcome = document.querySelector("#welcome");

//html
title_text.innerHTML=`
Welcome
`
welcome.innerHTML=`
<div class="window">
 <h3 class="bold" style="position: absolute; top: 20px ;" >Something about me.</h3>
            <h5 style=" position: absolute; top:60px; line-height: 1.5;">Hi, I'm Hamari aka rock aka i don't like to use my real name on the internet.
                 I'm an artist, love to paint and draw. I had always had been fascinated with coding, but never got into it.
                 Save to say i got finaly got into it thanks to my friends and hack club.</h5>
            </div>
            
            <div class="oko" id="dis2">
                <p style="margin-top: 0px;">slide show for (my art in the future)</p></div>
            
            <div class="oko" id="dis1"> 

 <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="pic/black.png" style="width:100%">
    <div class="text">nothing</div></div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="pic/flower.png" style="width:100%">
    <div class="text">Flower</div></div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="pic/black_hole.jpg" style="width:100%">
    <div class="text">Black Hole</div></div>
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
               
            </div>
`
main.innerHTML=`
<div id="me" class="window">
            <h3 class="bold" style="position: absolute; top: 20px ;" >Something about me.</h3>
            <h5 style=" position: absolute; top:60px; line-height: 1.5;">Hi, I'm Hamari aka rock aka i don't like to use my real name on the internet.
                 I'm an artist, love to paint and draw. I had always had been fascinated with coding, but never got into it.
                 Save to say i got finaly got into it thanks to my friends and hack club.</h5>
            </div>
            
            <div class="oko" id="dis2">
                <p style="margin-top: 0px;">slide show for (my art in the future)</p></div>
            
            <div class="oko" id="dis1"> 

 <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="pic/black.png" style="width:100%">
    <div class="text">nothing</div></div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="pic/flower.png" style="width:100%">
    <div class="text">Flower</div></div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="pic/black_hole.jpg" style="width:100%">
    <div class="text">Black Hole</div></div>
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
               
            </div>
`

hack.innerHTML=`
<div class="banner" id="hackbanner" ></div>
<div class="window bold" id="hackin" style="margin-top:0px;">
<p> hack club is a nonprofit movment of teenagers making cool projects</p>
                <p>want to join Hack Club?<br>check them out:<a class="a" href="https://hackclub.com/">hackclub!</a></p>
<h4>Want to know more about Hack Club ?</h4>
<div style="margin-top:-10px;">
<button class="accordion" onclick="acor()">Philosophy</button>
<div class="panel">
  <p>we're at our best when we're makeing.</p>
  <a class="a"href="https://hackclub.com/philosophy">more</a>
</div>

<button class="accordion" onclick="acor()">What they're doing</button>
<div class="panel">
  <p>they conect the sponsors to help invest in the next generation</p>
</div>

<button class="accordion" onclick="acor()">Some of the current programs</button>
<div class="panel">
  <p>-Forge-create a hardwere project and get funding
  <br>-Hackrain-create a project that uses open train data and get train passes and tickets</p>
  <a class="a"href="https://hackclub.com/programs">more programs</a>
</div>  
</div>
            </div>
            
`
about.innerHTML=` 
<div class="banner" id="mybanner" ></div>
<div class="banner">helo?</div>
<div class="window" style="height:150px;">
                <p>you can find me:</p>
                <p>on Cara(it's like instagarm)<a class="a" href="https://cara.app/hari-zero">@hari-zero</a></p>
                <p>on Stardance :<a class="a" href="https://stardance.hackclub.com/@hamarisun/projects">@hamarisun</a></p>
                <p>on hackclub slack :<a class="a" href="https://slack.hackclub.com/">@hamari</a></p>
            </div>
            
`
th.innerHTML=`
<div class="banner" id="thbanner">
<img scr="pic/bhole.png">
</div>
            <div class="oko" id="dis4">
                <p style="margin-top: 0px;">The look of this website<br>is inspired by Nokira's website<br>If you want to check it out<br>here'a a link:</p>
                <a class="a" href="https://nokira.dev/">go to the website</a></div>
<div class="oko" style="height: 60px; margin-top:125px; margin-left: 5px; width:561px;">
                <p class="bold">my personal site/portfolio more things will be added later</p>
            </div>  
` 
//welcome  
function welcomescr(){
  title_text.innerHTML=`Welcome`
  main.innerHTML = welcome.innerHTML

}
//hmm
function git(){
  window.open(github);
}

function os(){
  window.open(webos);
}

function pageinf(){
  window.open(code);
}

//page change

function clubopen(){
  title_text.innerHTML=`Hack club`
  main.innerHTML= hack.innerHTML
  
}


function mopen(){
  title_text.innerHTML=`About`
  main.innerHTML = about.innerHTML
}

function topen(){
  title_text.innerHTML=`This project`
  main.innerHTML = th.innerHTML
}




//slide
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

function acor() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
}