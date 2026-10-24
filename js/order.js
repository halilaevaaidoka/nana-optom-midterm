'use strict';

// NANA OPTOM - ORDER PAGE
// Languages, cities, cart, validation and confirmation.

(() => {
    let savedLanguage;

    try {
        savedLanguage = localStorage.getItem('nana-language');
    } catch {}

    const lang = ['en', 'ru', 'kk'].includes(savedLanguage)
        ? savedLanguage
        : 'en';

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
    const languageIndex = { en: 0, ru: 1, kk: 2 }[lang];

    const products = {
        'beauty-blender': [
            2200, 'Beauty Blender', 'Спонж для макияжа', 'Макияж спонжы'
        ],
        'lip-liner': [
            2850, 'Lip Liner', 'Карандаш для губ', 'Ерін қарындашы'
        ],
        'mascara': [
            4800, 'Mascara', 'Тушь', 'Кірпік туші'
        ],
        'mini-blush': [
            6900, 'Mini Blush', 'Мини-румяна', 'Шағын бет далабы'
        ],
        'lip-gloss': [
            7200, 'Lip Gloss', 'Блеск для губ', 'Ерін жылтыры'
        ],
        'bb-cream': [
            7800, 'BB Cream', 'BB-крем', 'BB-крем'
        ],
        'stick-blush': [
            9900, 'Stick Blush', 'Румяна-стик', 'Таяқша бет далабы'
        ],
        'contour': [
            11900, 'Contour', 'Контуринг', 'Контуринг'
        ],
        'round-lab-spf': [
            4500, 'Round Lab SPF', 'Крем Round Lab SPF', 'Round Lab SPF кремі'
        ],
        'celimax-toner': [
            6500, 'Celimax Toner', 'Тонер Celimax', 'Celimax тонері'
        ],
        'mini-lip-gloss-set': [
            14600,
            'Mini Lip Gloss Set',
            'Набор мини-блесков',
            'Шағын ерін жылтырлары жиынтығы'
        ]
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

    const get = id => document.getElementById(id);

    const form = get('order-form');
    const confirmation = get('order-confirmation');
    const section = get('order-section');

    if (!form || !confirmation || !section) return;

    const fields = {
        name: get('customer-name'),
        email: get('customer-email'),
        phone: get('customer-phone'),
        city: get('customer-city'),
        address: get('customer-address'),
        product: get('product'),
        quantity: get('quantity'),
        date: get('order-date'),
        notes: get('notes'),
        updates: get('updates')
    };

    function create(tag, className = '', text = '') {
        const node = document.createElement(tag);
        node.className = className;
        node.textContent = text;
        return node;
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

    fields.date.min = today();
    fields.date.value = today();

    // CITY SELECT

    const citySelect = create('select', 'form-select');
    citySelect.id = 'kazakhstan-city-select';
    citySelect.setAttribute('aria-label', t.city);

    citySelect.appendChild(new Option(t.selectCity, ''));

    cityNames.forEach(city => {
        citySelect.appendChild(
            new Option(city[languageIndex], city[languageIndex])
        );
    });

    fields.city.before(citySelect);
    fields.city.type = 'hidden';
    fields.city.required = false;

    citySelect.addEventListener('change', () => {
        fields.city.value = citySelect.value;
        clearError(citySelect);
    });

    // TRANSLATION

    function labelFor(id, value) {
        const label = document.querySelector(`label[for="${id}"]`);

        if (!label) return;

        label.textContent = value;

        const requiredFields = [
            'customer-name',
            'customer-email',
            'customer-phone',
            'customer-city',
            'product',
            'quantity',
            'order-date'
        ];

        if (requiredFields.includes(id)) {
            label.appendChild(create('span', 'required-mark', ' *'));
        }
    }

    function translate() {
        document.documentElement.lang = lang;

        const title = section.querySelector('.order-heading h2');
        const intro = section.querySelector('.order-heading p');

        if (title) title.textContent = t.title;
        if (intro) intro.textContent = t.intro;

        const legends = form.querySelectorAll('.legend-title');

        if (legends[0]) legends[0].textContent = t.customer;
        if (legends[1]) legends[1].textContent = t.productInfo;
        if (legends[2]) legends[2].textContent = t.preferences;

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

        get('delivery-label').textContent = t.method;

        fields.name.placeholder = t.name;
        fields.email.placeholder = t.email;
        fields.phone.placeholder = '+7 700 000 00 00';
        fields.address.placeholder = t.address;
        fields.quantity.placeholder = t.quantity;
        fields.notes.placeholder = t.notes;

        fields.product.options[0].textContent = t.selectProduct;

        Array.from(fields.product.options).forEach(option => {
            if (products[option.value]) {
                option.textContent =
                    products[option.value][languageIndex + 1];
            }
        });

        get('submit-order').replaceChildren(
            create('span', '', t.submit),
            create('span', '', '→')
        );

        get('reset-order').textContent = t.reset;
        get('quantity-minus').setAttribute('aria-label', t.decrease);
        get('quantity-plus').setAttribute('aria-label', t.increase);

        document.querySelectorAll('.navbar-nav .nav-link')
            .forEach((link, index) => {
                link.textContent = t.nav[index];
            });

        document.querySelector('.login-link').textContent = t.nav[5];

        document.querySelectorAll('[data-order-lang]')
            .forEach(button => {
                const active = button.dataset.orderLang === lang;

                button.classList.toggle('active', active);
                button.setAttribute('aria-pressed', String(active));

                button.addEventListener('click', () => {
                    try {
                        localStorage.setItem(
                            'nana-language',
                            button.dataset.orderLang
                        );
                    } catch {}

                    location.reload();
                });
            });

        const cityLabel =
            document.querySelector('label[for="customer-city"]');

        cityLabel.htmlFor = citySelect.id;

        ['delivery', 'pickup'].forEach(id => {
            const hint = create(
                'small',
                'delivery-hint',
                id === 'delivery' ? t.deliveryHint : t.pickupHint
            );

            document.querySelector(`label[for="${id}"]`)
                .appendChild(hint);
        });

        const footerContact = document.querySelector('footer p');

        if (footerContact) {
            const textNode = Array.from(footerContact.childNodes)
                .find(node => node.nodeType === Node.TEXT_NODE);

            if (textNode) {
                textNode.textContent = `${t.contact} `;
            }
        }
    }

    // IMPORT CART

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
            );
        }
    } catch {
        cart = [];
    }

    function cartName(item) {
        const productId = cartProductIds[item.id];

        if (productId && products[productId]) {
            return products[productId][languageIndex + 1];
        }

        return String(item.name || 'Product');
    }

    const summary = get('cart-summary');
    const cartNote = create('p', 'cart-note', t.fromCart);

    fields.product.closest('.mb-3').after(cartNote);

    function saveCart() {
        try {
            sessionStorage.setItem(
                'nana-order-cart',
                JSON.stringify(cart)
            );
        } catch {}
    }

    // ORDER SUMMARY

    function renderSummary() {
        const imported = cart.length > 0;

        [
            fields.product,
            fields.quantity,
            get('quantity-minus'),
            get('quantity-plus')
        ].forEach(input => {
            input.disabled = imported;
        });

        cartNote.hidden = !imported;

        const selected = products[fields.product.value];
        const count = Number(fields.quantity.value);

        const validQuantity =
            Number.isInteger(count) &&
            count > 0 &&
            count <= 9999;

        const items = imported
            ? cart
            : selected && validQuantity
                ? [{
                    name: selected[languageIndex + 1],
                    price: selected[0],
                    quantity: count
                }]
                : [];

        summary.replaceChildren(create('h3', '', t.cart));

        if (!items.length) {
            summary.appendChild(
                create('p', 'empty-cart', t.emptyCart)
            );
        }

        items.forEach((item, index) => {
            const row = create('div', 'cart-row');
            const name = imported ? cartName(item) : item.name;

            const badge = create(
                'span',
                'product-monogram',
                name.slice(0, 2).toUpperCase()
            );

            badge.setAttribute('aria-hidden', 'true');

            const text = create('div', 'cart-item-name');

            text.append(
                create('strong', '', name),
                create('small', '', `${money(item.price)} / 1`)
            );

            const quantityControls = create(
    'div',
    'd-flex align-items-center gap-2'
);

const minus = create(
    'button',
    'btn btn-outline-warning btn-sm',
    '−'
);

const plus = create(
    'button',
    'btn btn-outline-warning btn-sm',
    '+'
);

const quantityText = create(
    'span',
    'cart-quantity',
    String(item.quantity)
);

minus.type = 'button';
plus.type = 'button';

minus.setAttribute('aria-label', t.decrease);
plus.setAttribute('aria-label', t.increase);

minus.disabled = !imported;
plus.disabled = !imported || Number(item.quantity) >= 9999;

minus.addEventListener('click', () => {
    if (!imported) return;

    cart[index].quantity -= 1;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    showWaiting();
    renderSummary();
});

plus.addEventListener('click', () => {
    if (!imported) return;

    cart[index].quantity = Math.min(
        9999,
        Number(cart[index].quantity) + 1
    );

    saveCart();
    showWaiting();
    renderSummary();
});

if (imported) {
    quantityControls.append(minus, quantityText, plus);
} else {
    quantityControls.append(
        create('span', 'cart-quantity', `× ${item.quantity}`)
    );
}

            const remove = create('button', 'cart-remove', '×');

            remove.type = 'button';
            remove.setAttribute(
                'aria-label',
                `${t.remove}: ${name}`
            );

            remove.addEventListener('click', () => {
                if (imported) {
                    cart.splice(index, 1);
                    saveCart();
                } else {
                    fields.product.value = '';
                    fields.quantity.value = 1;
                }

                showWaiting();
                renderSummary();
            });

            row.append(
                badge,
                text,
                quantityControls,
                create(
                    'strong',
                    'cart-price',
                    money(Number(item.price) * Number(item.quantity))
                ),
                remove
            );

            summary.appendChild(row);
        });

        const total = items.reduce(
            (sum, item) =>
                sum + Number(item.price) * Number(item.quantity),
            0
        );

        const totalRow = create('div', 'cart-total');

        totalRow.append(
            create('span', '', t.total),
            create('strong', '', money(total))
        );

        summary.appendChild(totalRow);

        get('order-cart-count').textContent = items.reduce(
            (sum, item) => sum + Number(item.quantity),
            0
        );
    }

    ['product', 'quantity'].forEach(id => {
        get(id).addEventListener('input', () => {
            renderSummary();
            showWaiting();
        });
    });

    // QUANTITY BUTTONS

    function adjustQuantity(delta) {
        fields.quantity.value = Math.max(
            1,
            Math.min(
                9999,
                (Number(fields.quantity.value) || 1) + delta
            )
        );

        fields.quantity.dispatchEvent(
            new Event('input', { bubbles: true })
        );
    }

    get('quantity-minus').addEventListener('click', () => {
        adjustQuantity(-1);
    });

    get('quantity-plus').addEventListener('click', () => {
        adjustQuantity(1);
    });

    // MOBILE NAVIGATION

    const toggle = document.querySelector('.navbar-toggler');

    toggle.removeAttribute('data-bs-toggle');
    toggle.removeAttribute('data-bs-target');

    toggle.addEventListener('click', () => {
        const expanded =
            toggle.getAttribute('aria-expanded') !== 'true';

        toggle.setAttribute('aria-expanded', String(expanded));
        get('mainNavbar').classList.toggle('show', expanded);
    });

    // DELIVERY / PICKUP

    function selectedMethod() {
        return form.querySelector(
            'input[name="delivery-method"]:checked'
        )?.value || '';
    }

    function updateDelivery() {
        const pickup = selectedMethod() === 'pickup';
        const addressGroup = get('address-group');

        if (addressGroup) {
            addressGroup.hidden = pickup;
        }

        fields.address.required = !pickup;

        if (pickup) {
            clearError(fields.address);
        }
    }

    // VALIDATION

    function clearError(input) {
        if (!input) return;

        input.classList.remove('is-invalid');
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedby');

        const target = input.id === 'quantity'
            ? input.closest('.quantity-control')
            : input;

        const next = target.nextElementSibling;

        if (next && next.classList.contains('invalid-feedback')) {
            next.remove();
        }
    }

    function showError(input, message) {
        clearError(input);

        input.classList.add('is-invalid');
        input.setAttribute('aria-invalid', 'true');

        const feedback = create(
            'div',
            'invalid-feedback d-block',
            message
        );

        feedback.id = `${input.id}-error`;

        input.setAttribute('aria-describedby', feedback.id);

        const target = input.id === 'quantity'
            ? input.closest('.quantity-control')
            : input;

        target.after(feedback);
    }

    function validate() {
        let firstInvalid = null;

        function check(input, valid, message) {
            clearError(input);

            if (!valid) {
                showError(input, message);

                if (!firstInvalid) {
                    firstInvalid = input;
                }
            }
        }

        check(
            fields.name,
            fields.name.value.trim().length >= 3,
            t.errorName
        );

        check(
            fields.email,
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                fields.email.value.trim()
            ),
            t.errorEmail
        );

        const phoneDigits = fields.phone.value.replace(/\D/g, '');

        check(
            fields.phone,
            phoneDigits.length === 11 &&
                ['7', '8'].includes(phoneDigits[0]),
            t.errorPhone
        );

        check(
            citySelect,
            Boolean(citySelect.value),
            t.errorCity
        );

        const method = selectedMethod();

        if (method === 'delivery') {
            check(
                fields.address,
                fields.address.value.trim().length >= 5,
                t.errorAddress
            );
        } else {
            clearError(fields.address);
        }

        if (!cart.length) {
            check(
                fields.product,
                Object.prototype.hasOwnProperty.call(
                    products,
                    fields.product.value
                ),
                t.errorProduct
            );

            const quantity = Number(fields.quantity.value);

            check(
                fields.quantity,
                Number.isInteger(quantity) &&
                    quantity > 0 &&
                    quantity <= 9999,
                t.errorQuantity
            );
        }

        check(
            fields.date,
            Boolean(fields.date.value) &&
                fields.date.value >= today(),
            t.errorDate
        );

        form.querySelector('[data-delivery-error]')?.remove();

        if (!method) {
            const error = create(
                'div',
                'text-danger small mt-2',
                t.errorMethod
            );

            error.dataset.deliveryError = 'true';

            get('pickup').closest('.delivery-options').after(error);

            if (!firstInvalid) {
                firstInvalid = get('delivery');
            }
        }

        if (firstInvalid) {
            firstInvalid.focus();
            return false;
        }

        return true;
    }

    // CONFIRMATION

    function addDetail(list, label, value, extraClass = '') {
        const item = create(
            'li',
            `list-group-item ${extraClass}`
        );

        item.append(
            create('strong', '', `${label}: `),
            create('span', '', String(value))
        );

        list.appendChild(item);
    }

    function showWaiting() {
        confirmation.classList.add('waiting');

        confirmation.replaceChildren(
            create('div', 'confirmation-symbol', '◇'),
            create('h3', '', t.confirmation),
            create('p', '', t.waiting)
        );
    }

    function showConfirmation() {
        confirmation.classList.remove('waiting');

        const method = selectedMethod();

        const items = cart.length
            ? cart.map(item => ({
                name: cartName(item),
                quantity: Number(item.quantity),
                price: Number(item.price)
            }))
            : [{
                name: fields.product.selectedOptions[0].textContent,
                quantity: Number(fields.quantity.value),
                price: products[fields.product.value][0]
            }];

        const total = items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        const list = create('ul', 'list-group mb-3');

        addDetail(
            list,
            t.orderNumber,
            `#${Math.floor(100000 + Math.random() * 900000)}`
        );

        addDetail(list, t.buyer, fields.name.value.trim());
        addDetail(list, t.email, fields.email.value.trim());
        addDetail(list, t.phone, fields.phone.value.trim());
        addDetail(list, t.city, citySelect.value);

        addDetail(
            list,
            t.address,
            method === 'pickup'
                ? t.pickupAddress
                : fields.address.value.trim()
        );

        addDetail(list, t.date, fields.date.value);

        addDetail(
            list,
            t.method,
            method === 'delivery' ? t.delivery : t.pickup
        );

        addDetail(
            list,
            t.updates,
            fields.updates.checked ? t.yes : t.no
        );

        addDetail(
            list,
            t.notes,
            fields.notes.value.trim() || t.none
        );

        const productRow = create('li', 'list-group-item');

        productRow.appendChild(
            create('strong', '', `${t.selected}:`)
        );

        const productList = create('ul', 'mt-2 mb-0');

        items.forEach(item => {
            productList.appendChild(
                create(
                    'li',
                    '',
                    `${item.name} × ${item.quantity} — ${
                        money(item.price * item.quantity)
                    }`
                )
            );
        });

        productRow.appendChild(productList);
        list.appendChild(productRow);

        addDetail(list, t.total, money(total), 'fw-bold');

        confirmation.replaceChildren(
            create('h3', '', t.confirmation),
            create('p', 'text-success fw-bold', t.success),
            list,
            create('p', 'small', t.demo)
        );

        confirmation.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // EVENTS

    form.addEventListener('submit', event => {
        event.preventDefault();

        if (validate()) {
            showConfirmation();
        }
    });

    form.addEventListener('input', event => {
        if (event.target.matches('input, textarea, select')) {
            clearError(event.target);
        }
    });

    form.addEventListener('change', event => {
        if (event.target.name === 'delivery-method') {
            form.querySelector('[data-delivery-error]')?.remove();
            updateDelivery();
        }
    });

    form.addEventListener('reset', () => {
        requestAnimationFrame(() => {
            citySelect.value = '';
            fields.city.value = '';
            fields.date.value = today();

            form.querySelectorAll('.is-invalid')
                .forEach(clearError);

            form.querySelector('[data-delivery-error]')?.remove();

            updateDelivery();
            showWaiting();
            renderSummary();
        });
    });

    // INITIALIZATION

    translate();
    updateDelivery();
    showWaiting();
    renderSummary();
})();