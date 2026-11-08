
'use strict';

// NANA OPTOM — About Page
// jQuery 3.7.1
// jQuery simplifies DOM manipulation, events, effects and traversal.
// The jQuery CDN must load before this file.

$(function () {

  // ================================
  // LANGUAGE SETTINGS
  // ================================

  const savedLanguage = localStorage.getItem('nana-language');
  const aboutLanguage = ['en', 'ru', 'kk'].includes(savedLanguage)
    ? savedLanguage
    : 'en';

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
      showProducts: 'Show Products',
      hideProducts: 'Hide Products',
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
      showProducts: 'Показать товары',
      hideProducts: 'Скрыть товары',
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
      showProducts: 'Тауарларды көрсету',
      hideProducts: 'Тауарларды жасыру',
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

  // ================================
  // PAGE TRANSLATIONS
  // ================================

  const aboutPageTranslations = {
    en: {
      title: 'About NANA OPTOM',
      subtitle: 'Learn more about our store and products.',
      jump: 'Jump to:',
      explore: 'Explore Products',
      order: 'Place an Order',
      storyTitle: 'Our Story',
      foundedYear: 'Founded in 2020',
      story: 'NANA OPTOM was founded in 2020 by Shafeeva Anastasia Valeryevna. We specialize in wholesale cosmetics and offer a wide range of beauty and skincare products. Our products are available to customers across Kazakhstan.',
      storeTitle: 'Our Store',
      photoCaption: 'NANA OPTOM — Beauty in Every Detail',
      photoCredit: 'Photograph by the project team.',
      photoAlt: 'NANA OPTOM cosmetics store',
      productsTitle: 'Our Products',
      mission: 'NANA OPTOM offers <strong>cosmetics</strong> from different brands, including luxury and affordable products. Customers can find <em>skincare products</em> and makeup at wholesale prices. Our assortment includes products from Round Lab, Sen Sulu, Celimax and other cosmetic brands. We offer <mark>wholesale cosmetics</mark> for different needs and budgets.',
      categoriesTitle: 'Product Categories',
      available: 'Available Categories',
      categoryList: [
        'Skincare', 'Sunscreen', 'Toner',
        'Face Products', 'Eye Products', 'Lip Products'
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
      factLabels: [
        'Founded', 'Founder', 'Specialization', 'Delivery'
      ],
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
      story: 'NANA OPTOM был основан в 2020 году Шафеевой Анастасией Валерьевной. Мы специализируемся на оптовой продаже косметики и предлагаем широкий ассортимент декоративной и уходовой косметики. Наши товары доступны покупателям по всему Казахстану.',
      storeTitle: 'Наш магазин',
      photoCaption: 'NANA OPTOM — Красота в каждой детали',
      photoCredit: 'Фотография команды проекта.',
      photoAlt: 'Магазин косметики NANA OPTOM',
      productsTitle: 'Наши товары',
      mission: 'NANA OPTOM предлагает <strong>косметику</strong> разных брендов, включая люксовые и доступные товары. Покупатели могут найти <em>уходовую косметику</em> и средства для макияжа по оптовым ценам. В ассортимент входят Round Lab, Sen Sulu, Celimax и другие бренды. Мы предлагаем <mark>косметику оптом</mark> для разных потребностей и бюджетов.',
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
      factLabels: [
        'Год основания', 'Основатель',
        'Специализация', 'Доставка'
      ],
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
      story: 'NANA OPTOM дүкенін 2020 жылы Шафеева Анастасия Валерьевна құрған. Біз косметиканы көтерме сатуға маманданамыз және сәндік косметика мен тері күтіміне арналған өнімдердің кең таңдауын ұсынамыз. Тауарларымыз Қазақстанның барлық аймағындағы сатып алушыларға қолжетімді.',
      storeTitle: 'Біздің дүкен',
      photoCaption: 'NANA OPTOM — Әр бөлшектегі сұлулық',
      photoCredit: 'Жоба командасының фотосуреті.',
      photoAlt: 'NANA OPTOM косметика дүкені',
      productsTitle: 'Біздің тауарлар',
      mission: 'NANA OPTOM әртүрлі брендтердің <strong>косметикасын</strong> ұсынады. Олардың арасында люкс және қолжетімді өнімдер бар. Сатып алушылар <em>тері күтіміне арналған өнімдерді</em> және макияж құралдарын көтерме бағамен ала алады. Ассортиментімізде Round Lab, Sen Sulu, Celimax және басқа брендтер бар. Біз әртүрлі қажеттіліктер мен бюджеттерге арналған <mark>көтерме косметиканы</mark> ұсынамыз.',
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
      factLabels: [
        'Құрылған жылы', 'Негізін қалаушы',
        'Мамандануы', 'Жеткізу'
      ],
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

  // ================================
  // STATIC PAGE TRANSLATIONS
  // ================================

  $('header h1').text(ap.title);
  $('header .lead').text(ap.subtitle);

  $('#about-actions').find('span').first().text(ap.jump);

  $('#explore-products-button, #story-products-button')
    .text(ap.explore);

  $('#place-order-button, #how-to-order-button')
    .text(ap.order);

  $('#brand-story').find('h2').text(ap.storyTitle);
  $('#brand-story').find('.brand-year').text(ap.foundedYear);
  $('#brand-story').find('p').eq(1).text(ap.story);

  $('#store-gallery').find('h2').text(ap.storeTitle);
  $('#store-gallery').find('img').attr('alt', ap.photoAlt);

  const $caption = $('#store-gallery figcaption');

  if ($caption.length) {
    $caption.empty()
      .append(document.createTextNode(ap.photoCaption + ' '))
      .append($('<small>').text(ap.photoCredit));
  }

  $('#mission-section').find('h2').text(ap.productsTitle);
  $('#mission-section').find('p').first().html(ap.mission);

  $('#categories > h2').text(ap.categoriesTitle);
  $('#categories aside h3').text(ap.available);

  const $staticItems = $('#categories aside li');

  const $firstItem = $staticItems.first();
  const $nestedList = $firstItem.children('ul').detach();

  $firstItem.empty()
    .append(document.createTextNode(ap.categoryList[0] + ' '))
    .append($nestedList);

  $staticItems.slice(1).each(function (index) {
    if (ap.categoryList[index + 1]) {
      $(this).text(ap.categoryList[index + 1]);
    }
  });

  $('#order-steps h2').text(ap.stepsTitle);

  $('#order-steps ol > li').each(function (index) {
    if (ap.steps[index]) {
      $(this).text(ap.steps[index]);
    }
  });

  $('#store-facts h2').text(ap.factsTitle);

  $('#store-facts dt').each(function (index) {
    if (ap.factLabels[index]) {
      $(this).text(ap.factLabels[index]);
    }
  });

  $('#store-facts dd').each(function (index) {
    if (ap.factValues[index]) {
      $(this).text(ap.factValues[index]);
    }
  });

  const $footerContact = $('footer p').first();

  if ($footerContact.length) {
    $footerContact.contents().filter(function () {
      return this.nodeType === 3;
    }).first().replaceWith(ap.contact + ' ');
  }

  $('html').attr('lang', aboutLanguage);

  // ================================
  // FEATURE 1: PRODUCT CATEGORIES
  // ================================
  // .val(), .empty(), .append() and .text()
  // replace native value, replaceChildren,
  // appendChild and textContent.

  const categories = [
    { id: 0, products: [0, 1] },
    { id: 1, products: [0, 1, 2, 3] },
    { id: 2, products: [0, 1, 2] },
    { id: 3, products: [0, 1] }
  ];

  const $categoryControls = $('<div>').addClass('mb-3');

  const $categorySelect = $('<select>')
    .addClass('form-select mb-3')
    .attr('aria-label', at.all);

  $categorySelect.append(
    $('<option>').val('all').text(at.all)
  );

  categories.forEach(function (category) {
    $categorySelect.append(
      $('<option>')
        .val(String(category.id))
        .text(at.categoryNames[category.id])
    );
  });

  const $categoryCount = $('<p>').addClass('fw-bold');
  const $categoryResults = $('<div>').addClass('row g-3');

  $categoryControls.append(
    $categorySelect,
    $categoryCount,
    $categoryResults
  );

  $('#categories').append($categoryControls);

  function renderCategories() {
    const selected = $categorySelect.val();

    const filtered = categories.filter(function (category) {
      return selected === 'all' ||
        String(category.id) === selected;
    });

    $categoryResults.empty();

    $categoryCount.text(
      `${at.showing} ${filtered.length} ${at.of} ${categories.length} ${at.categories}`
    );

    filtered.forEach(function (category) {
      const $column = $('<div>').addClass('col-12 col-md-6');

      const $card = $('<article>')
        .addClass('card h-100');

      const $body = $('<div>').addClass('card-body');

      const $heading = $('<h3>')
        .addClass('h5 card-title')
        .text(at.categoryNames[category.id]);

      const $button = $('<button>')
        .attr('type', 'button')
        .attr('aria-expanded', 'true')
        .addClass('btn btn-warning mb-3 category-toggle')
        .text(at.hideProducts);

      const $list = $('<ul>').addClass('mb-0');

      category.products.forEach(function (productIndex) {
        $list.append(
          $('<li>').text(
            at.products[category.id][productIndex]
          )
        );
      });

      $body.append($heading, $button, $list);
      $card.append($body);
      $column.append($card);

      $categoryResults.append($column);
    });
  }

  $categorySelect.on('change', renderCategories);

  renderCategories();

  // ================================
  // DELEGATED EVENT
  // ================================
  // The parent exists before the cards are created.
  // Direct binding to dynamic buttons would not
  // automatically handle newly rendered buttons.

  $categoryResults.on(
    'click',
    '.category-toggle',
    function () {
      const $button = $(this);

      const $card = $button.closest('.card');

      const $list = $card.find('ul').first();

      const isExpanded =
        $button.attr('aria-expanded') === 'true';

      $list.stop(true, true).slideToggle(300, function () {
        console.log('Category animation completed');
      });

      $button
        .attr('aria-expanded', String(!isExpanded))
        .text(isExpanded ? at.showProducts : at.hideProducts);
    }
  );

  // ================================
  // FEATURE 2: SHOW / HIDE STEPS
  // ================================
  // .on() replaces addEventListener().
  // .slideToggle() replaces manual visibility changes.

  const $stepsList = $('#order-steps ol');

  const $toggleStepsButton = $('<button>')
    .attr('type', 'button')
    .attr('aria-expanded', 'true')
    .addClass('btn btn-warning mb-3')
    .text(at.hideSteps);

  $stepsList.before($toggleStepsButton);

  let stepsVisible = true;

  $toggleStepsButton.on('click', function () {
    stepsVisible = !stepsVisible;

    $stepsList.stop(true, true).slideToggle(300);

    $(this)
      .text(stepsVisible ? at.hideSteps : at.showSteps)
      .attr('aria-expanded', String(stepsVisible));
  });

  // ================================
  // FEATURE 3: SEARCH STORE FACTS
  // ================================
  // .each() replaces forEach().
  // .next() replaces nextElementSibling.
  // .toggleClass() replaces classList.toggle().

  const $factsList = $('#store-facts dl');

  const $factsSearch = $('<input>')
    .attr('type', 'search')
    .attr('placeholder', at.searchFacts)
    .attr('aria-label', at.searchFacts)
    .addClass('form-control mb-3');

  const $factsCount = $('<p>').addClass('small text-muted');

  $factsList.before($factsSearch, $factsCount);

  function filterFacts() {
    const query = String($factsSearch.val() || '')
      .trim()
      .toLocaleLowerCase();

    let visibleCount = 0;

    $factsList.find('dt').each(function () {
      const $term = $(this);
      const $description = $term.next('dd');

      const matches =
        $term.text().toLocaleLowerCase().includes(query) ||
        $description.text().toLocaleLowerCase().includes(query);

      $term.toggleClass('d-none', !matches);
      $description.toggleClass('d-none', !matches);

      if (matches) {
        visibleCount += 1;
      }
    });

    $factsCount.text(
      `${visibleCount} ${at.of} ${$factsList.find('dt').length} ${at.factsShown}`
    );
  }

  $factsSearch.on('input', filterFacts);
  // Reset Search button using jQuery
const resetLabels = {
  en: 'Reset Search',
  ru: 'Сбросить поиск',
  kk: 'Іздеуді тазалау'
};

const $resetSearch = $('<button>')
  .attr('type', 'button')
  .addClass('btn btn-outline-warning mb-3')
  .text(resetLabels[aboutLanguage]);

$factsSearch.after($resetSearch);

$resetSearch.on('click', function () {
  $factsSearch.val('');

  filterFacts();

  $factsList
    .find('dt, dd')
    .hide()
    .fadeIn(300);
});

  filterFacts();

  // ================================
  // EFFECT 3: STORE GALLERY
  // ================================
  // Fade effect lets visitors show or hide
  // the store image.

  const $galleryImage = $('#store-gallery img');

  if ($galleryImage.length) {
    const galleryLabels = {
      en: ['Hide Store Photo', 'Show Store Photo'],
      ru: ['Скрыть фото магазина', 'Показать фото магазина'],
      kk: ['Дүкен суретін жасыру', 'Дүкен суретін көрсету']
    };

    const labels = galleryLabels[aboutLanguage];

    const $galleryButton = $('<button>')
      .attr('type', 'button')
      .attr('aria-expanded', 'true')
      .addClass('btn btn-warning mb-3')
      .text(labels[0]);

    $galleryImage.before($galleryButton);

    $galleryButton.on('click', function () {
      const $button = $(this);

      const expanded =
        $button.attr('aria-expanded') === 'true';

      $galleryImage.stop(true, true).fadeToggle(300, function () {
        console.log('Gallery effect finished');
      });

      $button
        .attr('aria-expanded', String(!expanded))
        .text(expanded ? labels[1] : labels[0]);
    });
  }

  // ================================
  // TRAVERSAL AND CHAINING
  // ================================

  // Chain 1:
  // find() selects the title,
  // first() selects its first match,
  // text() updates its content.

  $('#brand-story')
    .find('h2')
    .first()
    .text(ap.storyTitle);

  // Chain 2:
  // find() selects the image,
  // first() selects the first image,
  // attr() sets its accessible description.

  $('#store-gallery')
    .find('img')
    .first()
    .attr('alt', ap.photoAlt);

  // .parent() and .siblings() are useful
  // when working with related DOM elements.

 // DOM Traversal: parent(), siblings(), find()
// Highlight the category card when hovering over its button.

$categoryResults.on(
  'mouseenter',
  '.category-toggle',
  function () {
    const $button = $(this);

    $button
      .parent()
      .parent()
      .addClass('border-warning shadow-sm');

    $button
      .siblings('h3')
      .addClass('text-warning');
  }
);

$categoryResults.on(
  'mouseleave',
  '.category-toggle',
  function () {
    const $button = $(this);

    $button
      .parent()
      .parent()
      .removeClass('border-warning shadow-sm');

    $button
      .siblings('h3')
      .removeClass('text-warning');
  }
);

  // ================================
  // JQUERY METHODS USED
  // ================================

  // Selectors:
  // #id, .class, element, [attribute], :first

  // Traversal:
  // .find(), .closest(), .parent(),
  // .siblings(), .each(), .next()

  // DOM:
  // .text(), .html(), .val(), .attr(),
  // .append(), .empty(), .addClass(),
  // .toggleClass(), .hasClass()

  // Events:
  // click, change, input, mouseenter

  // Effects:
  // .slideToggle(), .fadeToggle()

  console.log('NANA OPTOM About language:', aboutLanguage);
  console.log('jQuery About Page initialized');

});
