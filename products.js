
'use strict';

// NANA OPTOM — Products (Kazakh / Russian / English)
// Load js/main.js before this file.

const products = [
  { id: 1, name: 'Beauty Blender', category: 'Makeup Accessories', price: 2200 },
  { id: 2, name: 'Powder Puffs', category: 'Makeup Accessories', price: 2200 },
  { id: 3, name: 'Lip Liner', category: 'Lips', price: 2850 },
  { id: 4, name: 'Brow Pencil', category: 'Brows', price: 3700 },
  { id: 5, name: 'Eyeliner', category: 'Eyes', price: 4200 },
  { id: 6, name: 'Round Lab SPF', category: 'Skincare', price: 4500 },
  { id: 7, name: 'Brow Gel Wax Travel', category: 'Brows', price: 4600 },
  { id: 8, name: 'Mascara', category: 'Eyes', price: 4800 },
  { id: 9, name: 'Eye Sparkles', category: 'Eyes', price: 5200, image: 'images/sparcle.jpg' },
  { id: 10, name: 'Concealer', category: 'Face', price: 5200, image: 'images/conclear.jpg' },
  { id: 11, name: 'Celimax Toner', category: 'Skincare', price: 6500, image: 'images/celimaxtoner.jpg' },
  { id: 12, name: 'Mini Blush', category: 'Face', price: 6900, image: 'images/blush.jpg' },
  { id: 13, name: 'Lip Gloss', category: 'Lips', price: 7200 },
  { id: 14, name: 'Makeup Setting Spray', category: 'Face', price: 7500 },
  { id: 15, name: 'Mineral Powder', category: 'Face', price: 7800 },
  { id: 16, name: 'BB Cream', category: 'Face', price: 7800 },
  { id: 17, name: 'Eyeshadow', category: 'Eyes', price: 8400, image: 'images/eyespalate.jpg' },
  { id: 18, name: 'Stick Blush', category: 'Face', price: 9900 },
  { id: 19, name: 'Contour', category: 'Face', price: 11900, image: 'images/contour.jpg' },
  { id: 20, name: 'Mini Lip Gloss Set', category: 'Lips', price: 14600 }
];

const productTranslations = {
  en: {
    title: 'Product Price List', search: 'Search products...', all: 'All Categories',
    default: 'Sort by: Default', low: 'Price: Low to High', high: 'Price: High to Low',
    nameSort: 'Name: A to Z', reset: 'Reset Filters', showing: 'Showing', of: 'of', products: 'products',
    product: 'Product', category: 'Category', price: 'Price', action: 'Action',
    add: 'Add to Cart', noResults: 'No products found.', cart: 'Shopping Cart',
    cartShort: 'Cart', empty: 'Your cart is empty.', clear: 'Clear Cart', checkout: 'Checkout',
    remove: 'Remove', total: 'Total', items: 'Items', added: 'Added to cart:',
    demo: 'Demo checkout only. No real order was submitted.',
    categories: {
      'Makeup Accessories': 'Makeup Accessories',
      Lips: 'Lips', Brows: 'Brows', Eyes: 'Eyes',
      Skincare: 'Skincare', Face: 'Face'
    },
    names: {}
  },
  ru: {
    title: 'Прайс-лист товаров', search: 'Поиск товаров...', all: 'Все категории',
    default: 'Сортировка: по умолчанию', low: 'Цена: по возрастанию', high: 'Цена: по убыванию',
    nameSort: 'Название: А–Я', reset: 'Сбросить фильтры', showing: 'Показано', of: 'из', products: 'товаров',
    product: 'Товар', category: 'Категория', price: 'Цена', action: 'Действие',
    add: 'В корзину', noResults: 'Товары не найдены.', cart: 'Корзина',
    cartShort: 'Корзина', empty: 'Корзина пуста.', clear: 'Очистить корзину', checkout: 'Оформить',
    remove: 'Удалить', total: 'Итого', items: 'Количество', added: 'Добавлено в корзину:',
    demo: 'Демонстрационный заказ. Реальный заказ не отправлен.',
    categories: {
      'Makeup Accessories': 'Аксессуары для макияжа',
      Lips: 'Губы', Brows: 'Брови', Eyes: 'Глаза',
      Skincare: 'Уход за кожей', Face: 'Лицо'
    },
    names: {
      'Beauty Blender': 'Спонж для макияжа',
      'Powder Puffs': 'Пуховки для пудры',
      'Lip Liner': 'Карандаш для губ',
      'Brow Pencil': 'Карандаш для бровей',
      'Eyeliner': 'Подводка для глаз',
      'Round Lab SPF': 'Солнцезащитный крем Round Lab',
      'Brow Gel Wax Travel': 'Гель-воск для бровей (мини)',
      'Mascara': 'Тушь для ресниц',
      'Eye Sparkles': 'Блёстки для глаз',
      'Concealer': 'Консилер',
      'Celimax Toner': 'Тонер Celimax',
      'Mini Blush': 'Мини-румяна',
      'Lip Gloss': 'Блеск для губ',
      'Makeup Setting Spray': 'Фиксатор макияжа',
      'Mineral Powder': 'Минеральная пудра',
      'BB Cream': 'BB-крем',
      'Eyeshadow': 'Тени для век',
      'Stick Blush': 'Румяна-стик',
      'Contour': 'Контуринг',
      'Mini Lip Gloss Set': 'Набор мини-блесков для губ'
    }
  },
  kk: {
    title: 'Тауарлар бағалары', search: 'Тауарларды іздеу...', all: 'Барлық санаттар',
    default: 'Сұрыптау: әдепкі', low: 'Баға: арзандан қымбатқа', high: 'Баға: қымбаттан арзанға',
    nameSort: 'Атауы: А–Я', reset: 'Сүзгілерді тазалау', showing: 'Көрсетілгені', of: '/', products: 'тауар',
    product: 'Тауар', category: 'Санат', price: 'Баға', action: 'Әрекет',
    add: 'Себетке қосу', noResults: 'Тауар табылмады.', cart: 'Себет',
    cartShort: 'Себет', empty: 'Себет бос.', clear: 'Себетті тазалау', checkout: 'Рәсімдеу',
    remove: 'Өшіру', total: 'Барлығы', items: 'Тауар саны', added: 'Себетке қосылды:',
    demo: 'Бұл демонстрация. Нақты тапсырыс жіберілген жоқ.',
    categories: {
      'Makeup Accessories': 'Макияж құралдары',
      Lips: 'Ерінге арналған', Brows: 'Қасқа арналған',
      Eyes: 'Көзге арналған', Skincare: 'Тері күтімі',
      Face: 'Бетке арналған'
    },
    names: {
      'Beauty Blender': 'Макияж спонжы',
      'Powder Puffs': 'Опаға арналған пуфтар',
      'Lip Liner': 'Ерін қарындашы',
      'Brow Pencil': 'Қас қарындашы',
      'Eyeliner': 'Көз сүрмесі',
      'Round Lab SPF': 'Round Lab күннен қорғайтын кремі',
      'Brow Gel Wax Travel': 'Қасқа арналған гель-балауыз (мини)',
      'Mascara': 'Кірпік туші',
      'Eye Sparkles': 'Көзге арналған жылтыр',
      'Concealer': 'Консилер',
      'Celimax Toner': 'Celimax тонері',
      'Mini Blush': 'Шағын бет далабы',
      'Lip Gloss': 'Ерін жылтыры',
      'Makeup Setting Spray': 'Макияж бекіткіші',
      'Mineral Powder': 'Минералды опа',
      'BB Cream': 'BB-крем',
      'Eyeshadow': 'Қабақ бояуы',
      'Stick Blush': 'Таяқша бет далабы',
      'Contour': 'Контуринг',
      'Mini Lip Gloss Set': 'Шағын ерін жылтырларының жиынтығы'
    }
  }
};

const lang = ['en', 'ru', 'kk'].includes(localStorage.getItem('nana-language'))
  ? localStorage.getItem('nana-language') : 'en';

const words = productTranslations[lang];

const money = amount => `${amount.toLocaleString('en-US')} ₸`;
const productName = product => words.names[product.name] || product.name;
const categoryName = category => words.categories[category] || category;

function makeElement(tag, className = '', text = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}



const tableBody = document.getElementById('product-table-body');
const priceSection = document.getElementById('price-section');
const productsMain = document.getElementById('products-main');

const CART_KEY = 'nana-order-cart';

function loadCart() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(CART_KEY) || '[]');

    if (!Array.isArray(saved)) return [];

    return saved.filter(item =>
      products.some(product => product.id === Number(item.id)) &&
      Number.isInteger(Number(item.quantity)) &&
      Number(item.quantity) > 0
    ).map(item => ({
      id: Number(item.id),
      name: products.find(p => p.id === Number(item.id)).name,
      price: products.find(p => p.id === Number(item.id)).price,
      quantity: Number(item.quantity)
    }));
  } catch {
    return [];
  }
}

let cart = loadCart();

function saveCart() {
  try {
    sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn('Cart could not be saved:', error);
  }

  updateCartBadge();
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function cartTotal() {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

function updateCartBadge() {
  const count = cartCount();

  document.querySelectorAll(
    '#cart-count, #cartCount, [data-cart-count]'
  ).forEach(element => {
    element.textContent = count;
  });

  cartJumpButton.textContent =
    `🛒 ${words.cartShort} (${count})`;

  window.dispatchEvent(new CustomEvent('nana-cart-updated', {
    detail: { count }
  }));
}

// FILTERS

const controls = makeElement('div', 'mb-3');

const filterRow = makeElement(
  'div',
  'row g-2 align-items-center'
);

const searchColumn = makeElement('div', 'col-12 col-md-4');
const categoryColumn = makeElement('div', 'col-12 col-md-4');
const sortColumn = makeElement('div', 'col-12 col-md-4');

const searchInput = makeElement(
  'input',
  'form-control bg-dark text-light border-warning'
);

searchInput.type = 'search';
searchInput.placeholder = words.search;
searchInput.setAttribute('aria-label', words.search);

const categorySelect = makeElement(
  'select',
  'form-select bg-dark text-light border-warning'
);

['All', ...new Set(products.map(p => p.category))]
  .forEach(category => {
    const option = new Option(
      category === 'All' ? words.all : categoryName(category),
      category
    );

    categorySelect.add(option);
  });

const sortSelect = makeElement(
  'select',
  'form-select bg-dark text-light border-warning'
);

[
  ['default', words.default],
  ['low', words.low],
  ['high', words.high],
  ['name', words.nameSort]
].forEach(([value, label]) => {
  sortSelect.add(new Option(label, value));
});

searchColumn.append(searchInput);
categoryColumn.append(categorySelect);
sortColumn.append(sortSelect);

filterRow.append(
  searchColumn,
  categoryColumn,
  sortColumn
);

const filterBottom = makeElement(
  'div',
  'd-flex flex-wrap justify-content-between align-items-center gap-2 mt-3'
);

const resultCount = makeElement('p', 'mb-0 small');

const filterActions = makeElement(
  'div',
  'd-flex flex-wrap gap-2'
);

const resetButton = makeElement(
  'button',
  'btn btn-outline-warning btn-sm',
  words.reset
);

resetButton.type = 'button';

const cartJumpButton = makeElement(
  'button',
  'btn btn-warning btn-sm',
  words.cartShort
);

cartJumpButton.type = 'button';

filterActions.append(resetButton, cartJumpButton);
filterBottom.append(resultCount, filterActions);

controls.append(filterRow, filterBottom);

priceSection.insertBefore(
  controls,
  priceSection.querySelector('.table-responsive')
);

// TABLE

const priceTitle = priceSection.querySelector('h2');

if (priceTitle) {
  priceTitle.textContent = words.title;
}

const headerRow = document.querySelector(
  '#product-price-table thead tr'
);

headerRow.replaceChildren();

[
  words.product,
  words.category,
  words.price,
  words.action
].forEach(label => {
  const th = makeElement('th', '', label);
  th.scope = 'col';
  headerRow.appendChild(th);
});

function getFilteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;
  const sort = sortSelect.value;

  const filtered = products.filter(product => {
    const name = productName(product).toLowerCase();

    const matchesSearch =
      name.includes(query) ||
      product.name.toLowerCase().includes(query) ||
      categoryName(product.category).toLowerCase().includes(query);

    const matchesCategory =
      category === 'All' || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'name') {
    filtered.sort((a, b) =>
      productName(a).localeCompare(productName(b))
    );
  }

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();

  tableBody.replaceChildren();

  resultCount.textContent =
    `${words.showing} ${filtered.length} ${words.of} ${products.length} ${words.products}`;

  if (filtered.length === 0) {
    const row = makeElement('tr');
    const cell = makeElement(
      'td',
      'text-center py-4',
      words.noResults
    );

    cell.colSpan = 4;
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }

  filtered.forEach(product => {
    const row = makeElement('tr');

    row.append(
      makeElement('td', '', productName(product)),
      makeElement('td', '', categoryName(product.category)),
      makeElement('td', '', money(product.price))
    );

    const actionCell = makeElement('td');

    const addButton = makeElement(
      'button',
      'btn btn-warning btn-sm',
      words.add
    );

    addButton.type = 'button';

    addButton.addEventListener('click', () => {
      addToCart(product.id);
    });

    actionCell.appendChild(addButton);
    row.appendChild(actionCell);
    tableBody.appendChild(row);
  });
}

// SINGLE SHOPPING CART

const cartSection = makeElement(
  'section',
  'mt-5 p-4 rounded-4'
);

cartSection.id = 'shopping-cart';

Object.assign(cartSection.style, {
  background: '#102b46',
  border: '1px solid rgba(244,191,99,.4)'
});

const cartTitle = makeElement('h2', 'mb-3', words.cart);

const cartNotice = makeElement(
  'p',
  'small text-warning'
);

cartNotice.setAttribute('role', 'status');
cartNotice.setAttribute('aria-live', 'polite');

const cartContent = makeElement('div');

const cartActions = makeElement(
  'div',
  'd-flex flex-wrap gap-3 mt-4'
);

const clearButton = makeElement(
  'button',
  'btn btn-outline-warning',
  words.clear
);

clearButton.type = 'button';

const checkoutButton = makeElement(
  'button',
  'btn btn-warning',
  words.checkout + ' →'
);

checkoutButton.type = 'button';

cartActions.append(clearButton, checkoutButton);

cartSection.append(
  cartTitle,
  cartNotice,
  cartContent,
  cartActions
);

// Add one cart to the Products page
productsMain.appendChild(cartSection);

function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity = Math.min(9999, existing.quantity + 1);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  cartNotice.textContent =
    `${words.added} ${productName(product)} ✓`;

  saveCart();
  renderCart();
}

function updateQuantity(id, change) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(product => product.id !== id);
  } else {
    item.quantity = Math.min(item.quantity, 9999);
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);

  saveCart();
  renderCart();
}

function renderCart() {
  cartContent.replaceChildren();

  const count = cartCount();

  clearButton.disabled = count === 0;
  checkoutButton.disabled = count === 0;

  updateCartBadge();

  if (count === 0) {
    cartContent.appendChild(
      makeElement('p', 'mb-0', words.empty)
    );
    return;
  }

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);

    if (!product) return;

    const row = makeElement(
      'div',
      'd-flex flex-wrap align-items-center justify-content-between gap-3 py-3 border-bottom'
    );

    const details = makeElement('div');

    details.append(
      makeElement(
        'strong',
        'd-block text-warning',
        productName(product)
      ),
      makeElement(
        'small',
        '',
        money(product.price) + ' / 1'
      )
    );

    const quantityControls = makeElement(
      'div',
      'd-flex align-items-center gap-2'
    );

    const minus = makeElement(
      'button',
      'btn btn-outline-warning btn-sm',
      '−'
    );

    const plus = makeElement(
      'button',
      'btn btn-outline-warning btn-sm',
      '+'
    );

    const quantityText = makeElement(
      'span',
      'fw-bold px-2',
      String(item.quantity)
    );

    minus.type = 'button';
    plus.type = 'button';

    minus.setAttribute('aria-label', 'Decrease quantity');
    plus.setAttribute('aria-label', 'Increase quantity');

    minus.addEventListener('click', () => {
      updateQuantity(item.id, -1);
    });

    plus.addEventListener('click', () => {
      updateQuantity(item.id, 1);
    });

    quantityControls.append(
      minus,
      quantityText,
      plus
    );

    const subtotal = makeElement(
      'strong',
      'text-warning',
      money(item.price * item.quantity)
    );

    const removeButton = makeElement(
      'button',
      'btn btn-outline-danger btn-sm',
      words.remove
    );

    removeButton.type = 'button';

    removeButton.addEventListener('click', () => {
      removeFromCart(item.id);
    });

    row.append(
      details,
      quantityControls,
      subtotal,
      removeButton
    );

    cartContent.appendChild(row);
  });

  const totalRow = makeElement(
    'div',
    'd-flex justify-content-between align-items-center mt-4'
  );

  totalRow.append(
    makeElement('h4', 'mb-0', words.total),
    makeElement(
      'h3',
      'mb-0 text-warning',
      money(cartTotal())
    )
  );

  cartContent.appendChild(totalRow);

  cartContent.appendChild(
    makeElement(
      'p',
      'small mt-2 mb-0',
      `${words.items}: ${count}`
    )
  );
}

// EVENTS

searchInput.addEventListener('input', renderProducts);
categorySelect.addEventListener('change', renderProducts);
sortSelect.addEventListener('change', renderProducts);

resetButton.addEventListener('click', () => {
  searchInput.value = '';
  categorySelect.value = 'All';
  sortSelect.value = 'default';

  renderProducts();
});

cartJumpButton.addEventListener('click', () => {
  cartSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

clearButton.addEventListener('click', () => {
  cart = [];
  cartNotice.textContent = '';

  saveCart();
  renderCart();
});

checkoutButton.addEventListener('click', () => {
  if (cart.length === 0) return;

  saveCart();
  window.location.href = 'order.html';
});

// INITIALIZATION

renderProducts();
renderCart();
