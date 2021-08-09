window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("logo").src ="images/image.png"; 
  } else {
    document.getElementById("logo").src ="images/logo.png";
  }
}
