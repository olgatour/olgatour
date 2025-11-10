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

// BURGER MENU TOGGLE
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("open");
});

// CLOSE MENU ON LINK CLICK
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("open");
  });
});


const i18n = {
  en: {
    /* NAV */
    nav_home: "Home",
    nav_tours: "Tours",
    nav_about: "About Us",
    nav_contact: "Contacts",

    /* HERO */
    hero_title: "YOUR JOURNEY\nBEGINS HERE",
    hero_subtitle: "Where the wind sings ancient songs,\nand the land keeps the breath of ages",
    hero_button: "Explore more",

    /* TOURS PREVIEW */
    tours_preview_title: "POPULAR TOURS",
    tour_killarney_title: "Killarney",
    tour_killarney_desc: "Killarney County Kerry — a journey through Ireland’s most magical landscapes.",
    tour_cork_title: "Cork & Titanic",
    tour_cork_desc: "Walk through history — from Elizabeth Fort to the Titanic Museum.",
    tour_dingle_title: "Dingle Peninsula",
    tour_dingle_desc: "Rugged cliffs and wild Atlantic views.",
    btn_readmore: "Read More",
    btn_viewall: "View All Tours",

    /* WHY SECTION */
    why_title: "WHY CLOVERTOUR",
    why_1_title: "🌿 Authentic Experience",
    why_1_desc: "We don’t just offer tours — we share real Irish stories.",
    why_2_title: "🚐 Small Groups",
    why_2_desc: "Comfort, space, and time to fully enjoy your journey.",
    why_3_title: "☘️ Local Guides",
    why_3_desc: "We know the hidden places and the best views.",
    why_4_title: "💫 Flexible & Easy",
    why_4_desc: "Simple booking, instant confirmation, and responsive support.",

    /* ABOUT */
    about_title: "ABOUT US",
    about_text: "Clovertour was created to make discovering Ireland simple, beautiful, and meaningful.",
    about_fact1: "Eco-friendly routes",
    about_fact2: "Supporting local places",
    about_fact3: "Modern design",

    /* CONTACTS */
    contacts_title: "CONTACTS",
    contact_info_title: "FIND US HERE",
    contact_hours: "Mon–Fri, 10:00–18:00 (IST)",

    /* FORM */
    form_name: "Name",
    form_name_ph: "Your name...",
    form_email: "Email",
    form_email_ph: "you@example.com",
    form_message: "Message",
    form_message_ph: "Your question...",
    form_send: "Send",
  },

  ru: {
    /* NAV */
    nav_home: "Главная",
    nav_tours: "Туры",
    nav_about: "О нас",
    nav_contact: "Контакты",

    /* HERO */
    hero_title: "ВАШЕ ПУТЕШЕСТВИЕ\nНАЧИНАЕТСЯ ЗДЕСЬ",
    hero_subtitle: "Где ветер поёт древние песни,\nа земля хранит дыхание веков",
    hero_button: "Узнать больше",

    /* TOURS PREVIEW */
    tours_preview_title: "ПОПУЛЯРНЫЕ ТУРЫ",
    tour_killarney_title: "Килларни",
    tour_killarney_desc: "Килларни, графство Керри — путешествие по самым волшебным пейзажам Ирландии.",
    tour_cork_title: "Корк и Титаник",
    tour_cork_desc: "Прогулка по истории — от Elizabeth Fort до музея Titanic в Коубе.",
    tour_dingle_title: "Полуостров Дингл",
    tour_dingle_desc: "Скалы, океан и атмосферный город Дингл.",
    btn_readmore: "Подробнее",
    btn_viewall: "Все туры",

    /* WHY SECTION */
    why_title: "ПОЧЕМУ CLOVERTOUR",
    why_1_title: "🌿 Настоящие впечатления",
    why_1_desc: "Мы не просто предлагаем туры — мы делимся ирландскими историями.",
    why_2_title: "🚐 Маленькие группы",
    why_2_desc: "Комфорт, пространство и время насладиться путешествием.",
    why_3_title: "☘️ Местные гиды",
    why_3_desc: "Мы знаем скрытые места и лучшие ракурсы.",
    why_4_title: "💫 Удобно и просто",
    why_4_desc: "Простое бронирование, мгновенное подтверждение и отзывчивая поддержка.",

    /* ABOUT */
    about_title: "О НАС",
    about_text: "Clovertour создан, чтобы сделать путешествия по Ирландии простыми, красивыми и осознанными.",
    about_fact1: "Экологичные маршруты",
    about_fact2: "Поддержка локальных мест",
    about_fact3: "Современный дизайн",

    /* CONTACTS */
    contacts_title: "КОНТАКТЫ",
    contact_info_title: "МЫ НА СВЯЗИ",
    contact_hours: "Пн–Пт, 10:00–18:00 (IST)",

    /* FORM */
    form_name: "Имя",
    form_name_ph: "Ваше имя...",
    form_email: "Email",
    form_email_ph: "you@example.com",
    form_message: "Сообщение",
    form_message_ph: "Ваш вопрос...",
    form_send: "Отправить",
  }
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
        entry.target.classList.remove("visible");
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