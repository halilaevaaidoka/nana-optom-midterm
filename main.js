
'use strict';

// NANA OPTOM — Shared JavaScript + 3 Languages

function createSharedElement(tag, className = '', text = '') {
  const element = document.createElement(tag);

  if (className) element.className = className;
  element.textContent = text;

  return element;
}

// LANGUAGE SYSTEM

const translations = {
  en: {
    home: 'Home',
    products: 'Products',
    order: 'Order',
    about: 'About',
    feedback: 'Feedback',
    login: 'Login',
    brandSubtitle: 'Wholesale Cosmetics',
    backToTop: '↑ Back to Top',
    currentTime: 'Current date and time',
    contact: 'Contact',
    search: 'Search products...',
    allCategories: 'All Categories',
    sortDefault: 'Sort by: Default',
    resetFilters: 'Reset Filters',
    addToCart: 'Add to Cart',
    shoppingCart: 'Shopping Cart',
    clearCart: 'Clear Cart',
    checkout: 'Checkout',
    emptyCart: 'Your cart is empty.',
    remove: 'Remove',
    total: 'Total',
    items: 'Items',
    product: 'Product',
    category: 'Category',
    price: 'Price',
    action: 'Action',
    city: 'City',
    address: 'Delivery Address',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    quantity: 'Quantity',
    submitOrder: 'Submit Order',
    resetForm: 'Reset Form'
  },

  ru: {
    home: 'Главная',
    products: 'Товары',
    order: 'Заказ',
    about: 'О нас',
    feedback: 'Отзывы',
    login: 'Вход',
    brandSubtitle: 'Оптовая косметика',
    backToTop: '↑ Наверх',
    currentTime: 'Текущая дата и время',
    contact: 'Контакты',
    search: 'Поиск товаров...',
    allCategories: 'Все категории',
    sortDefault: 'Сортировка: по умолчанию',
    resetFilters: 'Сбросить фильтры',
    addToCart: 'В корзину',
    shoppingCart: 'Корзина',
    clearCart: 'Очистить корзину',
    checkout: 'Оформить',
    emptyCart: 'Корзина пуста.',
    remove: 'Удалить',
    total: 'Итого',
    items: 'Товаров',
    product: 'Товар',
    category: 'Категория',
    price: 'Цена',
    action: 'Действие',
    city: 'Город',
    address: 'Адрес доставки',
    fullName: 'Полное имя',
    email: 'Эл. почта',
    phone: 'Номер телефона',
    quantity: 'Количество',
    submitOrder: 'Оформить заказ',
    resetForm: 'Очистить форму'
  },

  kk: {
    home: 'Басты бет',
    products: 'Тауарлар',
    order: 'Тапсырыс',
    about: 'Біз туралы',
    feedback: 'Пікірлер',
    login: 'Кіру',
    brandSubtitle: 'Көтерме косметика',
    backToTop: '↑ Жоғарыға',
    currentTime: 'Ағымдағы күн мен уақыт',
    contact: 'Байланыс',
    search: 'Тауарларды іздеу...',
    allCategories: 'Барлық санаттар',
    sortDefault: 'Сұрыптау: әдепкі',
    resetFilters: 'Сүзгіні тазалау',
    addToCart: 'Себетке қосу',
    shoppingCart: 'Себет',
    clearCart: 'Себетті тазалау',
    checkout: 'Рәсімдеу',
    emptyCart: 'Себет бос.',
    remove: 'Өшіру',
    total: 'Барлығы',
    items: 'Тауар саны',
    product: 'Тауар',
    category: 'Санат',
    price: 'Баға',
    action: 'Әрекет',
    city: 'Қала',
    address: 'Жеткізу мекенжайы',
    fullName: 'Толық аты-жөні',
    email: 'Эл. пошта',
    phone: 'Телефон нөмірі',
    quantity: 'Саны',
    submitOrder: 'Тапсырыс беру',
    resetForm: 'Форманы тазалау'
  }
};

// Read saved language
let currentLanguage = localStorage.getItem('nana-language') || 'en';

if (!translations[currentLanguage]) {
  currentLanguage = 'en';
}

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

// Create language switcher in navbar
const navbarContainer = document.querySelector('.navbar .container');

const languageSelect = createSharedElement(
  'select',
  'form-select form-select-sm ms-3'
);

languageSelect.setAttribute('aria-label', 'Choose language');
languageSelect.setAttribute(
  'style',
  'width: auto; background-color: #243b5a; color: #f4bf63; border-color: #d8aa58;'
);

[
  ['en', 'ENG'],
  ['ru', 'РУС'],
  ['kk', 'ҚАЗ']
].forEach(([value, label]) => {
  const option = createSharedElement('option', '', label);
  option.value = value;
  languageSelect.appendChild(option);
});

languageSelect.value = currentLanguage;

if (navbarContainer) {
  navbarContainer.appendChild(languageSelect);
}

// Apply translations to static elements
function translateStaticPage() {
  document.documentElement.lang = currentLanguage;

  const navNames = {
    'index.html': 'home',
    'products.html': 'products',
    'order.html': 'order',
    'about.html': 'about',
    'feedback.html': 'feedback',
    'login.html': 'login'
  };

  document.querySelectorAll('.navbar a[href]').forEach(link => {
    const page = link.getAttribute('href');
    const key = navNames[page];

    if (key) link.textContent = t(key);
  });

  const subtitle = document.querySelector('header .lead');

  if (subtitle && subtitle.textContent.trim() === 'Wholesale Cosmetics') {
    subtitle.textContent = t('brandSubtitle');
  }

  if (backToTop) {
    backToTop.textContent = t('backToTop');
  }
}

// Language change
languageSelect.addEventListener('change', () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem('nana-language', currentLanguage);

  // Reload so page scripts can use selected language
  window.location.reload();
});

// BACK TO TOP

const footer = document.querySelector('footer');

let backToTop = null;

if (footer) {
  backToTop = createSharedElement(
    'button',
    'btn btn-warning mb-3',
    t('backToTop')
  );

  backToTop.type = 'button';
  footer.prepend(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// CURRENT DATE AND TIME

const currentDate = createSharedElement(
  'p',
  'small text-center mt-2'
);

if (footer) {
  footer.appendChild(currentDate);
}

function updateDateTime() {
  const now = new Date();

  const locale = {
    en: 'en-GB',
    ru: 'ru-RU',
    kk: 'kk-KZ'
  }[currentLanguage];

  currentDate.textContent =
    `${t('currentTime')}: ${now.toLocaleString(locale)}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// NAVIGATION ACTIVE STATE

const currentPage =
  window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.navbar a[href]').forEach(link => {
  const page = link.getAttribute('href');

  if (page === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  } else {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  }
});

// MOBILE NAVIGATION

const navbarCollapse = document.getElementById('mainNavbar');

if (navbarCollapse && typeof bootstrap !== 'undefined') {
  navbarCollapse.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        bootstrap.Collapse
          .getOrCreateInstance(navbarCollapse)
          .hide();
      }
    });
  });
}

// APPLY LANGUAGE

translateStaticPage();

console.log('NANA OPTOM language:', currentLanguage);

// HOME PAGE — 3 LANGUAGE TRANSLATIONS

const homeTranslations = {
  en: {
    heroLabel: 'PREMIUM BEAUTY COLLECTION',
    heroDescription: 'Discover premium cosmetics and skincare products for every style, need, and budget. NANA OPTOM brings beauty and quality together.',
    heroButton: 'SHOP NOW',
    pageTitle: 'NANA OPTOM | Home',
    welcomeTitle: 'Welcome to NANA OPTOM',
    welcomeText:
      'NANA OPTOM is a wholesale cosmetics store in Kazakhstan. Founded in 2020, it offers beauty and skincare products for different needs and budgets.',

    philosophyTitle: 'Our Philosophy',
    philosophyText:
      'NANA OPTOM believes that everyone can find beauty products that suit their individual needs. Our collection brings together cosmetics for everyday care and makeup.',

    journeyTitle: 'Brand Journey',
    journeyText:
      'NANA OPTOM began its journey in 2020. Today, the store offers a selection of cosmetic products to customers across Kazakhstan.',

    offerTitle: 'What We Offer',
    offerBefore:
      'Explore wholesale cosmetics for face, lips, eyes, and brows, as well as skincare products from different brands. Visit our ',
    offerLink: 'Products page',
    offerAfter: ' to see the collection and prices.',

    contactTitle: 'Contact Information',
    phone: 'Phone:',
    workingHours: 'Working hours: 10:00–19:00',
    footerContact: 'Contact:'
  },

  ru: {
    heroLabel: 'ПРЕМИАЛЬНАЯ КОЛЛЕКЦИЯ КОСМЕТИКИ',
    heroDescription: 'Откройте для себя качественную декоративную и уходовую косметику на любой вкус, потребность и бюджет. NANA OPTOM объединяет красоту и качество.',
    heroButton: 'КУПИТЬ СЕЙЧАС',
    pageTitle: 'NANA OPTOM | Главная',
    welcomeTitle: 'Добро пожаловать в NANA OPTOM',
    welcomeText:
      'NANA OPTOM — магазин оптовой косметики в Казахстане. Основанный в 2020 году, он предлагает декоративную и уходовую косметику для разных потребностей и бюджетов.',

    philosophyTitle: 'Наша философия',
    philosophyText:
      'NANA OPTOM считает, что каждый может найти косметику, подходящую именно ему. Наша коллекция объединяет средства для ежедневного ухода и макияжа.',

    journeyTitle: 'История бренда',
    journeyText:
      'История NANA OPTOM началась в 2020 году. Сегодня магазин предлагает широкий выбор косметических товаров покупателям по всему Казахстану.',

    offerTitle: 'Что мы предлагаем',
    offerBefore:
      'Откройте для себя косметику оптом для лица, губ, глаз и бровей, а также уходовые средства разных брендов. Посетите нашу ',
    offerLink: 'страницу товаров',
    offerAfter: ', чтобы посмотреть ассортимент и цены.',

    contactTitle: 'Контактная информация',
    phone: 'Телефон:',
    workingHours: 'Время работы: 10:00–19:00',
    footerContact: 'Контакты:'
  },

  kk: {
    heroLabel: 'ПРЕМИУМ КОСМЕТИКА ТОПТАМАСЫ',
    heroDescription: 'Кез келген талғамға, қажеттілікке және бюджетке сай сәндік және күтім косметикасын таңдаңыз. NANA OPTOM сұлулық пен сапаны біріктіреді.',
    heroButton: 'ТАУАРЛАРДЫ ҚАРАУ',
    pageTitle: 'NANA OPTOM | Басты бет',
    welcomeTitle: 'NANA OPTOM дүкеніне қош келдіңіз',
    welcomeText:
      'NANA OPTOM — Қазақстандағы косметиканы көтерме сататын дүкен. 2020 жылы құрылған дүкен әртүрлі қажеттіліктер мен бюджеттерге арналған сәндік косметика мен тері күтімі өнімдерін ұсынады.',

    philosophyTitle: 'Біздің философиямыз',
    philosophyText:
      'NANA OPTOM әр адам өзіне сәйкес келетін косметикалық өнімдерді таба алады деп сенеді. Біздің топтамада күнделікті күтімге және макияжға арналған өнімдер бар.',

    journeyTitle: 'Бренд тарихы',
    journeyText:
      'NANA OPTOM тарихы 2020 жылы басталды. Бүгінде дүкен Қазақстанның түкпір-түкпіріндегі сатып алушыларға косметикалық өнімдердің кең таңдауын ұсынады.',

    offerTitle: 'Біз не ұсынамыз',
    offerBefore:
      'Бетке, ерінге, көзге және қасқа арналған көтерме косметиканы, сондай-ақ әртүрлі брендтердің тері күтімі өнімдерін қараңыз. Ассортимент пен бағаларды көру үшін ',
    offerLink: 'Тауарлар бетіне',
    offerAfter: ' өтіңіз.',

    contactTitle: 'Байланыс ақпараты',
    phone: 'Телефон:',
    workingHours: 'Жұмыс уақыты: 10:00–19:00',
    footerContact: 'Байланыс:'
  }
};

// Run home translations only on index.html

if (
  currentPage === 'index.html' &&
  document.getElementById('home-main')
) {
  const ht = homeTranslations[currentLanguage];

  document.title = ht.pageTitle;

  // Translate the hero copy without changing the brand name or CSS.
  const heroTexts = {
    label: 'PREMIUM BEAUTY COLLECTION',
    description: 'Discover premium cosmetics and skincare products',
    button: 'SHOP NOW'
  };

  const leafElements = Array.from(document.querySelectorAll('body *'))
    .filter(element => element.children.length === 0);

  const heroLabel = leafElements.find(element =>
    element.textContent.trim() === heroTexts.label
  );

  const heroDescription = leafElements.find(element =>
    element.textContent.trim().startsWith(heroTexts.description)
  );

  const heroButton = Array.from(document.querySelectorAll('a, button'))
    .find(element =>
      element.textContent.trim().startsWith(heroTexts.button)
    );

  if (heroLabel) heroLabel.textContent = ht.heroLabel;
  if (heroDescription) heroDescription.textContent = ht.heroDescription;
  if (heroButton) heroButton.textContent = ht.heroButton + ' →';

  // Helper: translate section heading and paragraph

  function translateHomeSection(id, heading, paragraph) {
    const section = document.getElementById(id);

    if (!section) return;

    const h2 = section.querySelector('h2');
    const p = section.querySelector('p');

    if (h2) h2.textContent = heading;
    if (p) p.textContent = paragraph;
  }

  // WELCOME

  translateHomeSection(
    'welcome-section',
    ht.welcomeTitle,
    ht.welcomeText
  );

  // PHILOSOPHY

  translateHomeSection(
    'philosophy-section',
    ht.philosophyTitle,
    ht.philosophyText
  );

  // BRAND JOURNEY

  translateHomeSection(
    'journey-section',
    ht.journeyTitle,
    ht.journeyText
  );

  // WHAT WE OFFER

  const offerSection = document.getElementById('offer-section');

  if (offerSection) {
    const heading = offerSection.querySelector('h2');
    const paragraph = offerSection.querySelector('p');

    if (heading) {
      heading.textContent = ht.offerTitle;
    }

    if (paragraph) {
      const productsLink = document.createElement('a');
      productsLink.href = 'products.html';
      productsLink.textContent = ht.offerLink;

      paragraph.replaceChildren(
        document.createTextNode(ht.offerBefore),
        productsLink,
        document.createTextNode(ht.offerAfter)
      );
    }
  }

  // CONTACT INFORMATION

  const contactSection = document.getElementById('contact-section');

  if (contactSection) {
    const heading = contactSection.querySelector('h2');

    if (heading) {
      heading.textContent = ht.contactTitle;
    }

    const paragraphs = contactSection.querySelectorAll('p');

    // Phone: preserve clickable telephone link

    if (paragraphs[0]) {
      const phoneLink = paragraphs[0].querySelector('a');

      if (phoneLink) {
        paragraphs[0].replaceChildren(
          document.createTextNode(ht.phone + ' '),
          phoneLink
        );
      }
    }

    // Working hours

    if (paragraphs[3]) {
      paragraphs[3].textContent = ht.workingHours;
    }
  }

  // FOOTER CONTACT

  const footerContact = document.querySelector('footer p');

  if (footerContact) {
    const phoneLink = footerContact.querySelector('a');

    if (phoneLink) {
      footerContact.replaceChildren(
        document.createTextNode(ht.footerContact + ' '),
        phoneLink
      );
    }
  }
}

// SHARED NAVBAR — SAME STYLE AS ORDER

(() => {
  const nav = document.querySelector('.navbar');
  const container = nav?.querySelector('.container');

  if (!container) return;

  // Keep the brand name unchanged in every language.
  const brand = container.querySelector('.navbar-brand');

  if (brand) {
    brand.textContent = 'NANA OPTOM';
  }

  // Order already has its own tools and language buttons.
  if (container.querySelector('.order-nav-tools')) return;

  const login = container.querySelector('.login-link');
  const oldLanguageSelect = container.querySelector('select');

  const tools = document.createElement('div');
  tools.className = 'order-nav-tools';

  // Cart link
  const cartLink = document.createElement('a');
  cartLink.className = 'order-cart-link';
  cartLink.href = 'order.html#cart-summary';
  cartLink.setAttribute(
    'aria-label',
    {
      en: 'View order summary',
      ru: 'Посмотреть заказ',
      kk: 'Тапсырысты қарау'
    }[currentLanguage] || 'View order summary'
  );

  cartLink.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 3h2l2 12h12l2-8H6"></path>
      <circle cx="9" cy="20" r="1"></circle>
      <circle cx="18" cy="20" r="1"></circle>
    </svg>
    <span class="shared-cart-count">0</span>
  `;

  function updateCartCount() {
    let count = 0;

    try {
      const cart = JSON.parse(
        sessionStorage.getItem('nana-order-cart') || '[]'
      );

      if (Array.isArray(cart)) {
        count = cart.reduce((sum, item) => {
          const quantity = Number(item.quantity);

          return sum + (
            Number.isInteger(quantity) && quantity > 0
              ? quantity
              : 0
          );
        }, 0);
      }
    } catch {
      count = 0;
    }

    cartLink.querySelector('.shared-cart-count').textContent = count;
  }

  updateCartCount();
  window.addEventListener('pageshow', updateCartCount);

  // Three language buttons instead of a dropdown.
  const languages = document.createElement('div');
  languages.className = 'order-languages';
  languages.setAttribute('aria-label', 'Language');

  [
    ['kk', 'ҚАЗ'],
    ['ru', 'РУС'],
    ['en', 'ENG']
  ].forEach(([value, label]) => {
    const button = document.createElement('button');

    button.type = 'button';
    button.textContent = label;
    button.dataset.orderLang = value;

    const selected = value === currentLanguage;

    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));

    button.addEventListener('click', () => {
      if (oldLanguageSelect) {
        oldLanguageSelect.value = value;

        // Use the existing language change handler.
        oldLanguageSelect.dispatchEvent(
          new Event('change', { bubbles: true })
        );
      } else {
        try {
          localStorage.setItem('nana-language', value);
        } catch {
          // Storage may be unavailable.
        }

        window.location.reload();
      }
    });

    languages.appendChild(button);
  });

  if (oldLanguageSelect) {
    oldLanguageSelect.hidden = true;
    oldLanguageSelect.style.setProperty(
      'display',
      'none',
      'important'
    );
  }

  tools.append(cartLink, languages);
  container.insertBefore(tools, login || null);
})();

/* NANA OPTOM — SHARED CART COUNTER */

(() => {
  function updateNavbarCart() {
    let count = 0;

    try {
      const cart = JSON.parse(
        sessionStorage.getItem('nana-order-cart') || '[]'
      );

      if (Array.isArray(cart)) {
        count = cart.reduce(
          (sum, item) => sum + (Number(item.quantity) || 0),
          0
        );
      }
    } catch {
      count = 0;
    }

    document.querySelectorAll(
      '#cart-count, #cartCount, [data-cart-count]'
    ).forEach(element => {
      element.textContent = count;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateNavbarCart);
  } else {
    updateNavbarCart();
  }

  window.addEventListener('nana-cart-updated', updateNavbarCart);
  window.addEventListener('pageshow', updateNavbarCart);
})();
