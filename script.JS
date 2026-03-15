// HERO SLIDER
let slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;
function showSlide(index){
  slides.forEach((slide)=>slide.classList.remove("active"));
  slides[index].classList.add("active");
}
setInterval(()=>{ currentSlide=(currentSlide+1)%slides.length; showSlide(currentSlide); },5000);

// SCROLL REVEAL
function reveal(){ document.querySelectorAll(".reveal").forEach(el=>{
  let windowHeight = window.innerHeight;
  let elementTop = el.getBoundingClientRect().top;
  if(elementTop < windowHeight - 150){ el.classList.add("active"); }
});}
window.addEventListener("scroll", reveal);
reveal();

// MOBILE MENU
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', ()=>{ nav.classList.toggle('active'); });

// STICKY NAVBAR
window.addEventListener("scroll", ()=>{ document.querySelector('.navbar').classList.toggle("scrolled", window.scrollY>50); });

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
function openLightbox(el){ lightbox.style.display="block"; lightboxImg.src=el.querySelector('img').src; lightboxCaption.innerHTML=el.querySelector('img').alt; }
function closeLightbox(){ lightbox.style.display="none"; }
lightbox.onclick = e=>{ if(e.target===lightbox) closeLightbox(); }

// BACK TO TOP BUTTON
const backBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", ()=>{ backBtn.style.display = window.scrollY > 300 ? "block" : "none"; });
function scrollToTop(){ window.scrollTo({top:0, behavior:"smooth"}); }

// FILTER FUNCTION
function filterItems(buttonSelector, containerSelector){
  const buttons = document.querySelectorAll(buttonSelector);
  buttons.forEach(btn=> btn.addEventListener('click', ()=>{
    buttons.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll(containerSelector).forEach(item=>{
      item.style.display = filter === 'all' || item.classList.contains(filter) ? 'block' : 'none';
    });
  }));
}
filterItems('.gallery .filter-buttons button','.gallery-item');
filterItems('.products .filter-buttons button','.product-card');

// TESTIMONIAL SLIDER
let testIndex=0;
const testSlides=document.querySelectorAll(".testimonial-slide");
function showTestimonial(i){ testSlides.forEach(s=>s.style.display="none"); testSlides[i].style.display="block"; }
showTestimonial(testIndex);
setInterval(()=>{ testIndex=(testIndex+1)%testSlides.length; showTestimonial(testIndex); },4000);