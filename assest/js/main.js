//console.log("wasan");

// When scroll change background for navbar depending on the offset y
const navbar = document.querySelector('.navbar')
const headerhello=document.querySelector('header_content span')
const ScrolltoTop = document.querySelector('.scroll-to-top')
const aboutsec = document.querySelector('.about')
const navLinks=document.querySelectorAll('.nav-link')

window.addEventListener('scroll',function(){   // type scroll        
  // console.log("wasan");
  console.log(window.scrollY);
  if(window.screenY > headerhello.offsetTop){
    navbar.style.background = "#fff"
  }
  else {
    navbar.style.background = "transparent"
  }
  if(window.screenY > aboutsec.offsetTop){
    ScrolltoTop.classList.remove('opacity-0','invisible')
  }
  else{
    ScrolltoTop.classList.add('opacity-0','invisible')
  }
})
// Loading 
/*const loading =document.querySelector('.loading')
window.addEventListener('load',function(){   // type load
 setTimeout(function(){
 loading.classList.add('opacity-0','invisible')
 },2000)
})*/

// Button Scroll to Top

ScrolltoTop.addEventListener('click',function(){ 
    window.scroll({
        top:0,
        behavior:"smooth",
    })
})

// scroll  on each section
for(let i =0; i<navLinks.length; i++){
navLinks[i].addEventListener('click',function(){
let currentid = this.getAttribte('href')
let targetsec = document.querySelector(currentid)
  window.scroll({
        top:targetsec.offsetTop,
        behavior:"smooth",
    })
})
}