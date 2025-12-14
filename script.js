// PAGE LOADER
(function () {
  const loader = document.getElementById('pageloader');
  const MIN = 1000, HARD_CAP = 2300;
  const t0 = Date.now();

  if (loader) {
    document.documentElement.classList.add('lock');
    document.body.classList.add('lock');
  }

  function reveal() {
    document.body.classList.add('ready');
    if (loader) {
      loader.classList.add('hide');
      document.documentElement.classList.remove('lock');
      document.body.classList.remove('lock');
      setTimeout(() => loader?.remove(), 600);
    }
  }
  function finish() {
    const wait = Math.max(0, MIN - (Date.now() - t0));
    setTimeout(reveal, wait);
  }

  if (loader) {
    window.addEventListener('load', finish, { once: true });
    setTimeout(reveal, HARD_CAP);
  }
})();
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('pageloader')) {
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
    link.addEventListener("click", closeMenu);
  });
}

// LANG SWITCH
const langSwitch = document.getElementById('langSwitch');

if (langSwitch) {
  langSwitch.addEventListener("click", closeMenu);
}

function closeMenu() {
  burger?.classList.remove("active");
  menu?.classList.remove("open");
}


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
    why_title: "WHY OLGATOURS",
    why_1_title: "🌿 Authentic Experience",
    why_1_desc: "We don’t just offer tours — we share real Irish stories.",
    why_2_title: "🚐 Small Groups",
    why_2_desc: "Comfort, space, and time to fully enjoy your journey.",
    why_3_title: "☘️ Local Guides",
    why_3_desc: "We know the hidden places and the best views.",
    why_4_title: "💫 Flexible & Easy",
    why_4_desc: "Simple booking, instant confirmation, and responsive support.",

    /* ABOUT V3 */
    about_label: "ABOUT US",
    about_t1: "Discover",
    about_t2: "Ireland",
    about_t3: "Differently",
    about_desc: "Olgatour was created to show Ireland the way locals live it — calm, sincere and beautifully unhurried. We guide travelers into quiet landscapes, coastal paths, ancient routes and hidden viewpoints where the island reveals its true character — peaceful, authentic and deeply memorable.",
    as_stat_focus_label: "FOCUS",
    as_stat_focus_value: "Eco Routes · Local Life",
    as_stat_mood_label: "MOOD",
    as_stat_mood_value: "Calm Travel · Hidden Spots",
    as_stat_approach_label: "APPROACH",
    as_stat_approach_value: "Personal Tours · Small Groups",


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

    /* ADDITIONAL FORM FROM tours.html */
    form_phone_ph: "Phone Number",

    /* TOURS PAGE (tours.html) */
    tours_page_title: "POPULAR TOURS",
    btn_book: "Book",
    modal_booking_default: "Booking",
    modal_booking_prefix: "Booking: ",
    //OLD ABOUT REMNANTS
    about_mini: "ABOUT US",
    about_big_1: "Discover",
    about_big_2: "Ireland",
    about_big_3: "Differently",
    about_hero_desc: "Olgatour was created to redefine how people experience Ireland — deeper, calmer and more meaningful.",
    about_tag1: "#Eco Routes",
    about_tag2: "#Local Life",
    about_tag3: "#Hidden Spots",
    about_tag4: "#Calm Travel",


    /* TAGS (added) */
    tag_3nights: "3 nights tour",
    tag_walking: "Walking Tour",
    tag_nature: "Nature",
    tag_coastal: "Coastal",

    /* SHORT ROUTES (from tours.html cards) */
    tour_kells_title: "Book of Kells",
    tour_kells_route: "Book of Kells · island of origin · medieval abbey · Trinity College · Long Room Library · illuminated manuscript",
    tour_killarney_route: "Killarney 1 day tour · Ring of Kerry · Ross Castle · Old Abbey · Muckross House · Killarney National Park",
    tour_cork_route: "Cork walking tour · Elizabeth Fort · English Market · Cobh · Titanic Museum · Ireland’s highest cathedral · D. Kennedy’s town",
    tour_connemara_route: "Connemara National Park · scenic trails · panoramic viewpoints · Kylemore Abbey · Victorian Walled Garden",
    tour_dingle_route: "Dingle town · Dingle Bay · Slea Head Drive · Gallarus Oratory · Blasket Islands · ancient forts & standing stones",

    /* FULL DESCRIPTIONS (all 1:1 your text) */
    tour_killarney_full_desc: "Killarney County Kerry. At the beginning of our journey you will hear the secrets and legends of the Shannon River Bay. We will visit an incredible and mysterious place – Ross Castle. From the castle we will sail on a boat across Lake Killarney, at the bottom of which, according to legend, an entire underwater kingdom is hidden. We will continue our journey to the mysterious abbey, which houses the “living heart”. At the end of the trip we will visit one of the most beautiful, popular and largest parks in Ireland – Killarney National Park. The journey will be seasoned with real ancient Irish legends. Let your journey begin with us.",
    tour_cork_full_title: "Cork and Titanic experience",
    tour_cork_full_desc: "Discover the Cork and Titanic Heritage Tour. Step into the rich history of Cork on this captivating journey. Begin with a Cork walking tour, exploring charming streets, Elizabeth Fort and learning about the fascinating origins of this great city. Experience the lively atmosphere of the English Market, a food lover’s paradise. Continue to the picturesque town of Cobh, home to the famous Titanic Museum, where the final chapter of the great ship’s story unfolds. Visit Ireland’s highest cathedral, a stunning masterpiece overlooking the harbor. On the way, enjoy the scenic charm of D. Kennedy’s town, filled with coastal beauty and local character.",
    tour_connemara_title: "Connemara & Kylemore Abbey",
    tour_connemara_full_desc: "Connemara National Park & Kylemore Abbey Tour. Immerse yourself in the wild beauty of Connemara National Park, where sweeping mountains, shimmering lakes and vast boglands create some of Ireland’s most breathtaking landscapes. Enjoy scenic trails and panoramic views that capture the essence of the west. Then, step into the fairytale setting of Kylemore Abbey, a stunning 19th-century castle nestled on the shores of a tranquil lake. Discover its romantic history, stroll through the Victorian Walled Garden and feel the peaceful atmosphere of this remarkable place. This journey blends natural wonders with cultural heritage for an unforgettable Irish experience.",
    tour_dingle_full_title: "Dingle peninsula",
    tour_dingle_full_desc: "Discover the breathtaking Dingle Peninsula, where rugged cliffs meet the wild Atlantic, charming villages dot the coastline and ancient history whispers from every corner. Drive along winding coastal roads with panoramic views, explore the colourful town of Dingle with its lively pubs and artisan shops and spot playful dolphins in Dingle Bay. Marvel at unforgettable spots like Slea Head Drive, Gallarus Oratory and the Blasket Islands, and wander through unique landscapes dotted with ancient forts, standing stones and hidden beaches. This tour offers a perfect mix of adventure, culture and unforgettable scenery.",

    /* PROMO (added) */
    promo_special_offer: "SPECIAL OFFER OF THE MONTH",
    promo_special_tag: "Special offer — 3 nights",
    promo_marquee: "— Special offer — Killarney — Limited Offer — ",
    promo_killarney_desc: "Killarney County Kerry. At the beginning of our journey you will hear the secrets and legends of the Shannon River Bay.We will visit an incredible and mysterious place – Ross Castle... The journey will be “seasoned” with real ancient Irish legends.",
    old_price: "Regular Price",
    new_price1: "🌿 Price Upon Request",
    new_price2: "🔍 Personalised Offer",
    new_price3: "✨ Tailored Experience",
    new_price4: "🧭 Bespoke Experience",

    /* FOOTER */
    price_disclaimer1: "The cost of each tour is discussed individually.",
    price_disclaimer2: "Prices are flexible and depend on the date, group size and preferences!",
    copy: "© Olgatour, 2025",
    xmas_title: "🎄 CHRISTMAS TOURS SALE 🎄",
    xmas_sub: "Limited offers — December 15 — January 10",
    
    // --- КНОПКА ---
    btn_book: "Book",

    // --- КАРТОЧКА 1: Connemara Winter Hike ---
    alt_connemara_winter: "Connemara National Park Winter",
    xmas_tour1_type: "Wilderness Trek",
    xmas_tour1_title: "Connemara Winter Hike",
    xmas_tour1_desc: "Immerse yourself in the wild beauty of Connemara National Park, where sweeping mountains, shimmering lakes, and vast boglands create some of Ireland’s most breathtaking landscapes. Enjoy scenic trails and panoramic views that capture the essence of the west",
    xmas_tour1_old_hint: "Regular Price",
    xmas_tour1_new_price: "✨ Tailored Experience",
    
    // --- КАРТОЧКА 2: Kylemore Abbey Experience ---
    alt_kylemore_xmas: "Kylemore Abbey Christmas",
    xmas_tour2_type: "Historical Holiday",
    xmas_tour2_title: "Kylemore Abbey Experience",
    xmas_tour2_desc: "Then, step into the fairytale setting of Kylemore Abbey, a stunning 19th-century castle nestled on the shores of a tranquil lake. Discover its romantic history, stroll through the Victorian Walled Garden, and feel the peaceful atmosphere of this remarkable place. This journey blends natural wonders with cultural heritage for an unforgettable Irish experience",
    xmas_tour2_old_hint: "Starts from €450",
    xmas_tour2_new_price: "🌿 Price Upon Request",
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
    why_title: "ПОЧЕМУ OLGATOUR",
    why_1_title: "🌿 Настоящие впечатления",
    why_1_desc: "Мы не просто предлагаем туры — мы делимся ирландскими историями.",
    why_2_title: "🚐 Маленькие группы",
    why_2_desc: "Комфорт, пространство и время насладиться путешествием.",
    why_3_title: "☘️ Местные гиды",
    why_3_desc: "Мы знаем скрытые места и лучшие ракурсы.",
    why_4_title: "💫 Удобно и просто",
    why_4_desc: "Простое бронирование, мгновенное подтверждение и отзывчивая поддержка.",

    /* ABOUT V3 */
    about_label: "О НАС",
    about_t1: "Откройте",
    about_t2: "Ирландию",
    about_t3: "По-новому",
    about_desc: "Olgatour создан, чтобы показать Ирландию так, как ее видят местные жители — спокойной, искренней и невероятно неторопливой. Мы проводим путешественников по тихим пейзажам, прибрежным тропам, древним маршрутам и скрытым смотровым площадкам, где остров раскрывает свой истинный характер — мирный, аутентичный и глубоко запоминающийся.",
    as_stat_focus_label: "ФОКУС",
    as_stat_focus_value: "Эко-Маршруты · Местная Жизнь",
    as_stat_mood_label: "НАСТРОЕНИЕ",
    as_stat_mood_value: "Спокойное Путешествие · Скрытые Места",
    as_stat_approach_label: "ПОДХОД",
    as_stat_approach_value: "Персональные Туры · Малые Группы",

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

    /* ADD */
    form_phone_ph: "Телефон",

    /* TOURS PAGE */
    tours_page_title: "ПОПУЛЯРНЫЕ ТУРЫ",
    btn_book: "Забронировать",
    modal_booking_default: "Бронирование",
    modal_booking_prefix: "Бронирование: ",
    //OLD ABOUT REMNANTS
    about_mini: "О НАС",
    about_big_1: "Откройте",
    about_big_2: "Ирландию",
    about_big_3: "По-новому",
    about_hero_desc: "Olgatour создан, чтобы переосмыслить впечатления от Ирландии — глубже, спокойнее и осознаннее.",
    about_tag1: "#Эко Маршруты",
    about_tag2: "#Местная Жизнь",
    about_tag3: "#Скрытые Места",
    about_tag4: "#Спокойные Путешествия",

    /* TAGS */
    tag_3nights: "Тур на 3 ночи",
    tag_walking: "Пешеходный тур",
    tag_nature: "Природа",
    tag_coastal: "Побережье",

    /* SHORT ROUTES */
    tour_kells_title: "Книга Келлсов",
    tour_kells_route: "Книга Келлсов · остров происхождения · средневековое аббатство · Тринити-колледж · библиотека Long Room · иллюминированный манускрипт",
    tour_killarney_route: "Однодневный тур по Килларни · Кольцо Керри · замок Росс · старое аббатство · усадьба Макросс · национальный парк Килларни",
    tour_cork_route: "Пешеходная экскурсия по Корку · Elizabeth Fort · English Market · город Коуб · музей Титаника · самый высокий собор Ирландии · город Д. Кеннеди",
    tour_connemara_route: "Нац.парк Коннемара · смотровые площадки · пешеходные тропы · аббатство Кайломор · викторианский сад",
    tour_dingle_route: "Город Дингл · залив Дингл · Slea Head Drive · Gallarus Oratory · острова Бласкет · древние форты и камни",

    /* FULL DESCRIPTIONS (1:1 your text) */
    tour_killarney_full_desc: "Килларни, графство Керри. В начале нашего путешествия вы услышите легенды и истории залива реки Шаннон. Мы посетим удивительное и загадочное место — замок Росс. Оттуда отправимся на лодочную прогулку по озеру Килларни, на дне которого, по легенде, скрыто целое подводное королевство. Затем продолжим путь к таинственному аббатству, где хранится «живое сердце». В конце поездки мы посетим один из самых красивых и известных парков Ирландии — национальный парк Килларни. Путешествие будет приправлено настоящими древними ирландскими легендами. Пусть ваше приключение начнётся с нами.",
    tour_cork_full_title: "Cork and Titanic experience",
    tour_cork_full_desc: "Откройте для себя тур Cork and Titanic Heritage. Погрузитесь в историю Корка во время увлекательной прогулки по городу, его улочкам и крепости Elizabeth Fort, узнавая о происхождении этого места. Почувствуйте атмосферу легендарного рынка English Market — рая для гурманов. Затем отправьтесь в живописный городок Коуб, где находится знаменитый музей Титаника, завершающий историю великого лайнера. Посетите самый высокий собор Ирландии с видом на гавань и по дороге насладитесь колоритом городка Д. Кеннеди с его прибрежной красотой и местным характером.",
    tour_connemara_title: "Коннемара и Кайлмор",
    tour_connemara_full_desc: "Тур Connemara National Park & Kylemore Abbey. Окунитесь в дикую красоту национального парка Коннемара, где горы, озёра и торфяники создают одни из самых впечатляющих пейзажей Ирландии. Насладитесь прогулками по тропам и панорамными видами Атлантики. Затем отправьтесь в сказочное аббатство Кайломор — замок XIX века на берегу спокойного озера. Узнайте его романтичную историю, прогуляйтесь по викторианскому саду и ощутите умиротворённую атмосферу этого места. Это путешествие объединяет природу и культуру, даря незабываемые впечатления.",
    tour_dingle_full_title: "Dingle peninsula",
    tour_dingle_full_desc: "Откройте для себя захватывающий полуостров Дингл, где суровые скалы встречаются с Атлантикой, а вдоль побережья тянутся уютные деревушки. Прокатитесь по извилистым прибрежным дорогам с панорамными видами, прогуляйтесь по яркому городу Дингл с пабами и ремесленными лавками и попробуйте заметить игривых дельфинов в заливе Дингл. Полюбуйтесь культовыми местами — Slea Head Drive, древней церковью Gallarus и островами Бласкет, исследуйте пейзажи с древними фортификациями, стоящими камнями и скрытыми пляжами. Тур сочетает приключение, культуру и незабываемые виды.",

    /* PROMO */
    promo_special_offer: "СПЕЦПРЕДЛОЖЕНИЕ МЕСЯЦА",
    promo_special_tag: "Спецпредложение — 3 ночи",
    promo_marquee: "— Special offer — Killarney — Limited Offer — ",
    promo_killarney_desc: "Килларни, графство Керри. В начале нашего путешествия вы услышите легенды и истории залива реки Шаннон. Мы посетим удивительное и загадочное место — замок Росс... Путешествие будет приправлено настоящими древними ирландскими легендами.",
    old_price: "Стандартная цена",
    new_price1: "🌿 По запросу",
    new_price2: "🔍 Индивидуально",
    new_price3: "✨ Персональный опыт",
    new_price4: "🧭 Эксклюзивный тур",

    /* FOOTER */
    price_disclaimer1: "Стоимость каждого тура обсуждается индивидуально.",
    price_disclaimer2: "И зависит от даты, маршрута, размера группы и ваших предпочтений!",
    copy: "© Olgatour, 2025",
    // --- ОСНОВНАЯ СЕКЦИЯ ---
    xmas_title: "🎄 НОВОГОДНЯЯ РАСПРОДАЖА ТУРОВ 🎄",
    xmas_sub: "Ограниченные предложения — 15 Декабря — 10 Января",
    
    // --- КНОПКА ---
    btn_book: "Забронировать",

    // --- КАРТОЧКА 1: Connemara Winter Hike ---
    alt_connemara_winter: "Национальный парк Коннемара зимой",
    xmas_tour1_type: "Дикий Поход",
    xmas_tour1_title: "Зимний Поход по Коннемара",
    xmas_tour1_desc: "Погрузитесь в дикую красоту Национального парка Коннемара, где величественные горы, мерцающие озера и обширные торфяники создают одни из самых захватывающих пейзажей Ирландии. Насладитесь живописными маршрутами и панорамными видами, которые передают саму суть западного побережья",
    xmas_tour1_old_hint: "Стандартная Цена",
    xmas_tour1_new_price: "✨ Индивидуальный Расчет",
    
    // --- КАРТОЧКА 2: Kylemore Abbey Experience ---
    alt_kylemore_xmas: "Аббатство Кайлмор на Рождество",
    xmas_tour2_type: "Исторический Отпуск",
    xmas_tour2_title: "Тур по Аббатству Кайлмор",
    xmas_tour2_desc: "Затем окунитесь в сказочную атмосферу Аббатства Кайлмор — потрясающего замка XIX века, расположенного на берегу тихого озера. Откройте для себя его романтическую историю, прогуляйтесь по Викторианскому саду с каменными стенами и ощутите мирную атмосферу этого удивительного места. Это путешествие сочетает природные чудеса и культурное наследие, делая его незабываемым ирландским опытом",
    xmas_tour2_old_hint: "Цена от €450",
    xmas_tour2_new_price: "🌿 Цена По Запросу",
  }
};

if (langSwitch) {
  langSwitch.addEventListener('click', () => {
    const current = langSwitch.dataset.lang?.toLowerCase() || 'en';
    const next = current === 'en' ? 'ru' : 'en';
    langSwitch.dataset.lang = next.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (i18n[next] && i18n[next][key]) el.textContent = i18n[next][key];
    });
    localStorage.setItem('lang', next);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('lang') || 'en';
    langSwitch.dataset.lang = saved.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (i18n[saved] && i18n[saved][key]) el.textContent = i18n[saved][key];
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
        observer.unobserve(entry.target); // <<< главный фикс
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -5% 0px" // стабилизирует поведение у верхнего края
  });

  fadeItems.forEach(el => observer.observe(el));
});

// Smooth scroll to Tours section (index)
document.getElementById("button1")?.addEventListener("click", () => {
  const target = document.querySelector("#toursPreview");
  if (target) target.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;

  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";

  try {
    await emailjs.send("service_lrt056z", "template_hfr2pre", {
      name,
      email,
      msg
    });

    status.textContent = "";
    showToast("Message sent!", "success");
    e.target.reset();
  } catch (err) {
    status.textContent = "";
    showToast("Error sending message", "error");
  }
});
// === BOOKING FORM (modal) ===
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  const modalClose = document.getElementById("modalClose");
  const modalTitle = document.getElementById("modalTourName");
  const form = document.getElementById("bookingForm");

  // --- Открытие модалки с названием тура ---
  document.querySelectorAll(".book-btn[data-tour]").forEach(btn => {
    btn.addEventListener("click", () => {
      const tourName = btn.dataset.tour || "";
      modalTitle.textContent = "Booking: " + tourName;
      modal.dataset.tour = tourName; // сохраняем тур внутрь модалки
      modal.classList.add("active");
    });
  });

  // --- Закрытие модалки ---
  modalClose?.addEventListener("click", () => modal.classList.remove("active"));
  window.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
  });

  // --- Отправка формы ---
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    const name = inputs[0].value;
    const email = inputs[1].value;
    const phone = inputs[2].value;
    const message = inputs[3].value;
    const tour = modal.dataset.tour || "Unknown Tour";
    const time = new Date().toLocaleString();

    try {
      await emailjs.send("service_lrt056z", "template_84o57hf", {
        name,
        email,
        phone,
        message,
        tour,
        time
      });

      showToast("Booking request sent!", "success");
      form.reset();
      modal.classList.remove("active");

    } catch (err) {
      console.error(err);
      showToast("Error sending booking request", "error");
    }
  });
});
//MESSAGE
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icon = type === "success" ? "✅" : "‼️";

  toast.innerHTML = `<span class="icon">${icon}</span> ${message}`;

  container.appendChild(toast);

  setTimeout(() => toast.remove(), 5000);
}

//Marquee
const track = document.getElementById("marqueeTrack");
const originalItem = track?.querySelector(".marquee-item");

// Функция создаёт нужное количество клонов
function fillMarqueeBase() {
  if (!track || !originalItem) return;
  let totalWidth = track.scrollWidth;

  while (totalWidth < window.innerWidth * 2.5) {
    const clone = originalItem.cloneNode(true);
    track.appendChild(clone);
    totalWidth += clone.scrollWidth;
  }
}

// Первоначальное заполнение (на загрузке)
fillMarqueeBase();

// Полная перестройка при смене языка
function rebuildMarquee() {
  if (!track) return;

  const currentLang = localStorage.getItem("lang") || "en";
  const text = i18n[currentLang].promo_marquee;

  track.innerHTML = ""; // очищаем

  // создаём новую оригинальную ноду
  const newItem = document.createElement("span");
  newItem.className = "marquee-item";
  newItem.setAttribute("data-i18n", "promo_marquee");
  newItem.textContent = text;

  track.appendChild(newItem);

  // клонируем заново
  let totalWidth = track.scrollWidth;
  while (totalWidth < window.innerWidth * 2.5) {
    const clone = newItem.cloneNode(true);
    track.appendChild(clone);
    totalWidth += clone.scrollWidth;
  }
}

// слушатель на смену языка
if (langSwitch) {
  langSwitch.addEventListener("click", () => {
    setTimeout(() => rebuildMarquee(), 50);
  });
}
// слушатель на ресайз
document.addEventListener("click",e=>{
    const toggle = e.target.closest(".desc-toggle");
    const card   = e.target.closest(".christmas-card");

    // Клик по кнопке
    if(toggle && card){
        e.stopPropagation();

        // Закрываем все остальные карточки
        document.querySelectorAll(".christmas-card.expanded").forEach(c=>{
            if(c !== card){
                c.classList.remove("expanded");
                c.querySelector(".desc-toggle")?.setAttribute("aria-expanded","false");
            }
        });

        const isOpen = card.classList.toggle("expanded");
        toggle.setAttribute("aria-expanded", isOpen);

        return;
    }

    // Клик вне карточек — закрываем всё
    if(!card){
        document.querySelectorAll(".christmas-card.expanded").forEach(c=>{
            c.classList.remove("expanded");
            c.querySelector(".desc-toggle")?.setAttribute("aria-expanded","false");
        });
    }
});
