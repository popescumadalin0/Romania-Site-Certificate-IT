// redimensionarea barei de navigatie la scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
//activare like
var d=1;
function myFunc()
{
  if(d==1)
  {
    document.getElementById("image").src="Media/Like_ap.png";
    document.getElementById("button").textContent="Multumesc!";
    d=0;}
  else
    {document.getElementById("image").src="Media/Like.png";
     document.getElementById("button").textContent="Apasă dacă ți-a plăcut!";
     d=1;}  
}