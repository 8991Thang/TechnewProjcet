
// Scroll to element
function scrollToElement(id) {
    const element = document.querySelector(`#${id}`)
    const topPos = element.getBoundingClientRect().top + window.pageYOffset

window.scrollTo({
  top: topPos-100, 
  behavior: 'smooth'
})
}


// ScrollUp
var mybutton = document.getElementById("scroll-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.transition = "all 5s linear";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}