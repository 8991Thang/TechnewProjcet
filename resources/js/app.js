
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
var mybuttonwe = document.getElementById("weather");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    mybutton.style.transition = "all 5s linear";
  } else {
    mybutton.style.display = "none";
  }
  if (document.body.scrollTop > 470 || document.documentElement.scrollTop > 470) {
    mybuttonwe.style.display = "block";
    mybuttonwe.style.transition = "all 3s ease-in-out";
  } else {
    mybuttonwe.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function calcRate(r) {
  const f = ~~r,//Tương tự Math.floor(r)
  id = 'star' + f + (r % f ? 'half' : '')
  id && (document.getElementById(id).checked = !0)
 }