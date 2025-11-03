//PAGE LOADER
(function(){
  const loader=document.getElementById('pageloader');
  const MIN=2000, HARD_CAP=3000;
  const t0=Date.now();

  document.documentElement.classList.add('lock');
  document.body.classList.add('lock');

  function reveal(){
    document.body.classList.add('ready');
    loader.classList.add('hide');
    document.documentElement.classList.remove('lock');
    document.body.classList.remove('lock');
    setTimeout(()=>loader?.remove(),600);
  }
  function finish(){
    const wait=Math.max(0,MIN-(Date.now()-t0));
    setTimeout(reveal,wait);
  }

  window.addEventListener('load',finish,{once:true});
  setTimeout(reveal,HARD_CAP);
})();
document.addEventListener('DOMContentLoaded',()=>{
  if(!document.getElementById('pageloader')){
    document.body.classList.add('ready');
  }
});
// ===== HEADER =====
const burger=document.getElementById('burger'),
      menu=document.getElementById('menu'),
      langSwitch=document.getElementById('langSwitch');

burger.addEventListener('click',()=>{
  burger.classList.toggle('active');
  menu.classList.toggle('open');
  document.body.classList.toggle('no-scroll',menu.classList.contains('open'));
});

const i18n={
  en:{tours:"Tours",about:"About",contact:"Contact"},
  ru:{tours:"Туры",about:"О нас",contact:"Контакты"}
};

langSwitch.addEventListener('click',()=>{
  const current=langSwitch.dataset.lang?.toLowerCase()||'en';
  const next=current==='en'?'ru':'en';
  langSwitch.dataset.lang=next.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(i18n[next]&&i18n[next][key])el.textContent=i18n[next][key];
  });
  localStorage.setItem('lang',next);
});

document.addEventListener('DOMContentLoaded',()=>{
  const saved=localStorage.getItem('lang')||'en';
  langSwitch.dataset.lang=saved.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(i18n[saved]&&i18n[saved][key])el.textContent=i18n[saved][key];
  });
});
// ==== FADE ON SCROLL ====
document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(".fade-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // если хочешь, чтобы исчезали при скролле вверх
      }
    });
  }, {
    threshold: 0.15
  });

  fadeItems.forEach(el => observer.observe(el));
});
//Smooth scroll to Tours section
document.getElementById("button1")?.addEventListener("click", () => {
  const target = document.querySelector("#toursPreview");
  if (target) target.scrollIntoView({ behavior: "smooth" });
});