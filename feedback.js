
'use strict';

// NANA OPTOM — Feedback
// Languages: English, Russian, Kazakh

const feedbackLanguage = ['en', 'ru', 'kk'].includes(
  localStorage.getItem('nana-language')
) ? localStorage.getItem('nana-language') : 'en';

const feedbackTranslations = {
  en: {
    heading: 'Customer Feedback',
    subtitle: 'Share your experience with NANA OPTOM.',
    reviews: 'Customer Reviews',
    rating: 'Rating',
    characters: 'characters',
    confirmation: 'Feedback Confirmation',
    waiting: 'After submitting the form, your feedback confirmation will appear here.',
    success: 'Thank you! Your feedback has been added to the demo page.',
    disclaimer: 'Demo only. Feedback is not sent to a server.',
    name: 'Name',
    product: 'Product',
    nameError: 'Enter at least 3 characters.',
    emailError: 'Enter a valid email address.',
    phoneError: 'Enter a valid phone number.',
    dateError: 'Choose today or an earlier date.',
    countError: 'Enter a positive whole number.',
    productError: 'Select a product.',
    messageError: 'Feedback must contain 10–500 characters.',
    ratingError: 'Please choose a rating from 1 to 5.',
    products: {
      'Lip Gloss': 'Lip Gloss',
      'Mascara': 'Mascara',
      'Round Lab SPF': 'Round Lab SPF'
    },
    reviewMessages: [
      'Beautiful shine and comfortable texture.',
      'Easy to apply and lasts throughout the day.',
      'Lightweight sunscreen for everyday use.'
    ]
  },

  ru: {
    heading: 'Отзывы покупателей',
    subtitle: 'Поделитесь своим опытом с NANA OPTOM.',
    reviews: 'Отзывы покупателей',
    rating: 'Оценка',
    characters: 'символов',
    confirmation: 'Подтверждение отзыва',
    waiting: 'После отправки формы здесь появится подтверждение отзыва.',
    success: 'Спасибо! Ваш отзыв добавлен на демонстрационную страницу.',
    disclaimer: 'Это демонстрация. Отзыв не отправляется на сервер.',
    name: 'Имя',
    product: 'Товар',
    nameError: 'Введите минимум 3 символа.',
    emailError: 'Введите корректный email.',
    phoneError: 'Введите корректный номер телефона.',
    dateError: 'Выберите сегодняшнюю или более раннюю дату.',
    countError: 'Введите целое положительное число.',
    productError: 'Выберите товар.',
    messageError: 'Отзыв должен содержать от 10 до 500 символов.',
    ratingError: 'Выберите оценку от 1 до 5.',
    products: {
      'Lip Gloss': 'Блеск для губ',
      'Mascara': 'Тушь для ресниц',
      'Round Lab SPF': 'Солнцезащитный крем Round Lab'
    },
    reviewMessages: [
      'Красивый блеск и приятная текстура.',
      'Легко наносится и держится весь день.',
      'Лёгкий солнцезащитный крем на каждый день.'
    ]
  },

  kk: {
    heading: 'Сатып алушылардың пікірлері',
    subtitle: 'NANA OPTOM туралы пікіріңізді бөлісіңіз.',
    reviews: 'Сатып алушылардың пікірлері',
    rating: 'Баға',
    characters: 'таңба',
    confirmation: 'Пікірді растау',
    waiting: 'Форманы жібергеннен кейін пікірді растау ақпараты осында шығады.',
    success: 'Рақмет! Пікіріңіз демонстрациялық бетке қосылды.',
    disclaimer: 'Бұл тек демонстрация. Пікір серверге жіберілмейді.',
    name: 'Аты',
    product: 'Тауар',
    nameError: 'Кемінде 3 таңба енгізіңіз.',
    emailError: 'Дұрыс email енгізіңіз.',
    phoneError: 'Дұрыс телефон нөмірін енгізіңіз.',
    dateError: 'Бүгінгі немесе өткен күнді таңдаңыз.',
    countError: 'Оң бүтін сан енгізіңіз.',
    productError: 'Тауарды таңдаңыз.',
    messageError: 'Пікір 10–500 таңбадан тұруы керек.',
    ratingError: '1-ден 5-ке дейін баға таңдаңыз.',
    products: {
      'Lip Gloss': 'Ерін жылтыры',
      'Mascara': 'Кірпік туші',
      'Round Lab SPF': 'Round Lab күннен қорғайтын кремі'
    },
    reviewMessages: [
      'Әдемі жылтыр және жағымды құрылым.',
      'Оңай жағылады және күні бойы сақталады.',
      'Күнделікті қолдануға арналған жеңіл күннен қорғайтын крем.'
    ]
  }
};

const ft = feedbackTranslations[feedbackLanguage];

const form = document.getElementById('feedback-form');
const confirmation = document.getElementById('feedback-confirmation');

const nameInput = document.getElementById('feedback-name');
const emailInput = document.getElementById('feedback-email');
const phoneInput = document.getElementById('feedback-phone');
const dateInput = document.getElementById('visit-date');
const countInput = document.getElementById('purchase-count');
const productInput = document.getElementById('feedback-product');
const messageInput = document.getElementById('feedback-message');
const recommendInput = document.getElementById('recommend');

form.noValidate = true;

// DATE

const today = new Date();

const todayString = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0')
].join('-');

dateInput.max = todayString;

// HELPER FUNCTIONS

function createElement(tag, className = '', text = '') {
  const element = document.createElement(tag);

  if (className) element.className = className;

  element.textContent = text;
  return element;
}

function showError(input, message) {
  input.classList.add('is-invalid');

  let error = input.parentElement.querySelector('.invalid-feedback');

  if (!error) {
    error = createElement('div', 'invalid-feedback');
    input.parentElement.appendChild(error);
  }

  error.textContent = message;
}

function clearError(input) {
  input.classList.remove('is-invalid');

  const error = input.parentElement.querySelector('.invalid-feedback');

  if (error) error.remove();
}

// CHARACTER COUNTER

const counter = createElement('small', 'text-muted d-block mt-1');

messageInput.maxLength = 500;
messageInput.after(counter);

function updateCounter() {
  counter.textContent =
    `${messageInput.value.length} / 500 ${ft.characters}`;
}

messageInput.addEventListener('input', updateCounter);

updateCounter();

// CUSTOMER REVIEWS

const reviewsSection = document.createElement('section');
reviewsSection.className = 'mt-5';

const reviewsHeading = document.createElement('h2');
reviewsHeading.className = 'mb-3';
reviewsHeading.textContent = ft.reviews;

const reviewsList = document.createElement('div');
reviewsList.className = 'row g-3';

reviewsSection.appendChild(reviewsHeading);
reviewsSection.appendChild(reviewsList);

document.getElementById('feedback-main').appendChild(reviewsSection);

// No default demo reviews
const reviews = [];

function getReviewProduct(review) {
    return review.productKey
        ? (ft.products[review.productKey] || review.productKey)
        : review.product;
}

function getReviewMessage(review) {
    return Number.isInteger(review.messageIndex)
        ? ft.reviewMessages[review.messageIndex]
        : review.message;
}

function renderReviews() {
    reviewsList.replaceChildren();

    reviewsSection.style.display =
        reviews.length > 0 ? 'block' : 'none';

    reviews.forEach(review => {
        const column = createElement(
            'div',
            'col-12 col-md-6 col-lg-4'
        );

        const card = createElement('article', 'card h-100');
        const body = createElement('div', 'card-body');

        body.appendChild(
            createElement('h3', 'h5 card-title', review.name)
        );

        body.appendChild(
            createElement('p', 'fw-bold', getReviewProduct(review))
        );

        body.appendChild(
            createElement(
                'p',
                '',
                `${ft.rating}: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}`
            )
        );

        body.appendChild(
            createElement('p', 'card-text', getReviewMessage(review))
        );

        body.appendChild(
            createElement('small', 'text-muted', review.date)
        );

        card.appendChild(body);
        column.appendChild(card);
        reviewsList.appendChild(column);
    });
}

// VALIDATION

function validateFeedback() {
  const fields = [
    nameInput,
    emailInput,
    phoneInput,
    dateInput,
    countInput,
    productInput,
    messageInput
  ];

  fields.forEach(clearError);

  let firstInvalid = null;

  function invalidate(input, message) {
    showError(input, message);

    if (!firstInvalid) firstInvalid = input;
  }

  if (nameInput.value.trim().length < 3) {
    invalidate(nameInput, ft.nameError);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    invalidate(emailInput, ft.emailError);
  }

  const phone = phoneInput.value.trim();

  if (phone && !/^[+]?[0-9\s()-]{10,20}$/.test(phone)) {
    invalidate(phoneInput, ft.phoneError);
  }

  if (!dateInput.value || dateInput.value > todayString) {
    invalidate(dateInput, ft.dateError);
  }

  const count = Number(countInput.value);

  if (!Number.isInteger(count) || count < 1) {
    invalidate(countInput, ft.countError);
  }

  if (!productInput.value) {
    invalidate(productInput, ft.productError);
  }

  const message = messageInput.value.trim();

  if (message.length < 10 || message.length > 500) {
    invalidate(messageInput, ft.messageError);
  }

  const rating = form.querySelector('input[name="rating"]:checked');

  const previousRatingError = form.querySelector(
    '[data-rating-error]'
  );

  if (previousRatingError) previousRatingError.remove();

  if (!rating) {
    const error = createElement(
      'p',
      'text-danger small mt-2',
      ft.ratingError
    );

    error.setAttribute('data-rating-error', 'true');

    const firstRating = document.getElementById('rating-1');

    if (firstRating) {
      const ratingContainer = firstRating.closest('.d-flex');

      if (ratingContainer) {
        ratingContainer.after(error);
      } else {
        firstRating.parentElement.appendChild(error);
      }

      if (!firstInvalid) firstInvalid = firstRating;
    }
  }

  if (firstInvalid) {
    firstInvalid.focus();
    return false;
  }

  return true;
}

// CONFIRMATION

function showConfirmation(review) {
  confirmation.replaceChildren();

  confirmation.appendChild(
    createElement('h3', '', ft.confirmation)
  );

  confirmation.appendChild(
    createElement('p', 'text-success fw-bold', ft.success)
  );

  confirmation.appendChild(
    createElement('p', '', `${ft.name}: ${review.name}`)
  );

  confirmation.appendChild(
    createElement('p', '', `${ft.product}: ${getReviewProduct(review)}`)
  );

  confirmation.appendChild(
    createElement('p', '', `${ft.rating}: ${review.rating}/5`)
  );

  confirmation.appendChild(
    createElement('p', 'small', ft.disclaimer)
  );
}

function resetConfirmation() {
  confirmation.replaceChildren(
    createElement('h3', '', ft.confirmation),
    createElement('p', '', ft.waiting)
  );
}

// FORM EVENTS

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!validateFeedback()) return;

  const rating = Number(
    form.querySelector('input[name="rating"]:checked').value
  );

  const selectedOption = productInput.selectedOptions[0];

  const review = {
    name: nameInput.value.trim(),
    product: selectedOption.textContent.trim(),
    rating: rating,
    message: messageInput.value.trim(),
    date: dateInput.value,
    recommend: recommendInput.checked
  };

  reviews.unshift(review);

  renderReviews();
  showConfirmation(review);

  form.dataset.submitting = 'true';
  form.reset();
  delete form.dataset.submitting;
  updateCounter();
});

form.addEventListener('input', event => {
  if (event.target.matches('input, textarea')) {
    clearError(event.target);
  }
});

form.addEventListener('change', event => {
  if (event.target.matches('input, select')) {
    clearError(event.target);
  }

  if (event.target.name === 'rating') {
    const error = form.querySelector('[data-rating-error]');

    if (error) error.remove();
  }
});

form.addEventListener('reset', () => {
  form.querySelectorAll('.is-invalid').forEach(input => {
    input.classList.remove('is-invalid');
  });

  form.querySelectorAll(
    '.invalid-feedback, [data-rating-error]'
  ).forEach(error => error.remove());

  // Keep successful confirmation after submitting.
  // Reset button restores the initial message.
  if (!form.dataset.submitting) {
    resetConfirmation();
  }

  updateCounter();
});

// START

renderReviews();
resetConfirmation();

console.log('NANA OPTOM Feedback language:', feedbackLanguage);

 // FEEDBACK PAGE — STATIC CONTENT TRANSLATION

const feedbackPageTranslations = {
  en: {
    title: 'NANA OPTOM Feedback',
    subtitle: 'Share your opinion about NANA OPTOM products and service.',
    formTitle: 'Feedback Form',
    description1:
      'Customer feedback helps NANA OPTOM understand what people think about its products and service. Visitors can share their experience, rate a product, and leave a short comment.',
    description2:
      'Complete the form below and submit your feedback. Your confirmation will appear below the form.',
    legends: [
      'Customer Information',
      'Your Experience',
      'Product Feedback'
    ],
    labels: {
      'feedback-name': 'Full Name:',
      'feedback-email': 'Email:',
      'feedback-phone': 'Phone Number:',
      'visit-date': 'Date:',
      'purchase-count': 'Number of NANA OPTOM products used:',
      'feedback-product': 'Product:',
      'feedback-message': 'Your Feedback:',
      'recommend': 'I would recommend NANA OPTOM to others'
    },
    ratingQuestion: 'How would you rate your experience?',
    placeholders: {
      'feedback-name': 'Enter your full name',
      'feedback-email': 'Enter your email',
      'purchase-count': 'Enter a number',
      'feedback-message': 'Write your feedback here'
    },
    selectProduct: 'Select a product',
    products: {
      'lip-gloss': 'Lip Gloss',
      'mascara': 'Mascara',
      'bb-cream': 'BB Cream',
      'round-lab-spf': 'Round Lab SPF',
      'celimax-toner': 'Celimax Toner',
      'mini-blush': 'Mini Blush',
      'brow-pencil': 'Brow Pencil'
    },
    submit: 'Submit Feedback',
    reset: 'Reset Form',
    contact: 'Contact:'
  },

  ru: {
    title: 'Отзывы о NANA OPTOM',
    subtitle: 'Поделитесь мнением о товарах и обслуживании NANA OPTOM.',
    formTitle: 'Форма отзыва',
    description1:
      'Отзывы покупателей помогают NANA OPTOM узнать мнение о товарах и обслуживании. Посетители могут поделиться опытом, оценить товар и оставить комментарий.',
    description2:
      'Заполните форму ниже и отправьте отзыв. Подтверждение появится под формой.',
    legends: [
      'Информация о покупателе',
      'Ваш опыт',
      'Отзыв о товаре'
    ],
    labels: {
      'feedback-name': 'Полное имя:',
      'feedback-email': 'Электронная почта:',
      'feedback-phone': 'Номер телефона:',
      'visit-date': 'Дата:',
      'purchase-count': 'Количество использованных товаров NANA OPTOM:',
      'feedback-product': 'Товар:',
      'feedback-message': 'Ваш отзыв:',
      'recommend': 'Я рекомендую NANA OPTOM другим'
    },
    ratingQuestion: 'Как вы оцениваете свой опыт?',
    placeholders: {
      'feedback-name': 'Введите ваше полное имя',
      'feedback-email': 'Введите вашу электронную почту',
      'purchase-count': 'Введите число',
      'feedback-message': 'Напишите ваш отзыв'
    },
    selectProduct: 'Выберите товар',
    products: {
      'lip-gloss': 'Блеск для губ',
      'mascara': 'Тушь для ресниц',
      'bb-cream': 'BB-крем',
      'round-lab-spf': 'Солнцезащитный крем Round Lab',
      'celimax-toner': 'Тонер Celimax',
      'mini-blush': 'Мини-румяна',
      'brow-pencil': 'Карандаш для бровей'
    },
    submit: 'Отправить отзыв',
    reset: 'Очистить форму',
    contact: 'Контакты:'
  },

  kk: {
    title: 'NANA OPTOM туралы пікірлер',
    subtitle: 'NANA OPTOM тауарлары мен қызметі туралы пікіріңізді бөлісіңіз.',
    formTitle: 'Пікір қалдыру формасы',
    description1:
      'Сатып алушылардың пікірлері NANA OPTOM дүкеніне тауарлар мен қызмет сапасы туралы білуге көмектеседі. Келушілер өз тәжірибесімен бөлісіп, тауарға баға беріп, пікір қалдыра алады.',
    description2:
      'Төмендегі форманы толтырып, пікіріңізді жіберіңіз. Растау ақпараты форманың астында көрсетіледі.',
    legends: [
      'Сатып алушы туралы ақпарат',
      'Сіздің тәжірибеңіз',
      'Тауар туралы пікір'
    ],
    labels: {
      'feedback-name': 'Толық аты-жөніңіз:',
      'feedback-email': 'Электрондық пошта:',
      'feedback-phone': 'Телефон нөмірі:',
      'visit-date': 'Күні:',
      'purchase-count': 'Қолданған NANA OPTOM тауарларының саны:',
      'feedback-product': 'Тауар:',
      'feedback-message': 'Сіздің пікіріңіз:',
      'recommend': 'Мен NANA OPTOM дүкенін басқаларға ұсынамын'
    },
    ratingQuestion: 'Тәжірибеңізді қалай бағалайсыз?',
    placeholders: {
      'feedback-name': 'Толық аты-жөніңізді енгізіңіз',
      'feedback-email': 'Электрондық поштаңызды енгізіңіз',
      'purchase-count': 'Сан енгізіңіз',
      'feedback-message': 'Пікіріңізді осында жазыңыз'
    },
    selectProduct: 'Тауарды таңдаңыз',
    products: {
      'lip-gloss': 'Ерін жылтыры',
      'mascara': 'Кірпік туші',
      'bb-cream': 'BB-крем',
      'round-lab-spf': 'Round Lab күннен қорғайтын кремі',
      'celimax-toner': 'Celimax тонері',
      'mini-blush': 'Шағын бет далабы',
      'brow-pencil': 'Қас қарындашы'
    },
    submit: 'Пікірді жіберу',
    reset: 'Форманы тазалау',
    contact: 'Байланыс:'
  }
};

const fp = feedbackPageTranslations[feedbackLanguage];

// HEADER

const feedbackHeading = document.querySelector('header h1');
const feedbackSubtitle = document.querySelector('header .lead');

if (feedbackHeading) feedbackHeading.textContent = fp.title;
if (feedbackSubtitle) feedbackSubtitle.textContent = fp.subtitle;

// FORM INTRODUCTION

const feedbackSection = document.getElementById('feedback-section');

if (feedbackSection) {
  const heading = feedbackSection.querySelector('h2');

  if (heading) heading.textContent = fp.formTitle;

  const paragraphs = feedbackSection.querySelectorAll(':scope > p');

  if (paragraphs[0]) {
    paragraphs[0].textContent = fp.description1;
  }

  if (paragraphs[1]) {
    paragraphs[1].textContent = fp.description2;
  }
}

// FIELDSET LEGENDS

const feedbackLegends = form.querySelectorAll('legend');

feedbackLegends.forEach((legend, index) => {
  if (fp.legends[index]) {
    legend.textContent = fp.legends[index];
  }
});

// FORM LABELS

Object.entries(fp.labels).forEach(([id, translation]) => {
  const label = form.querySelector(`label[for="${id}"]`);

  if (label) {
    label.textContent = translation;
  }
});

// RATING QUESTION

const ratingContainer = document.getElementById('rating-1')
  ?.closest('fieldset');

if (ratingContainer) {
  const question = ratingContainer.querySelector('p.mb-2');

  if (question) {
    question.textContent = fp.ratingQuestion;
  }
}

// INPUT PLACEHOLDERS

Object.entries(fp.placeholders).forEach(([id, translation]) => {
  const input = document.getElementById(id);

  if (input) {
    input.placeholder = translation;
  }
});

// PRODUCT OPTIONS

Array.from(productInput.options).forEach(option => {
  if (option.value === '') {
    option.textContent = fp.selectProduct;
  } else if (fp.products[option.value]) {
    option.textContent = fp.products[option.value];
  }
});

// BUTTONS

const submitFeedbackButton = document.getElementById('submit-feedback');
const resetFeedbackButton = document.getElementById('reset-feedback');

if (submitFeedbackButton) {
  submitFeedbackButton.textContent = fp.submit;
}

if (resetFeedbackButton) {
  resetFeedbackButton.textContent = fp.reset;
}

// FOOTER CONTACT

const feedbackFooterContact = document.querySelector('footer p');

if (feedbackFooterContact) {
  const phoneLink = feedbackFooterContact.querySelector('a');

  if (phoneLink) {
    feedbackFooterContact.firstChild.textContent =
      `\n        ${fp.contact}\n        `;
  }
}

// PAGE LANGUAGE

document.documentElement.lang = feedbackLanguage;
