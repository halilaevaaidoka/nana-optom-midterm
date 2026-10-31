
'use strict';

// NANA OPTOM — ORDER PAGE
// jQuery 3.7.1
// jQuery must be loaded before order.js.
// All events use .on(), including delegated cart buttons.

$(function () {
  let savedLanguage = 'en';

  try {
    savedLanguage = localStorage.getItem('nana-language') || 'en';
  } catch (error) {
    console.warn('Language storage unavailable');
  }

  const lang = ['en', 'ru', 'kk'].includes(savedLanguage)
    ? savedLanguage : 'en';

  const languageIndex = { en: 0, ru: 1, kk: 2 }[lang];

  // =========================
  // TRANSLATIONS
  // =========================

  const words = {
    en: {
      emptyCart: 'Choose a product above to see your order summary.',
      fromCart: 'Your cart items are listed below.',
      remove: 'Remove',
      decrease: 'Decrease quantity',
      increase: 'Increase quantity',
      deliveryHint: 'To your address',
      pickupHint: 'Pick up from our store',
      nav: ['Home', 'Products', 'Order', 'About', 'Feedback', 'Login'],
      heading: 'Place Your Order',
      subtitle: 'Wholesale Cosmetics Order Form',
      title: 'Order Form',
      intro: 'Complete the form below to prepare your order. Your order confirmation will appear below the form.',
      customer: 'Customer Information',
      productInfo: 'Product Information',
      preferences: 'Delivery & Preferences',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      city: 'City',
      address: 'Delivery Address',
      product: 'Product',
      quantity: 'Quantity',
      date: 'Order Date',
      method: 'Delivery Method:',
      delivery: 'Delivery',
      pickup: 'Pickup',
      updates: 'Receive product updates',
      notes: 'Additional Notes',
      submit: 'Submit Order',
      reset: 'Reset',
      selectCity: 'Select a city',
      selectProduct: 'Select a product',
      confirmation: 'Order Confirmation',
      waiting: 'Your order confirmation will appear here.',
      success: 'Your demo order has been prepared successfully!',
      demo: 'Demo only. No real order was sent to a server.',
      cart: 'Order Summary',
      total: 'Total',
      buyer: 'Customer',
      orderNumber: 'Demo Order Number',
      selected: 'Selected Products',
      none: 'None',
      yes: 'Yes',
      no: 'No',
      pickupAddress: 'Not required for pickup',
      contact: 'Contact:',
      errorName: 'Enter at least 3 characters.',
      errorEmail: 'Enter a valid email.',
      errorPhone: 'Enter a valid Kazakhstan phone number.',
      errorCity: 'Select a city.',
      errorAddress: 'Enter your delivery address.',
      errorProduct: 'Select a product.',
      errorQuantity: 'Enter a whole number from 1 to 9999.',
      errorDate: 'Choose today or a future date.',
      errorMethod: 'Choose a delivery method.'
    },
    ru: {
      emptyCart: 'Выберите товар выше, чтобы увидеть состав заказа.',
      fromCart: 'Товары из корзины показаны ниже.',
      remove: 'Удалить',
      decrease: 'Уменьшить количество',
      increase: 'Увеличить количество',
      deliveryHint: 'По вашему адресу',
      pickupHint: 'Заберите в магазине',
      nav: ['Главная', 'Товары', 'Заказ', 'О нас', 'Отзывы', 'Войти'],
      heading: 'Оформление заказа',
      subtitle: 'Форма оптового заказа косметики',
      title: 'Форма заказа',
      intro: 'Заполните форму ниже. Подтверждение заказа появится под формой.',
      customer: 'Информация о покупателе',
      productInfo: 'Информация о товаре',
      preferences: 'Параметры заказа',
      name: 'Полное имя',
      email: 'Электронная почта',
      phone: 'Номер телефона',
      city: 'Город',
      address: 'Адрес доставки',
      product: 'Товар',
      quantity: 'Количество',
      date: 'Дата заказа',
      method: 'Способ получения:',
      delivery: 'Доставка',
      pickup: 'Самовывоз',
      updates: 'Получать новости о товарах',
      notes: 'Дополнительные комментарии',
      submit: 'Оформить заказ',
      reset: 'Очистить',
      selectCity: 'Выберите город',
      selectProduct: 'Выберите товар',
      confirmation: 'Подтверждение заказа',
      waiting: 'Здесь появится подтверждение заказа.',
      success: 'Демонстрационный заказ успешно подготовлен!',
      demo: 'Это демонстрация. Заказ не отправлен на сервер.',
      cart: 'Ваша корзина',
      total: 'Итого',
      buyer: 'Покупатель',
      orderNumber: 'Номер демо-заказа',
      selected: 'Выбранные товары',
      none: 'Нет',
      yes: 'Да',
      no: 'Нет',
      pickupAddress: 'Для самовывоза не требуется',
      contact: 'Контакты:',
      errorName: 'Введите минимум 3 символа.',
      errorEmail: 'Введите правильный email.',
      errorPhone: 'Введите правильный номер Казахстана.',
      errorCity: 'Выберите город.',
      errorAddress: 'Введите адрес доставки.',
      errorProduct: 'Выберите товар.',
      errorQuantity: 'Введите целое число от 1 до 9999.',
      errorDate: 'Выберите сегодня или будущую дату.',
      errorMethod: 'Выберите способ получения.'
    },
    kk: {
      emptyCart: 'Тапсырыс құрамын көру үшін жоғарыдан тауар таңдаңыз.',
      fromCart: 'Себеттегі тауарлар төменде көрсетілген.',
      remove: 'Алып тастау',
      decrease: 'Санын азайту',
      increase: 'Санын көбейту',
      deliveryHint: 'Мекенжайыңызға',
      pickupHint: 'Дүкеннен алып кету',
      nav: ['Басты бет', 'Тауарлар', 'Тапсырыс', 'Біз туралы', 'Пікірлер', 'Кіру'],
      heading: 'Тапсырыс беру',
      subtitle: 'Косметикаға көтерме тапсырыс беру формасы',
      title: 'Тапсырыс формасы',
      intro: 'Төмендегі форманы толтырыңыз. Тапсырысты растау ақпараты форманың астында көрсетіледі.',
      customer: 'Сатып алушы туралы ақпарат',
      productInfo: 'Тауар туралы ақпарат',
      preferences: 'Тапсырыс параметрлері',
      name: 'Толық аты-жөні',
      email: 'Электрондық пошта',
      phone: 'Телефон нөмірі',
      city: 'Қала',
      address: 'Жеткізу мекенжайы',
      product: 'Тауар',
      quantity: 'Саны',
      date: 'Тапсырыс күні',
      method: 'Алу тәсілі:',
      delivery: 'Жеткізу',
      pickup: 'Өзі алып кету',
      updates: 'Тауар жаңалықтарын алу',
      notes: 'Қосымша ескертпелер',
      submit: 'Тапсырыс беру',
      reset: 'Тазалау',
      selectCity: 'Қаланы таңдаңыз',
      selectProduct: 'Тауарды таңдаңыз',
      confirmation: 'Тапсырысты растау',
      waiting: 'Тапсырыс туралы ақпарат осында шығады.',
      success: 'Демонстрациялық тапсырысыңыз сәтті дайындалды!',
      demo: 'Бұл демонстрация. Нақты тапсырыс серверге жіберілген жоқ.',
      cart: 'Сіздің себетіңіз',
      total: 'Барлығы',
      buyer: 'Сатып алушы',
      orderNumber: 'Демо-тапсырыс нөмірі',
      selected: 'Таңдалған тауарлар',
      none: 'Жоқ',
      yes: 'Иә',
      no: 'Жоқ',
      pickupAddress: 'Өзі алып кету үшін қажет емес',
      contact: 'Байланыс:',
      errorName: 'Кемінде 3 таңба енгізіңіз.',
      errorEmail: 'Дұрыс email енгізіңіз.',
      errorPhone: 'Қазақстанның дұрыс телефон нөмірін енгізіңіз.',
      errorCity: 'Қаланы таңдаңыз.',
      errorAddress: 'Жеткізу мекенжайын енгізіңіз.',
      errorProduct: 'Тауарды таңдаңыз.',
      errorQuantity: '1 мен 9999 аралығындағы бүтін санды енгізіңіз.',
      errorDate: 'Бүгінгі немесе болашақ күнді таңдаңыз.',
      errorMethod: 'Алу тәсілін таңдаңыз.'
    }
  };

  const t = words[lang];

  // =========================
  // PRODUCTS AND CITIES
  // =========================

  const products = {
    'beauty-blender': [2200, 'Beauty Blender', 'Спонж для макияжа', 'Макияж спонжы'],
    'lip-liner': [2850, 'Lip Liner', 'Карандаш для губ', 'Ерін қарындашы'],
    'mascara': [4800, 'Mascara', 'Тушь', 'Кірпік туші'],
    'mini-blush': [6900, 'Mini Blush', 'Мини-румяна', 'Шағын бет далабы'],
    'lip-gloss': [7200, 'Lip Gloss', 'Блеск для губ', 'Ерін жылтыры'],
    'bb-cream': [7800, 'BB Cream', 'BB-крем', 'BB-крем'],
    'stick-blush': [9900, 'Stick Blush', 'Румяна-стик', 'Таяқша бет далабы'],
    'contour': [11900, 'Contour', 'Контуринг', 'Контуринг'],
    'round-lab-spf': [4500, 'Round Lab SPF', 'Крем Round Lab SPF', 'Round Lab SPF кремі'],
    'celimax-toner': [6500, 'Celimax Toner', 'Тонер Celimax', 'Celimax тонері'],
    'mini-lip-gloss-set': [14600, 'Mini Lip Gloss Set', 'Набор мини-блесков', 'Шағын ерін жылтырлары жиынтығы']
  };

  const cityNames = [
    ['Astana', 'Астана', 'Астана'],
    ['Almaty', 'Алматы', 'Алматы'],
    ['Shymkent', 'Шымкент', 'Шымкент'],
    ['Karaganda', 'Караганда', 'Қарағанды'],
    ['Aktobe', 'Актобе', 'Ақтөбе'],
    ['Atyrau', 'Атырау', 'Атырау'],
    ['Aktau', 'Актау', 'Ақтау'],
    ['Pavlodar', 'Павлодар', 'Павлодар'],
    ['Kostanay', 'Костанай', 'Қостанай'],
    ['Kokshetau', 'Кокшетау', 'Көкшетау'],
    ['Petropavl', 'Петропавловск', 'Петропавл'],
    ['Semey', 'Семей', 'Семей'],
    ['Oskemen', 'Усть-Каменогорск', 'Өскемен'],
    ['Taraz', 'Тараз', 'Тараз'],
    ['Turkistan', 'Туркестан', 'Түркістан'],
    ['Kyzylorda', 'Кызылорда', 'Қызылорда'],
    ['Oral', 'Уральск', 'Орал'],
    ['Taldykorgan', 'Талдыкорган', 'Талдықорған'],
    ['Zhezkazgan', 'Жезказган', 'Жезқазған'],
    ['Ekibastuz', 'Экибастуз', 'Екібастұз'],
    ['Temirtau', 'Темиртау', 'Теміртау'],
    ['Rudny', 'Рудный', 'Рудный'],
    ['Baikonur', 'Байконур', 'Байқоңыр']
  ];

  const cartProductIds = {
    1: 'beauty-blender',
    3: 'lip-liner',
    6: 'round-lab-spf',
    8: 'mascara',
    11: 'celimax-toner',
    12: 'mini-blush',
    13: 'lip-gloss',
    16: 'bb-cream',
    18: 'stick-blush',
    19: 'contour',
    20: 'mini-lip-gloss-set'
  };

  // =========================
  // ELEMENTS AND HELPERS
  // =========================

  const $form = $('#order-form');
  const $confirmation = $('#order-confirmation');
  const $section = $('#order-section');

  if (!$form.length || !$confirmation.length || !$section.length) {
    console.warn('Order page elements not found');
    return;
  }

  const fields = {
    name: $('#customer-name'),
    email: $('#customer-email'),
    phone: $('#customer-phone'),
    city: $('#customer-city'),
    address: $('#customer-address'),
    product: $('#product'),
    quantity: $('#quantity'),
    date: $('#order-date'),
    notes: $('#notes'),
    updates: $('#updates')
  };

  function create(tag, className = '', value = '') {
    return $('<' + tag + '>')
      .addClass(className)
      .text(String(value));
  }

  const money = value =>
    `${Number(value).toLocaleString('en-US')} ₸`;

  function today() {
    const date = new Date();
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0')
    ].join('-');
  }

  fields.date.attr('min', today()).val(today());

  // =========================
  // CITY SELECT
  // =========================

  const $citySelect = $('<select>')
    .attr('id', 'kazakhstan-city-select')
    .attr('aria-label', t.city)
    .attr('required', 'required')
    .addClass('form-select');

  $citySelect.append(
    $('<option>').val('').text(t.selectCity)
  );

  cityNames.forEach(function (city) {
    $citySelect.append(
      $('<option>')
        .val(city[languageIndex])
        .text(city[languageIndex])
    );
  });

  fields.city.before($citySelect);
  fields.city.attr('type', 'hidden').prop('required', false);

  $citySelect.on('change', function () {
    fields.city.val($(this).val());
    clearError($(this));
  });

  // =========================
  // TRANSLATION
  // =========================

  function labelFor(id, value) {
    const $label = $(`label[for="${id}"]`);
    if (!$label.length) return;

    $label.text(value);

    const requiredFields = [
      'customer-name', 'customer-email', 'customer-phone',
      'customer-city', 'product', 'quantity', 'order-date'
    ];

    if (requiredFields.includes(id)) {
      $label.append(
        create('span', 'required-mark', ' *')
      );
    }
  }

  function translate() {
    $('html').attr('lang', lang);

    $section.find('.order-heading h2').text(t.title);
    $section.find('.order-heading p').text(t.intro);

    $form.find('.legend-title').each(function (index) {
      $(this).text([
        t.customer, t.productInfo, t.preferences
      ][index] || '');
    });

    [
      ['customer-name', t.name],
      ['customer-email', t.email],
      ['customer-phone', t.phone],
      ['customer-city', t.city],
      ['customer-address', t.address],
      ['product', t.product],
      ['quantity', t.quantity],
      ['order-date', t.date],
      ['notes', t.notes],
      ['delivery', t.delivery],
      ['pickup', t.pickup],
      ['updates', t.updates]
    ].forEach(([id, value]) => labelFor(id, value));

    $('#delivery-label').text(t.method);

    fields.name.attr('placeholder', t.name);
    fields.email.attr('placeholder', t.email);
    fields.phone.attr('placeholder', '+7 700 000 00 00');
    fields.address.attr('placeholder', t.address);
    fields.quantity.attr('placeholder', t.quantity);
    fields.notes.attr('placeholder', t.notes);

    fields.product.find('option').first().text(t.selectProduct);

    fields.product.find('option').each(function () {
      const id = $(this).val();
      if (products[id]) {
        $(this).text(products[id][languageIndex + 1]);
      }
    });

    $('#submit-order').empty()
      .append(create('span', '', t.submit))
      .append(create('span', '', '→'));

    $('#reset-order').text(t.reset);

    $('#quantity-minus').attr('aria-label', t.decrease);
    $('#quantity-plus').attr('aria-label', t.increase);

    $('.navbar-nav .nav-link').each(function (index) {
      if (t.nav[index]) $(this).text(t.nav[index]);
    });

    $('.login-link').text(t.nav[5]);

    $('[data-order-lang]').each(function () {
      const $button = $(this);
      const active = $button.attr('data-order-lang') === lang;

      $button.toggleClass('active', active)
        .attr('aria-pressed', String(active));
    });

    $('label[for="customer-city"]')
      .attr('for', 'kazakhstan-city-select');

    ['delivery', 'pickup'].forEach(function (id) {
      $(`label[for="${id}"]`).append(
        create(
          'small',
          'delivery-hint',
          id === 'delivery' ? t.deliveryHint : t.pickupHint
        )
      );
    });

    const $footer = $('footer p').first();
    $footer.contents().filter(function () {
      return this.nodeType === 3;
    }).first().replaceWith(t.contact + ' ');
  }

  // =========================
  // IMPORT CART
  // =========================

  let cart = [];

  try {
    const stored = JSON.parse(
      sessionStorage.getItem('nana-order-cart') || '[]'
    );

    if (Array.isArray(stored)) {
      cart = stored.filter(item =>
        item &&
        Number.isFinite(Number(item.price)) &&
        Number(item.price) >= 0 &&
        Number.isInteger(Number(item.quantity)) &&
        Number(item.quantity) > 0
      ).map(item => ({
        ...item,
        quantity: Math.min(9999, Number(item.quantity)),
        price: Number(item.price)
      }));
    }
  } catch (error) {
    cart = [];
  }

  function cartName(item) {
    const productId = cartProductIds[item.id];

    if (productId && products[productId]) {
      return products[productId][languageIndex + 1];
    }

    return String(item.name || 'Product');
  }

  function saveCart() {
    try {
      sessionStorage.setItem(
        'nana-order-cart',
        JSON.stringify(cart)
      );
    } catch (error) {
      console.warn('Cart storage unavailable');
    }
  }

  const $summary = $('#cart-summary');
  const $cartNote = create('p', 'cart-note', t.fromCart);

  fields.product.closest('.mb-3').after($cartNote);

  // =========================
  // ORDER SUMMARY
  // =========================

  function getItems() {
    if (cart.length) {
      return cart.map(item => ({
        name: cartName(item),
        price: Number(item.price),
        quantity: Number(item.quantity)
      }));
    }

    const selected = products[fields.product.val()];
    const count = Number(fields.quantity.val());

    if (
      !selected ||
      !Number.isInteger(count) ||
      count < 1 ||
      count > 9999
    ) return [];

    return [{
      name: selected[languageIndex + 1],
      price: selected[0],
      quantity: count
    }];
  }

  function renderSummary() {
    const imported = cart.length > 0;

    [
      fields.product,
      fields.quantity,
      $('#quantity-minus'),
      $('#quantity-plus')
    ].forEach($element => {
      $element.prop('disabled', imported);
    });

    $cartNote.prop('hidden', !imported);

    const items = getItems();

    $summary.empty()
      .append(create('h3', '', t.cart));

    if (!items.length) {
      $summary.append(
        create('p', 'empty-cart', t.emptyCart)
      );
    }

    items.forEach(function (item, index) {
      const $row = create('div', 'cart-row')
        .attr('data-cart-index', String(index));

      const $badge = create(
        'span',
        'product-monogram',
        item.name.slice(0, 2).toUpperCase()
      ).attr('aria-hidden', 'true');

      const $name = create('div', 'cart-item-name');

      $name.append(
        create('strong', '', item.name),
        create('small', '', `${money(item.price)} / 1`)
      );

      const $controls = create(
        'div',
        'd-flex align-items-center gap-2'
      );

      if (imported) {
        const $minus = create(
          'button',
          'btn btn-outline-warning btn-sm cart-minus',
          '−'
        ).attr('type', 'button')
          .attr('aria-label', t.decrease);

        const $plus = create(
          'button',
          'btn btn-outline-warning btn-sm cart-plus',
          '+'
        ).attr('type', 'button')
          .attr('aria-label', t.increase)
          .prop('disabled', item.quantity >= 9999);

        $controls.append(
          $minus,
          create('span', 'cart-quantity', item.quantity),
          $plus
        );
      } else {
        $controls.append(
          create('span', 'cart-quantity', `× ${item.quantity}`)
        );
      }

      const $remove = create(
        'button',
        'cart-remove',
        '×'
      ).attr('type', 'button')
        .attr('aria-label', `${t.remove}: ${item.name}`);

      $row.append(
        $badge,
        $name,
        $controls,
        create(
          'strong',
          'cart-price',
          money(item.price * item.quantity)
        ),
        $remove
      );

      $summary.append($row);
    });

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    $summary.append(
      create('div', 'cart-total')
        .append(
          create('span', '', t.total),
          create('strong', '', money(total))
        )
    );

    $('#order-cart-count').text(
      items.reduce((sum, item) => sum + item.quantity, 0)
    );
  }

  // =========================
  // DELEGATED CART EVENTS
  // =========================
  // These buttons are created dynamically.
  // Delegation allows the existing parent to handle them.

  $summary.on(
    'click',
    '.cart-minus, .cart-plus, .cart-remove',
    function () {
      const $button = $(this);
      const $row = $button.closest('.cart-row');
      const index = Number($row.attr('data-cart-index'));

      if ($button.hasClass('cart-remove')) {
        if (cart.length) {
          cart.splice(index, 1);
          saveCart();
        } else {
          fields.product.val('');
          fields.quantity.val(1);
        }
      } else if (cart[index]) {
        if ($button.hasClass('cart-minus')) {
          cart[index].quantity -= 1;
          if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
          }
        }

        if ($button.hasClass('cart-plus')) {
          cart[index].quantity = Math.min(
            9999,
            Number(cart[index].quantity) + 1
          );
        }

        saveCart();
      }

      showWaiting();
      renderSummary();
    }
  );

  fields.product.add(fields.quantity).on('input change', function () {
    renderSummary();
    showWaiting();
  });

  // =========================
  // QUANTITY BUTTONS
  // =========================

  function adjustQuantity(delta) {
    const quantity = Math.max(
      1,
      Math.min(
        9999,
        (Number(fields.quantity.val()) || 1) + delta
      )
    );

    fields.quantity.val(quantity).trigger('input');
  }

  $('#quantity-minus').on('click', function () {
    adjustQuantity(-1);
  });

  $('#quantity-plus').on('click', function () {
    adjustQuantity(1);
  });

  // =========================
  // MOBILE NAVIGATION
  // =========================

  const $navToggle = $('.navbar-toggler');

  $navToggle.removeAttr('data-bs-toggle data-bs-target');

  $navToggle.on('click', function () {
    const expanded =
      $(this).attr('aria-expanded') !== 'true';

    $(this).attr('aria-expanded', String(expanded));

    $('#mainNavbar').toggleClass('show', expanded);
  });

  $('[data-order-lang]').on('click', function () {
    try {
      localStorage.setItem(
        'nana-language',
        $(this).attr('data-order-lang')
      );
    } catch (error) {
      console.warn('Language preference not saved');
    }

    location.reload();
  });

  // =========================
  // DELIVERY / PICKUP
  // =========================

  function selectedMethod() {
    return $form
      .find('input[name="delivery-method"]:checked')
      .val() || '';
  }

  function updateDelivery() {
    const pickup = selectedMethod() === 'pickup';

    $('#address-group').prop('hidden', pickup);

    fields.address.prop('required', !pickup);

    if (pickup) {
      clearError(fields.address);
    }
  }

  // =========================
  // JQUERY FORM VALIDATION
  // =========================
  // Browser validation is the first line of defence.
  // Server-side validation is still required because
  // browser checks can be bypassed.

  function clearError($input) {
    if (!$input || !$input.length) return;

    $input.removeClass('is-invalid')
      .removeAttr('aria-invalid')
      .removeAttr('aria-describedby');

    const $target = $input.attr('id') === 'quantity'
      ? $input.closest('.quantity-control')
      : $input;

    $target.next('.invalid-feedback').remove();
  }

  function showError($input, message) {
    clearError($input);

    const id = $input.attr('id') + '-error';

    $input.addClass('is-invalid')
      .attr('aria-invalid', 'true')
      .attr('aria-describedby', id);

    const $feedback = create(
      'div',
      'invalid-feedback d-block',
      message
    ).attr('id', id);

    const $target = $input.attr('id') === 'quantity'
      ? $input.closest('.quantity-control')
      : $input;

    $target.after($feedback);

    $feedback.hide().fadeIn(200);
  }

  function validateField($input) {
    const id = $input.attr('id');
    const value = String($input.val() || '').trim();

    let valid = true;
    let message = '';

    switch (id) {
      case 'customer-name':
        valid = value.length >= 3;
        message = t.errorName;
        break;

      case 'customer-email':
        valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        message = t.errorEmail;
        break;

      case 'customer-phone': {
        const digits = value.replace(/\D/g, '');
        valid = digits.length === 11 &&
          ['7', '8'].includes(digits[0]);
        message = t.errorPhone;
        break;
      }

      case 'kazakhstan-city-select':
        valid = Boolean(value);
        message = t.errorCity;
        break;

      case 'customer-address':
        valid = selectedMethod() !== 'delivery' ||
          value.length >= 5;
        message = t.errorAddress;
        break;

      case 'product':
        valid = cart.length > 0 ||
          Object.prototype.hasOwnProperty.call(products, value);
        message = t.errorProduct;
        break;

      case 'quantity': {
        const quantity = Number(value);
        valid = cart.length > 0 || (
          value !== '' &&
          Number.isInteger(quantity) &&
          quantity >= 1 &&
          quantity <= 9999
        );
        message = t.errorQuantity;
        break;
      }

      case 'order-date':
        valid = Boolean(value) && value >= today();
        message = t.errorDate;
        break;

      default:
        return true;
    }

    if (valid) {
      clearError($input);
    } else {
      showError($input, message);
    }

    return valid;
  }

  function validate() {
    let $firstInvalid = null;

    const inputs = [
      fields.name,
      fields.email,
      fields.phone,
      $citySelect,
      fields.address,
      fields.product,
      fields.quantity,
      fields.date
    ];

    inputs.forEach(function ($input) {
      if (!validateField($input) && !$firstInvalid) {
        $firstInvalid = $input;
      }
    });

    $form.find('[data-delivery-error]').remove();

    if (!selectedMethod()) {
      const $error = create(
        'div',
        'text-danger small mt-2',
        t.errorMethod
      ).attr('data-delivery-error', 'true');

      $('#pickup').closest('.delivery-options').after($error);

      $error.hide().slideDown(250);

      if (!$firstInvalid) {
        $firstInvalid = $('#delivery');
      }
    }

    if ($firstInvalid) {
      $firstInvalid.trigger('focus');
      return false;
    }

    return true;
  }

  // =========================
  // CONFIRMATION
  // =========================

  function addDetail($list, label, value, extraClass = '') {
    $list.append(
      create('li', `list-group-item ${extraClass}`)
        .append(
          create('strong', '', `${label}: `),
          create('span', '', value)
        )
    );
  }

  function showWaiting() {
    $confirmation.stop(true, true)
      .addClass('waiting')
      .empty()
      .append(
        create('div', 'confirmation-symbol', '◇'),
        create('h3', '', t.confirmation),
        create('p', '', t.waiting)
      );
  }

  function showConfirmation() {
    const method = selectedMethod();
    const items = getItems();

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const $list = create('ul', 'list-group mb-3');

    addDetail(
      $list,
      t.orderNumber,
      `#${Math.floor(100000 + Math.random() * 900000)}`
    );

    addDetail($list, t.buyer, fields.name.val().trim());
    addDetail($list, t.email, fields.email.val().trim());
    addDetail($list, t.phone, fields.phone.val().trim());
    addDetail($list, t.city, $citySelect.val());

    addDetail(
      $list,
      t.address,
      method === 'pickup'
        ? t.pickupAddress
        : fields.address.val().trim()
    );

    addDetail($list, t.date, fields.date.val());

    addDetail(
      $list,
      t.method,
      method === 'delivery' ? t.delivery : t.pickup
    );

    addDetail(
      $list,
      t.updates,
      fields.updates.prop('checked') ? t.yes : t.no
    );

    addDetail(
      $list,
      t.notes,
      fields.notes.val().trim() || t.none
    );

    const $productRow = create('li', 'list-group-item')
      .append(create('strong', '', `${t.selected}:`));

    const $productList = create('ul', 'mt-2 mb-0');

    items.forEach(function (item) {
      $productList.append(
        create(
          'li',
          '',
          `${item.name} × ${item.quantity} — ${money(item.price * item.quantity)}`
        )
      );
    });

    $productRow.append($productList);
    $list.append($productRow);

    addDetail($list, t.total, money(total), 'fw-bold');

    $confirmation.stop(true, true)
      .removeClass('waiting')
      .hide()
      .empty()
      .append(
        create('h3', '', t.confirmation),
        create('p', 'text-success fw-bold', t.success),
        $list,
        create('p', 'small', t.demo)
      )
      .fadeIn(400, function () {
        this.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
  }

  // =========================
  // FORM EVENTS
  // =========================

  // preventDefault prevents a page reload and
  // allows the demo confirmation to appear.

  $form.on('submit', function (event) {
    event.preventDefault();

    if (!validate()) return;

    showConfirmation();

    // Preserve the successful confirmation while
    // resetting the form for another order.
    this.reset();
    $citySelect.val('');
    fields.city.val('');
    fields.date.val(today());

    $form.find('.is-invalid').each(function () {
      clearError($(this));
    });

    $form.find('[data-delivery-error]').remove();

    updateDelivery();
  });

  $form.on('input change', 'input, textarea, select', function () {
    const $input = $(this);

    if ($input.hasClass('is-invalid')) {
      validateField($input);
    }
  });
  // jQuery Validation: focusout and valid state
$form.on('focusout', 'input, select, textarea', function () {
  const $input = $(this);

  const validatedFields = [
    'customer-name',
    'customer-email',
    'customer-phone',
    'kazakhstan-city-select',
    'customer-address',
    'product',
    'quantity',
    'order-date'
  ];

  if (!validatedFields.includes($input.attr('id'))) return;
  if ($input.prop('disabled')) return;

  const valid = validateField($input);

  $input.toggleClass('is-valid', valid);
});

$form.on('input change', 'input, select, textarea', function () {
  $(this).removeClass('is-valid');
});

  $form.on('change', 'input[name="delivery-method"]', function () {
    $form.find('[data-delivery-error]').remove();
    updateDelivery();
  });

  $form.on('reset', function () {
    setTimeout(function () {
      $citySelect.val('');
      fields.city.val('');
      fields.date.val(today());

      $form.find('.is-invalid').each(function () {
        clearError($(this));
      });

      $form.find('[data-delivery-error]').remove();

      updateDelivery();
      showWaiting();
      renderSummary();
    }, 0);
  });

  // =========================
  // INITIALIZATION
  // =========================

  translate();
  updateDelivery();
  showWaiting();
  renderSummary();

  console.log('NANA OPTOM Order language:', lang);
  console.log('jQuery Order Page initialized');
});
