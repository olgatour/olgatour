// PAGE LOADER
(function(){
  const loader=document.getElementById('pageloader');
  const MIN=1000, HARD_CAP=2300;
  const t0=Date.now();

  if(loader){
    document.documentElement.classList.add('lock');
    document.body.classList.add('lock');
  }

  function reveal(){
    document.body.classList.add('ready');
    if(loader){
      loader.classList.add('hide');
      document.documentElement.classList.remove('lock');
      document.body.classList.remove('lock');
      setTimeout(()=>loader?.remove(),600);
    }
  }
  function finish(){
    const wait=Math.max(0,MIN-(Date.now()-t0));
    setTimeout(reveal,wait);
  }

  if(loader){
    window.addEventListener('load',finish,{once:true});
    setTimeout(reveal,HARD_CAP);
  }
})();
document.addEventListener('DOMContentLoaded',()=>{
  if(!document.getElementById('pageloader')){
    document.body.classList.add('ready');
  }
});

// BURGER MENU TOGGLE
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
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
}

// LANG SWITCH
const langSwitch = document.getElementById('langSwitch');

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

    /* TOURS PREVIEW (index) */
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

    /* TOURS PAGE (tours.html) */
    tours_page_title: "All Tours",
    btn_book: "Book",
    modal_booking_default: "Booking",
    modal_booking_prefix: "Booking: ",

    tour_killarney_route: "Killarney 1 day tour · Ring of Kerry · Ross Castle · Old Abbey · Muckross House · Killarney National Park",
    tour_killarney_full_desc: "Killarney County Kerry. At the beginning of our journey you will hear the secrets and legends of the Shannon River Bay. We will visit an incredible and mysterious place – Ross Castle. From the castle we will sail on a boat across Lake Killarney, at the bottom of which, according to legend, an entire underwater kingdom is hidden. We will continue our journey to the mysterious abbey, which houses the “living heart”. At the end of the trip we will visit one of the most beautiful, popular and largest parks in Ireland – Killarney National Park. The journey will be seasoned with real ancient Irish legends. Let your journey begin with us.",

    tour_cork_full_title: "Cork and Titanic experience",
    tour_cork_route: "Cork walking tour · Elizabeth Fort · English Market · Cobh · Titanic Museum · Ireland’s highest cathedral · D. Kennedy’s town",
    tour_cork_full_desc: "Discover the Cork and Titanic Heritage Tour. Step into the rich history of Cork on this captivating journey. Begin with a Cork walking tour, exploring charming streets, Elizabeth Fort and learning about the fascinating origins of this great city. Experience the lively atmosphere of the English Market, a food lover’s paradise. Continue to the picturesque town of Cobh, home to the famous Titanic Museum, where the final chapter of the great ship’s story unfolds. Visit Ireland’s highest cathedral, a stunning masterpiece overlooking the harbor. On the way, enjoy the scenic charm of D. Kennedy’s town, filled with coastal beauty and local character.",

    tour_connemara_title: "Connemara National Park & Kylemore Abbey",
    tour_connemara_route: "Connemara National Park · scenic trails · panoramic viewpoints · Kylemore Abbey · Victorian Walled Garden",
    tour_connemara_full_desc: "Connemara National Park & Kylemore Abbey Tour. Immerse yourself in the wild beauty of Connemara National Park, where sweeping mountains, shimmering lakes and vast boglands create some of Ireland’s most breathtaking landscapes. Enjoy scenic trails and panoramic views that capture the essence of the west. Then, step into the fairytale setting of Kylemore Abbey, a stunning 19th-century castle nestled on the shores of a tranquil lake. Discover its romantic history, stroll through the Victorian Walled Garden and feel the peaceful atmosphere of this remarkable place. This journey blends natural wonders with cultural heritage for an unforgettable Irish experience.",

    tour_dingle_full_title: "Dingle peninsula",
    tour_dingle_route: "Dingle town · Dingle Bay · Slea Head Drive · Gallarus Oratory · Blasket Islands · ancient forts & standing stones",
    tour_dingle_full_desc: "Discover the breathtaking Dingle Peninsula, where rugged cliffs meet the wild Atlantic, charming villages dot the coastline and ancient history whispers from every corner. Drive along winding coastal roads with panoramic views, explore the colourful town of Dingle with its lively pubs and artisan shops and spot playful dolphins in Dingle Bay. Marvel at unforgettable spots like Slea Head Drive, Gallarus Oratory and the Blasket Islands, and wander through unique landscapes dotted with ancient forts, standing stones and hidden beaches. This tour offers a perfect mix of adventure, culture and unforgettable scenery."
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

    /* TOURS PREVIEW (index) */
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

    /* TOURS PAGE */
    tours_page_title: "Все туры",
    btn_book: "Забронировать",
    modal_booking_default: "Бронирование",
    modal_booking_prefix: "Бронирование: ",

    tour_killarney_route: "Однодневный тур по Килларни · Кольцо Керри · замок Росс · старое аббатство · усадьба Макросс · национальный парк Килларни",
    tour_killarney_full_desc: "Килларни, графство Керри. В начале нашего путешествия вы услышите легенды и истории залива реки Шаннон. Мы посетим удивительное и загадочное место — замок Росс. Оттуда отправимся на лодочную прогулку по озеру Килларни, на дне которого, по легенде, скрыто целое подводное королевство. Затем продолжим путь к таинственному аббатству, где хранится «живое сердце». В конце поездки мы посетим один из самых красивых и известных парков Ирландии — национальный парк Килларни. Путешествие будет приправлено настоящими древними ирландскими легендами. Пусть ваше приключение начнётся с нами.",

    tour_cork_full_title: "Cork and Titanic experience",
    tour_cork_route: "Пешеходная экскурсия по Корку · Elizabeth Fort · English Market · город Коуб · музей Титаника · самый высокий собор Ирландии · город Д. Кеннеди",
    tour_cork_full_desc: "Откройте для себя тур Cork and Titanic Heritage. Погрузитесь в историю Корка во время увлекательной прогулки по городу, его улочкам и крепости Elizabeth Fort, узнавая о происхождении этого места. Почувствуйте атмосферу легендарного рынка English Market — рая для гурманов. Затем отправьтесь в живописный городок Коуб, где находится знаменитый музей Титаника, завершающий историю великого лайнера. Посетите самый высокий собор Ирландии с видом на гавань и по дороге насладитесь колоритом городка Д. Кеннеди с его прибрежной красотой и местным характером.",

    tour_connemara_title: "Connemara National Park & Kylemore Abbey",
    tour_connemara_route: "Нац.парк Коннемара · смотровые площадки · пешеходные тропы · аббатство Кайломор · викторианский сад",
    tour_connemara_full_desc: "Тур Connemara National Park & Kylemore Abbey. Окунитесь в дикую красоту национального парка Коннемара, где горы, озёра и торфяники создают одни из самых впечатляющих пейзажей Ирландии. Насладитесь прогулками по тропам и панорамными видами Атлантики. Затем отправьтесь в сказочное аббатство Кайломор — замок XIX века на берегу спокойного озера. Узнайте его романтичную историю, прогуляйтесь по викторианскому саду и ощутите умиротворённую атмосферу этого места. Это путешествие объединяет природу и культуру, даря незабываемые впечатления.",

    tour_dingle_full_title: "Dingle peninsula",
    tour_dingle_route: "Город Дингл · залив Дингл · Slea Head Drive · Gallarus Oratory · острова Бласкет · древние форты и камни",
    tour_dingle_full_desc: "Откройте для себя захватывающий полуостров Дингл, где суровые скалы встречаются с Атлантикой, а вдоль побережья тянутся уютные деревушки. Прокатитесь по извилистым прибрежным дорогам с панорамными видами, прогуляйтесь по яркому городу Дингл с пабами и ремесленными лавками и попробуйте заметить игривых дельфинов в заливе Дингл. Полюбуйтесь культовыми местами — Slea Head Drive, древней церковью Gallarus и островами Бласкет, исследуйте пейзажи с древними фортификациями, стоящими камнями и скрытыми пляжами. Тур сочетает приключение, культуру и незабываемые виды."
  }
};

if (langSwitch) {
  langSwitch.addEventListener('click',()=>{
    const current=langSwitch.dataset.lang?.toLowerCase()||'en';
    const next=current==='en'?'ru':'en';
    langSwitch.dataset.lang=next.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.dataset.i18n;
      if(i18n[next] && i18n[next][key]) el.textContent=i18n[next][key];
    });
    localStorage.setItem('lang',next);
  });

  document.addEventListener('DOMContentLoaded',()=>{
    const saved=localStorage.getItem('lang')||'en';
    langSwitch.dataset.lang=saved.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.dataset.i18n;
      if(i18n[saved] && i18n[saved][key]) el.textContent=i18n[saved][key];
    });
  });
}

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

// Smooth scroll to Tours section (index)
document.getElementById("button1")?.addEventListener("click", () => {
  const target = document.querySelector("#toursPreview");
  if (target) target.scrollIntoView({ behavior: "smooth" });
});


// ==== TOURS MODAL (tours.html) ====
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  const modalClose = document.getElementById("modalClose");
  const modalTitle = document.getElementById("modalTourName");
  const form = document.getElementById("bookingForm");

  const currentLang = (localStorage.getItem("lang") || "en");
  const prefix = (i18n[currentLang] && i18n[currentLang].modal_booking_prefix) || "Booking: ";

  document.querySelectorAll(".book-btn[data-tour]").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.tour || "";
      modalTitle.textContent = prefix + name;
      modal.classList.add("active");
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => modal.classList.remove("active"));
  }

  window.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
  });

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Request sent!");
      modal.classList.remove("active");
      form.reset();
    });
  }
});
