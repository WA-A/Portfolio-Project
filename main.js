//console.log("wasan");

// When scroll change background for navbar depending on the offset y
const navbar = document.querySelector('.navbar')
const headerhello=document.querySelector('header_content span')

window.addEventListener('scroll',function(){   // type scroll        
  // console.log("wasan");
  console.log(window.scrollY);
  if(window.screenY > headerhello.offsetTop){
    navbar.style.background = "#fff"
  }
  else {
    navbar.style.background = "transparent"
  }
})
// Loading 
const loading =document.querySelector('.loading')
window.addEventListener('load',function(){   // type load
 setTimeout(function(){
 loading.classList.add('opacity-0','invisible')
 },2000)
})
