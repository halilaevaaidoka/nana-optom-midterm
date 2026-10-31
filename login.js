
'use strict';

// NANA OPTOM — Demo Login
// Languages: English, Russian, Kazakh

const loginLanguage = ['en', 'ru', 'kk'].includes(
  localStorage.getItem('nana-language')
) ? localStorage.getItem('nana-language') : 'en';

const loginTranslations = {
  en: {
    show: 'Show Password',
    hide: 'Hide Password',
    strength: 'Password strength',
    notEntered: 'Not entered',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    emailError: 'Please enter a valid email address.',
    passwordError: 'Password must contain at least 8 characters.',
    result: 'Login Result',
    success: 'Demo login form validated successfully!',
    email: 'Email',
    remember: 'Remember me',
    yes: 'Yes',
    no: 'No',
    disclaimer:
      'Demo only. No authentication was performed and no account session was created.',
    correct: 'Please correct the highlighted fields.'
  },

  ru: {
    show: 'Показать пароль',
    hide: 'Скрыть пароль',
    strength: 'Надёжность пароля',
    notEntered: 'Не введён',
    weak: 'Слабый',
    medium: 'Средний',
    strong: 'Надёжный',
    emailError: 'Введите корректный адрес электронной почты.',
    passwordError: 'Пароль должен содержать минимум 8 символов.',
    result: 'Результат входа',
    success: 'Демонстрационная форма успешно прошла проверку!',
    email: 'Электронная почта',
    remember: 'Запомнить меня',
    yes: 'Да',
    no: 'Нет',
    disclaimer:
      'Это демонстрация. Авторизация не выполнялась, сессия пользователя не создавалась.',
    correct: 'Исправьте выделенные поля.'
  },

  kk: {
    show: 'Құпиясөзді көрсету',
    hide: 'Құпиясөзді жасыру',
    strength: 'Құпиясөздің сенімділігі',
    notEntered: 'Енгізілмеген',
    weak: 'Әлсіз',
    medium: 'Орташа',
    strong: 'Күшті',
    emailError: 'Дұрыс электрондық пошта енгізіңіз.',
    passwordError: 'Құпиясөз кемінде 8 таңбадан тұруы керек.',
    result: 'Кіру нәтижесі',
    success: 'Демонстрациялық кіру формасы тексеруден сәтті өтті!',
    email: 'Электрондық пошта',
    remember: 'Мені есте сақтау',
    yes: 'Иә',
    no: 'Жоқ',
    disclaimer:
      'Бұл тек демонстрация. Нақты авторизация жасалмады және пайдаланушы сессиясы құрылмады.',
    correct: 'Белгіленген өрістерді түзетіңіз.'
  }
};

const lt = loginTranslations[loginLanguage];

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');
const rememberInput = document.getElementById('remember');
const loginResult = document.getElementById('login-result');

loginForm.noValidate = true;

// HELPER FUNCTIONS

function createLoginElement(tag, className = '', text = '') {
  const element = document.createElement(tag);

  if (className) element.className = className;

  element.textContent = text;
  return element;
}

function showLoginError(input, message) {
  input.classList.add('is-invalid');

  let error = input.parentElement.querySelector('.invalid-feedback');

  if (!error) {
    error = createLoginElement('div', 'invalid-feedback');
    input.parentElement.appendChild(error);
  }

  error.textContent = message;
}

function clearLoginError(input) {
  input.classList.remove('is-invalid');

  const error = input.parentElement.querySelector('.invalid-feedback');

  if (error) error.remove();
}

// FEATURE 1: SHOW / HIDE PASSWORD


// FEATURE 1: SHOW / HIDE PASSWORD

const passwordToggle = document.getElementById('togglePassword');

passwordToggle.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';

    passwordInput.type = isHidden ? 'text' : 'password';

    passwordToggle.setAttribute(
        'aria-pressed',
        String(isHidden)
    );

    passwordToggle.setAttribute(
        'aria-label',
        isHidden ? lt.hide : lt.show
    );
});


// FEATURE 2: PASSWORD STRENGTH

const strengthText = createLoginElement(
  'p',
  'small text-muted mt-2'
);

document.querySelector('.password-wrapper').after(strengthText);

function getPasswordStrength(password) {
  if (password.length === 0) return lt.notEntered;

  let score = 0;

  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 2) return lt.weak;
  if (score <= 4) return lt.medium;

  return lt.strong;
}

function updatePasswordStrength() {
  const strength = getPasswordStrength(passwordInput.value);

  strengthText.textContent = `${lt.strength}: ${strength}`;
}

passwordInput.addEventListener('input', updatePasswordStrength);

updatePasswordStrength();

// FEATURE 3: LOGIN VALIDATION

function validateLogin() {
  clearLoginError(emailInput);
  clearLoginError(passwordInput);

  let firstInvalid = null;

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showLoginError(emailInput, lt.emailError);
    firstInvalid = emailInput;
  }

  if (password.length < 8) {
    showLoginError(passwordInput, lt.passwordError);

    if (!firstInvalid) {
      firstInvalid = passwordInput;
    }
  }

  if (firstInvalid) {
    firstInvalid.focus();
    return false;
  }

  return true;
}

// LOGIN TOAST NOTIFICATION

let loginToastTimer;

function showLoginToast(message, type = 'success') {
    let toast = document.getElementById('login-toast');

    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'login-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);
    }

    clearTimeout(loginToastTimer);

    toast.className = `login-toast ${type}`;
    toast.replaceChildren();

    const icon = document.createElement('span');
    icon.className = 'login-toast-icon';
    icon.textContent = type === 'success' ? '✓' : '!';

    const content = document.createElement('div');

    const title = document.createElement('strong');
    title.textContent = type === 'success'
        ? {
            en: 'Login Successful!',
            ru: 'Проверка пройдена!',
            kk: 'Тексеру сәтті өтті!'
        }[loginLanguage]
        : {
            en: 'Please check your details',
            ru: 'Проверьте данные',
            kk: 'Деректерді тексеріңіз'
        }[loginLanguage];

    const description = document.createElement('p');
    description.textContent = message;

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'login-toast-close';
    closeButton.textContent = '×';
    closeButton.setAttribute('aria-label', 'Close notification');

    closeButton.addEventListener('click', () => {
        toast.classList.remove('show');
    });

    content.append(title, description);
    toast.append(icon, content, closeButton);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    loginToastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}


// FORM SUBMIT

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    if (!validateLogin()) {
        showLoginToast(lt.correct, 'error');
        return;
    }

    showLoginToast(lt.disclaimer, 'success');
});

emailInput.addEventListener('input', () => {
  clearLoginError(emailInput);
});

passwordInput.addEventListener('input', () => {
  clearLoginError(passwordInput);
});

console.log('NANA OPTOM Login language:', loginLanguage);

 // LOGIN PAGE — STATIC CONTENT TRANSLATION

const loginPageTranslations = {
  en: {
    pageTitle: 'NANA OPTOM | Login',
    subtitle: 'Wholesale Cosmetics',
    heading: 'Login',
    description:
      'Enter your account information to continue. Your login result will appear below the form.',
    emailLabel: 'Email:',
    passwordLabel: 'Password:',
    rememberLabel: 'Remember me',
    emailPlaceholder: 'Enter your email',
    passwordPlaceholder: 'Enter your password',
    loginButton: 'Login',
    waiting:
      'After submitting the form, your login result will appear here.',
    contact: 'Contact:'
  },

  ru: {
    pageTitle: 'NANA OPTOM | Вход',
    subtitle: 'Косметика оптом',
    heading: 'Вход',
    description:
      'Введите данные своей учётной записи, чтобы продолжить. Результат входа появится под формой.',
    emailLabel: 'Электронная почта:',
    passwordLabel: 'Пароль:',
    rememberLabel: 'Запомнить меня',
    emailPlaceholder: 'Введите электронную почту',
    passwordPlaceholder: 'Введите пароль',
    loginButton: 'Войти',
    waiting:
      'После отправки формы здесь появится результат входа.',
    contact: 'Контакты:'
  },

  kk: {
    pageTitle: 'NANA OPTOM | Кіру',
    subtitle: 'Косметиканы көтерме сату',
    heading: 'Кіру',
    description:
      'Жалғастыру үшін аккаунт деректерін енгізіңіз. Кіру нәтижесі форманың астында көрсетіледі.',
    emailLabel: 'Электрондық пошта:',
    passwordLabel: 'Құпиясөз:',
    rememberLabel: 'Мені есте сақтау',
    emailPlaceholder: 'Электрондық поштаңызды енгізіңіз',
    passwordPlaceholder: 'Құпиясөзіңізді енгізіңіз',
    loginButton: 'Кіру',
    waiting:
      'Форманы жібергеннен кейін кіру нәтижесі осында көрсетіледі.',
    contact: 'Байланыс:'
  }
};

const lp = loginPageTranslations[loginLanguage];

// DOCUMENT LANGUAGE AND TITLE

document.documentElement.lang = loginLanguage;
document.title = lp.pageTitle;

// HEADER

const loginSubtitle = document.querySelector('header .lead');

if (loginSubtitle) {
  loginSubtitle.textContent = lp.subtitle;
}

// LOGIN SECTION

const loginSection = document.getElementById('login-section');

if (loginSection) {
  const heading = loginSection.querySelector('h2');
  const description = loginSection.querySelector(':scope > p');

  if (heading) {
    heading.textContent = lp.heading;
  }

  if (description) {
    description.textContent = lp.description;
  }
}

// FORM LABELS

const loginEmailLabel = loginForm.querySelector(
  'label[for="login-email"]'
);

const loginPasswordLabel = loginForm.querySelector(
  'label[for="login-password"]'
);

const loginRememberLabel = loginForm.querySelector(
  'label[for="remember"]'
);

if (loginEmailLabel) {
  loginEmailLabel.textContent = lp.emailLabel;
}

if (loginPasswordLabel) {
  loginPasswordLabel.textContent = lp.passwordLabel;
}

if (loginRememberLabel) {
  loginRememberLabel.textContent = lp.rememberLabel;
}

// PLACEHOLDERS

emailInput.placeholder = lp.emailPlaceholder;
passwordInput.placeholder = lp.passwordPlaceholder;

// LOGIN BUTTON

const loginSubmitButton = document.getElementById('login-button');

if (loginSubmitButton) {
  loginSubmitButton.textContent = lp.loginButton;
}

// INITIAL LOGIN RESULT

// Hide old result panel
if (loginResult) {
    loginResult.style.display = 'none';
}

// FOOTER CONTACT

const loginFooterContact = document.querySelector('footer p');

if (loginFooterContact) {
  const phoneLink = loginFooterContact.querySelector('a');

  if (phoneLink) {
    loginFooterContact.firstChild.textContent =
      `\n        ${lp.contact}\n        `;
  }
}
