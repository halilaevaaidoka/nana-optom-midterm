/* NANA OPTOM — wholesale budget planner (plain JavaScript).
   Uses the existing product catalogue; no invented discounts or stock claims. */
'use strict';
(() => {
  const anchor = document.getElementById('order-action');
  if (!anchor || typeof products === 'undefined') return;
  const language = ['en','ru','kk'].includes(localStorage.getItem('nana-language')) ? localStorage.getItem('nana-language') : 'en';
  const messages = {
    en: {title:'Wholesale budget planner',help:'Estimate how many units of a product fit your budget. Prices are estimates; no order is placed.',product:'Product',budget:'Budget (₸)',quantity:'Quantity',estimate:'Estimate total',afford:'Units within budget',remaining:'Remaining budget',over:'The estimated total exceeds your budget.',invalid:'Enter a valid budget and a quantity of at least 1.',none:'Choose a product.',reset:'Reset',currency:'₸'},
    ru: {title:'Планировщик оптового бюджета',help:'Рассчитайте количество товаров в рамках бюджета. Это расчёт, а не заказ.',product:'Товар',budget:'Бюджет (₸)',quantity:'Количество',estimate:'Итого',afford:'Штук в рамках бюджета',remaining:'Остаток бюджета',over:'Расчётная сумма превышает бюджет.',invalid:'Введите бюджет и количество от 1.',none:'Выберите товар.',reset:'Сбросить',currency:'₸'},
    kk: {title:'Көтерме сатып алу бюджетін есептеу',help:'Бюджетке қанша тауар сыятынын есептеңіз. Бұл тапсырыс емес, тек есеп.',product:'Тауар',budget:'Бюджет (₸)',quantity:'Саны',estimate:'Жалпы сома',afford:'Бюджетке сыятын саны',remaining:'Қалған бюджет',over:'Жалпы сома бюджеттен асып кетті.',invalid:'Бюджетті және кемінде 1 тауар санын енгізіңіз.',none:'Тауарды таңдаңыз.',reset:'Тазалау',currency:'₸'}
  };
  const t=messages[language];
  function el(tag, className, content) {
    const node=document.createElement(tag);
    if(className) node.className=className;
    if(content!==undefined) node.textContent=content;
    return node;
  }
  function formatPrice(value) { return `${value.toLocaleString('en-US')} ${t.currency}`; }
  function calculateEstimate(unitPrice, quantity) { return unitPrice * quantity; }
  function maxAffordable(budget, unitPrice) { return Math.floor(budget / unitPrice); }
  const section=el('section','container my-5');
  section.id='wholesale-budget-planner';
  const card=el('div','border rounded-3 p-4');
  card.append(el('h2','h4 mb-2',t.title),el('p','text-muted',t.help));
  const fields=el('div','row g-3 align-items-end');
  function field(labelText,control) {
    const col=el('div','col-12 col-md-4');
    const label=el('label','form-label',labelText);
    label.htmlFor=control.id;
    col.append(label,control);
    return col;
  }
  const productSelect=el('select','form-select');
  productSelect.id='planner-product';
  productSelect.append(el('option','',t.none));
  productSelect.firstChild.value='';
  products.forEach(item=>{
    const option=el('option','',`${item.name} — ${formatPrice(item.price)}`);
    option.value=String(item.id);
    productSelect.append(option);
  });
  const budgetInput=el('input','form-control');
  budgetInput.id='planner-budget';budgetInput.type='number';budgetInput.min='0';budgetInput.step='100';budgetInput.value='20000';
  const quantityInput=el('input','form-control');
  quantityInput.id='planner-quantity';quantityInput.type='number';quantityInput.min='1';quantityInput.max='9999';quantityInput.step='1';quantityInput.value='1';
  fields.append(field(t.product,productSelect),field(t.budget,budgetInput),field(t.quantity,quantityInput));
  const result=el('div','mt-3');result.id='planner-result';result.setAttribute('role','status');result.setAttribute('aria-live','polite');
  const reset=el('button','btn btn-outline-secondary mt-3',t.reset);reset.type='button';reset.dataset.action='reset-planner';
  card.append(fields,result,reset);section.append(card);
  anchor.parentNode.insertBefore(section,anchor);
  function update() {
    const item=products.find(p=>String(p.id)===productSelect.value);
    const budget=Number(budgetInput.value),quantity=Number(quantityInput.value);
    result.replaceChildren();
    if(!item) {result.append(el('p','text-muted mb-0',t.none));return;}
    if(budgetInput.value.trim()==='' || !Number.isFinite(budget) || budget<0 || quantityInput.value.trim()==='' || !Number.isInteger(quantity) || quantity<1 || quantity>9999) {
      result.append(el('p','text-danger mb-0',t.invalid));return;
    }
    const total=calculateEstimate(item.price,quantity);
    const count=maxAffordable(budget,item.price);
    const rows=[`${t.estimate}: ${formatPrice(total)}`,`${t.afford}: ${count}`,`${t.remaining}: ${formatPrice(Math.max(0,budget-total))}`];
    rows.forEach(line=>result.append(el('p','mb-1',line)));
    if(total>budget) result.append(el('p','text-danger mb-0',t.over));
  }
  // Delegated handlers work for inputs and controls created dynamically above.
  section.addEventListener('input',event=>{
    if(event.target.matches('input, select')) update();
  });
  section.addEventListener('change',event=>{
    if(event.target.matches('input, select')) update();
  });
  section.addEventListener('click',event=>{
    if(!event.target.closest('[data-action="reset-planner"]')) return;
    productSelect.value='';budgetInput.value='20000';quantityInput.value='1';update();
  });
  update();
})();
