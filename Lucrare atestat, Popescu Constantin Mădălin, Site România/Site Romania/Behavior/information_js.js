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
 //functionare meniu
 function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
    }//schimba culoarea celor celorlalte
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
 document.getElementById("defaultOpen").click();