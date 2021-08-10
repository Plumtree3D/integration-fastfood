window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.getElementById("logo").src ="images/image.png"; 
  } else {
    navbar.classList.remove("sticky");
    document.getElementById("logo").src ="images/logo.png";
  }
}
