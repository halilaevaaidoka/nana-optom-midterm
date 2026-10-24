
'use strict';

// NANA OPTOM — About Page
// Languages: English, Russian, Kazakh

const aboutLanguage = ['en', 'ru', 'kk'].includes(
  localStorage.getItem('nana-language')
) ? localStorage.getItem('nana-language') : 'en';

const aboutTranslations = {
  en: {
    all: 'All Categories',
    showing: 'Showing',
    of: 'of',
    categories: 'categories',
    hideSteps: 'Hide Ordering Steps',
    showSteps: 'Show Ordering Steps',
    searchFacts: 'Search store facts...',
    factsShown: 'facts shown',
    categoryNames: [
      'Skincare',
      'Face Products',
      'Eye Products',
      'Lip Products'
    ],
    products: [
      ['Sunscreen', 'Toner'],
      ['Blush', 'Concealer', 'Contour', 'BB Cream'],
      ['Mascara', 'Eyeliner', 'Eyeshadow'],
      ['Lip Gloss', 'Lip Liner']
    ]
  },

  ru: {
    all: 'Все категории',
    showing: 'Показано',
    of: 'из',
    categories: 'категорий',
    hideSteps: 'Скрыть шаги заказа',
    showSteps: 'Показать шаги заказа',
    searchFacts: 'Поиск информации о магазине...',
    factsShown: 'фактов показано',
    categoryNames: [
      'Уход за кожей',
      'Косметика для лица',
      'Косметика для глаз',
      'Косметика для губ'
    ],
    products: [
      ['Солнцезащитный крем', 'Тонер'],
      ['Румяна', 'Консилер', 'Контуринг', 'BB-крем'],
      ['Тушь', 'Подводка', 'Тени для век'],
      ['Блеск для губ', 'Карандаш для губ']
    ]
  },

  kk: {
    all: 'Барлық санаттар',
    showing: 'Көрсетілгені',
    of: '/',
    categories: 'санат',
    hideSteps: 'Тапсырыс қадамдарын жасыру',
    showSteps: 'Тапсырыс қадамдарын көрсету',
    searchFacts: 'Дүкен туралы ақпаратты іздеу...',
    factsShown: 'дерек көрсетілді',
    categoryNames: [
      'Тері күтімі',
      'Бетке арналған косметика',
      'Көзге арналған косметика',
      'Ерінге арналған косметика'
    ],
    products: [
      ['Күннен қорғайтын крем', 'Тонер'],
      ['Бет далабы', 'Консилер', 'Контуринг', 'BB-крем'],
      ['Кірпік туші', 'Көз сүрмесі', 'Қабақ бояуы'],
      ['Ерін жылтыры', 'Ерін қарындашы']
    ]
  }
};

const at = aboutTranslations[aboutLanguage];

const aboutMain = document.getElementById('about-main');
const categoriesSection = document.getElementById('categories');
const stepsSection = document.getElementById('order-steps');
const factsSection = document.getElementById('store-facts');

function createAboutElement(tag, className = '', text = '') {
  const element = document.createElement(tag);

  if (className) element.className = className;
  element.textContent = text;

  return element;
}

// FEATURE 1: INTERACTIVE PRODUCT CATEGORIES

const categories = [
  { id: 0, products: [0, 1] },
  { id: 1, products: [0, 1, 2, 3] },
  { id: 2, products: [0, 1, 2] },
  { id: 3, products: [0, 1] }
];

const categoryControls = createAboutElement('div', 'mb-3');

const categorySelect = createAboutElement(
  'select',
  'form-select mb-3'
);

categorySelect.setAttribute('aria-label', at.all);

const allOption = createAboutElement('option', '', at.all);
allOption.value = 'all';
categorySelect.appendChild(allOption);

categories.forEach(category => {
  const option = createAboutElement(
    'option',
    '',
    at.categoryNames[category.id]
  );

  option.value = String(category.id);
  categorySelect.appendChild(option);
});

const categoryResults = createAboutElement('div', 'row g-3');
const categoryCount = createAboutElement('p', 'fw-bold');

categoryControls.append(
  categorySelect,
  categoryCount,
  categoryResults
);

categoriesSection.appendChild(categoryControls);

function renderCategories() {
  const selected = categorySelect.value;

  const filtered = categories.filter(category =>
    selected === 'all' || String(category.id) === selected
  );

  categoryResults.replaceChildren();

  categoryCount.textContent =
    `${at.showing} ${filtered.length} ${at.of} ${categories.length} ${at.categories}`;

  filtered.forEach(category => {
    const column = createAboutElement('div', 'col-12 col-md-6');
    const card = createAboutElement('article', 'card h-100');
    const body = createAboutElement('div', 'card-body');

    body.appendChild(
      createAboutElement(
        'h3',
        'h5 card-title',
        at.categoryNames[category.id]
      )
    );

    const list = createAboutElement('ul', 'mb-0');

    category.products.forEach(productIndex => {
      list.appendChild(
        createAboutElement(
          'li',
          '',
          at.products[category.id][productIndex]
        )
      );
    });

    body.appendChild(list);
    card.appendChild(body);
    column.appendChild(card);
    categoryResults.appendChild(column);
  });
}

categorySelect.addEventListener('change', renderCategories);

renderCategories();

// FEATURE 2: SHOW / HIDE ORDERING STEPS

const stepsList = stepsSection.querySelector('ol');

const toggleStepsButton = createAboutElement(
  'button',
  'btn btn-warning mb-3',
  at.hideSteps
);

toggleStepsButton.type = 'button';
toggleStepsButton.setAttribute('aria-expanded', 'true');

stepsSection.insertBefore(toggleStepsButton, stepsList);

let stepsVisible = true;

toggleStepsButton.addEventListener('click', () => {
  stepsVisible = !stepsVisible;

  stepsList.classList.toggle('d-none', !stepsVisible);

  toggleStepsButton.textContent = stepsVisible
    ? at.hideSteps
    : at.showSteps;

  toggleStepsButton.setAttribute(
    'aria-expanded',
    String(stepsVisible)
  );
});

// FEATURE 3: SEARCH STORE FACTS

const factsList = factsSection.querySelector('dl');
const factTerms = [...factsList.querySelectorAll('dt')];

const factsSearch = createAboutElement(
  'input',
  'form-control mb-3'
);

factsSearch.type = 'search';
factsSearch.placeholder = at.searchFacts;
factsSearch.setAttribute('aria-label', at.searchFacts);

const factsCount = createAboutElement('p', 'small text-muted');

factsList.before(factsSearch, factsCount);

function filterFacts() {
  const query = factsSearch.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  factTerms.forEach(term => {
    const description = term.nextElementSibling;

    const matches =
      term.textContent.toLocaleLowerCase().includes(query) ||
      description.textContent.toLocaleLowerCase().includes(query);

    term.classList.toggle('d-none', !matches);
    description.classList.toggle('d-none', !matches);

    if (matches) visibleCount += 1;
  });

  factsCount.textContent =
    `${visibleCount} ${at.of} ${factTerms.length} ${at.factsShown}`;
}

factsSearch.addEventListener('input', filterFacts);

filterFacts();

console.log('NANA OPTOM About language:', aboutLanguage);

 // ABOUT PAGE — STATIC CONTENT IN 3 LANGUAGES

const aboutPageTranslations = {
  en: {
    title: 'About NANA OPTOM',
    subtitle: 'Learn more about our store and products.',
    jump: 'Jump to:',
    explore: 'Explore Products',
    order: 'Place an Order',

    storyTitle: 'Our Story',
    foundedYear: 'Founded in 2020',
    story:
      'NANA OPTOM was founded in 2020 by Shafeeva Anastasia Valeryevna. We specialize in wholesale cosmetics and offer a wide range of beauty and skincare products. Our products are available to customers across Kazakhstan.',

    storeTitle: 'Our Store',
    photoCaption: 'NANA OPTOM — Beauty in Every Detail',
    photoCredit: 'Photograph by the project team.',
    photoAlt: 'NANA OPTOM cosmetics store',

    productsTitle: 'Our Products',
    mission:
      'NANA OPTOM offers <strong>cosmetics</strong> from different brands, including luxury and affordable products. Customers can find <em>skincare products</em> and makeup at wholesale prices. Our assortment includes products from Round Lab, Sen Sulu, Celimax and other cosmetic brands. We offer <mark>wholesale cosmetics</mark> for different needs and budgets.',

    categoriesTitle: 'Product Categories',
    available: 'Available Categories',
    categoryList: [
      'Skincare',
      'Sunscreen',
      'Toner',
      'Face Products',
      'Eye Products',
      'Lip Products'
    ],

    stepsTitle: 'How to Order',
    steps: [
      'Explore our cosmetics collection.',
      'Select the products you want to purchase.',
      'Open the Order page.',
      'Enter your contact and order details.',
      'Submit the order form.',
      'Your order confirmation will appear on the Order page.'
    ],

    factsTitle: 'Store Facts',
    factLabels: ['Founded', 'Founder', 'Specialization', 'Delivery'],
    factValues: [
      '2020',
      'Shafeeva Anastasia Valeryevna',
      'Wholesale Cosmetics',
      'Across Kazakhstan'
    ],
    contact: 'Contact:'
  },

  ru: {
    title: 'О NANA OPTOM',
    subtitle: 'Узнайте больше о нашем магазине и товарах.',
    jump: 'Перейти к:',
    explore: 'Посмотреть товары',
    order: 'Оформить заказ',

    storyTitle: 'Наша история',
    foundedYear: 'Основан в 2020 году',
    story:
      'NANA OPTOM был основан в 2020 году Шафеевой Анастасией Валерьевной. Мы специализируемся на оптовой продаже косметики и предлагаем широкий ассортимент декоративной и уходовой косметики. Наши товары доступны покупателям по всему Казахстану.',

    storeTitle: 'Наш магазин',
    photoCaption: 'NANA OPTOM — Красота в каждой детали',
    photoCredit: 'Фотография команды проекта.',
    photoAlt: 'Магазин косметики NANA OPTOM',

    productsTitle: 'Наши товары',
    mission:
      'NANA OPTOM предлагает <strong>косметику</strong> разных брендов, включая люксовые и доступные товары. Покупатели могут найти <em>уходовую косметику</em> и средства для макияжа по оптовым ценам. В ассортимент входят Round Lab, Sen Sulu, Celimax и другие бренды. Мы предлагаем <mark>косметику оптом</mark> для разных потребностей и бюджетов.',

    categoriesTitle: 'Категории товаров',
    available: 'Доступные категории',
    categoryList: [
      'Уход за кожей',
      'Солнцезащитный крем',
      'Тонер',
      'Косметика для лица',
      'Косметика для глаз',
      'Косметика для губ'
    ],

    stepsTitle: 'Как сделать заказ',
    steps: [
      'Посмотрите нашу коллекцию косметики.',
      'Выберите товары, которые хотите купить.',
      'Откройте страницу заказа.',
      'Введите контактные данные и информацию о заказе.',
      'Отправьте форму заказа.',
      'Подтверждение появится на странице заказа.'
    ],

    factsTitle: 'Информация о магазине',
    factLabels: ['Год основания', 'Основатель', 'Специализация', 'Доставка'],
    factValues: [
      '2020',
      'Шафеева Анастасия Валерьевна',
      'Оптовая продажа косметики',
      'По всему Казахстану'
    ],
    contact: 'Контакты:'
  },

  kk: {
    title: 'NANA OPTOM туралы',
    subtitle: 'Дүкеніміз бен тауарларымыз туралы толығырақ біліңіз.',
    jump: 'Өту:',
    explore: 'Тауарларды қарау',
    order: 'Тапсырыс беру',

    storyTitle: 'Біздің тарихымыз',
    foundedYear: '2020 жылы құрылған',
    story:
      'NANA OPTOM дүкенін 2020 жылы Шафеева Анастасия Валерьевна құрған. Біз косметиканы көтерме сатуға маманданамыз және сәндік косметика мен тері күтіміне арналған өнімдердің кең таңдауын ұсынамыз. Тауарларымыз Қазақстанның барлық аймағындағы сатып алушыларға қолжетімді.',

    storeTitle: 'Біздің дүкен',
    photoCaption: 'NANA OPTOM — Әр бөлшектегі сұлулық',
    photoCredit: 'Жоба командасының фотосуреті.',
    photoAlt: 'NANA OPTOM косметика дүкені',

    productsTitle: 'Біздің тауарлар',
    mission:
      'NANA OPTOM әртүрлі брендтердің <strong>косметикасын</strong> ұсынады. Олардың арасында люкс және қолжетімді өнімдер бар. Сатып алушылар <em>тері күтіміне арналған өнімдерді</em> және макияж құралдарын көтерме бағамен ала алады. Ассортиментімізде Round Lab, Sen Sulu, Celimax және басқа брендтер бар. Біз әртүрлі қажеттіліктер мен бюджеттерге арналған <mark>көтерме косметиканы</mark> ұсынамыз.',

    categoriesTitle: 'Тауар санаттары',
    available: 'Қолжетімді санаттар',
    categoryList: [
      'Тері күтімі',
      'Күннен қорғайтын крем',
      'Тонер',
      'Бетке арналған косметика',
      'Көзге арналған косметика',
      'Ерінге арналған косметика'
    ],

    stepsTitle: 'Қалай тапсырыс беруге болады',
    steps: [
      'Косметика топтамасын қараңыз.',
      'Сатып алғыңыз келетін тауарларды таңдаңыз.',
      'Тапсырыс бетіне өтіңіз.',
      'Байланыс деректеріңіз бен тапсырыс ақпаратын енгізіңіз.',
      'Тапсырыс формасын жіберіңіз.',
      'Тапсырысты растау ақпараты Order бетінде көрсетіледі.'
    ],

    factsTitle: 'Дүкен туралы деректер',
    factLabels: ['Құрылған жылы', 'Негізін қалаушы', 'Мамандануы', 'Жеткізу'],
    factValues: [
      '2020',
      'Шафеева Анастасия Валерьевна',
      'Косметиканы көтерме сату',
      'Қазақстан бойынша'
    ],
    contact: 'Байланыс:'
  }
};

const ap = aboutPageTranslations[aboutLanguage];

// HEADER

const aboutHeading = document.querySelector('header h1');
const aboutSubtitle = document.querySelector('header .lead');

if (aboutHeading) aboutHeading.textContent = ap.title;
if (aboutSubtitle) aboutSubtitle.textContent = ap.subtitle;

// QUICK LINKS

const aboutActions = document.getElementById('about-actions');

if (aboutActions) {
  const jumpLabel = aboutActions.querySelector('span');
  if (jumpLabel) jumpLabel.textContent = ap.jump;
}

[
  'explore-products-button',
  'story-products-button'
].forEach(id => {
  const button = document.getElementById(id);
  if (button) button.textContent = ap.explore;
});

[
  'place-order-button',
  'how-to-order-button'
].forEach(id => {
  const button = document.getElementById(id);
  if (button) button.textContent = ap.order;
});

// BRAND STORY

const storySection = document.getElementById('brand-story');

if (storySection) {
  storySection.querySelector('h2').textContent = ap.storyTitle;
  storySection.querySelector('.brand-year').textContent = ap.foundedYear;

  const storyParagraphs = storySection.querySelectorAll('p');

  if (storyParagraphs[1]) {
    storyParagraphs[1].textContent = ap.story;
  }
}

// STORE GALLERY

const storeGallery = document.getElementById('store-gallery');

if (storeGallery) {
  storeGallery.querySelector('h2').textContent = ap.storeTitle;

  const image = storeGallery.querySelector('img');
  if (image) image.alt = ap.photoAlt;

  const caption = storeGallery.querySelector('figcaption');

  if (caption) {
    caption.replaceChildren(
      document.createTextNode(ap.photoCaption + ' '),
      createAboutElement('small', '', ap.photoCredit)
    );
  }
}

// OUR PRODUCTS

const missionSection = document.getElementById('mission-section');

if (missionSection) {
  missionSection.querySelector('h2').textContent = ap.productsTitle;

  const missionParagraph = missionSection.querySelector('p');

  if (missionParagraph) {
    missionParagraph.innerHTML = ap.mission;
  }
}

// STATIC CATEGORIES

const staticCategories = document.querySelector('#categories aside');

if (staticCategories) {
  staticCategories.querySelector('h3').textContent = ap.available;

  const listItems = staticCategories.querySelectorAll('li');

  // Preserve the nested list inside Skincare
  if (listItems[0]) {
    const nestedList = listItems[0].querySelector('ul');

    listItems[0].replaceChildren(
      document.createTextNode(ap.categoryList[0] + ' '),
      nestedList
    );
  }

  if (listItems[1]) {
    listItems[1].textContent = ap.categoryList[1];
  }

  if (listItems[2]) {
    listItems[2].textContent = ap.categoryList[2];
  }

  if (listItems[3]) {
    listItems[3].textContent = ap.categoryList[3];
  }

  if (listItems[4]) {
    listItems[4].textContent = ap.categoryList[4];
  }

  if (listItems[5]) {
    listItems[5].textContent = ap.categoryList[5];
  }
}

const categoriesHeading = document.querySelector('#categories > h2');

if (categoriesHeading) {
  categoriesHeading.textContent = ap.categoriesTitle;
}

// ORDERING STEPS

const orderStepsSection = document.getElementById('order-steps');

if (orderStepsSection) {
  orderStepsSection.querySelector('h2').textContent = ap.stepsTitle;

  const stepItems = orderStepsSection.querySelectorAll('ol > li');

  stepItems.forEach((item, index) => {
    if (ap.steps[index]) {
      item.textContent = ap.steps[index];
    }
  });
}

// STORE FACTS

const storeFactsSection = document.getElementById('store-facts');

if (storeFactsSection) {
  storeFactsSection.querySelector('h2').textContent = ap.factsTitle;

  const terms = storeFactsSection.querySelectorAll('dt');
  const descriptions = storeFactsSection.querySelectorAll('dd');

  terms.forEach((term, index) => {
    if (ap.factLabels[index]) {
      term.textContent = ap.factLabels[index];
    }
  });

  descriptions.forEach((description, index) => {
    if (ap.factValues[index]) {
      description.textContent = ap.factValues[index];
    }
  });
}

// FOOTER CONTACT

const aboutFooterContact = document.querySelector('footer p');

if (aboutFooterContact) {
  const phoneLink = aboutFooterContact.querySelector('a');

  if (phoneLink) {
    aboutFooterContact.firstChild.textContent =
      `\n        ${ap.contact}\n        `;
  }
}

// Refresh facts search after translating content
filterFacts();

document.documentElement.lang = aboutLanguage;
