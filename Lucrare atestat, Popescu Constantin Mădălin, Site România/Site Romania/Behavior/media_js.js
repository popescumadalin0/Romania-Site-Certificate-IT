// redimensionarea barei de navigatie la scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("logo").style.fontSize = "25px";}
  else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
 //functionalitate slide show
 var slideIndex = 1;
 showSlides(slideIndex);
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}   //cand se ajunge la ultima imagine +1 
  if (n < 1) {slideIndex = slides.length} //cand se ajunge la prima imagine -1
  for (i = 0; i < slides.length; i++) {// necesara pentru a a afisa imaginile pe orizontal
   slides[i].style.display = "none";  //prin scoaterea celorlalte imagini din view
  }
   slides[slideIndex-1].style.display = "block";  //afiseaza imaginea la care ne aflam
 }