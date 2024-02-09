//console.log("wasan");

// When scroll change background for navbar depending on the offset y
const navbar = document.querySelector('.navbar')
const headerhello=document.querySelector('header_content span')

window.addEventListener('scroll',function(){          
  // console.log("wasan");
  console.log(window.scrollY);
  if(window.screenY > headerhello.offsetTop){
    navbar.style.background = "#fff"
  }
  else {
    navbar.style.background = "transparent"
  }
})