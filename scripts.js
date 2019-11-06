const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;

    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka
    //bæta við eventlisteners

    for (let i = 0; i < items.children.length; i++) {
      items.children[i].children[0].addEventListener('click', finish);
      items.children[i].children[2].addEventListener('click', deleteItem);

      items.children[i].children[1].addEventListener('click', edit);
      items.children[i].children[1].addEventListener('keypress', commit);
    }
  }

  function formHandler(e) {
    e.preventDefault();

    const { target } = e;

    add(target.children[0].value);
    target.children[0].value = '';

  }

  // event handler fyrir það að klára færslu
  function finish(e) {

    const { target } = e;
    const element = target.parentElement;

    element.classList.toggle('item--done');

  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    const { target } = e;
    const input = el('input', 'item__text', 'keypress');

    input.classList.add('item__edit');

    input.type = 'text';
    input.value = target.textContent;

    target.parentElement.insertBefore(input, target.nextElementSibling);
    input.focus();
    target.remove();

  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    //þegar ýtt er á enter
    if (e.keyCode === ENTER_KEYCODE) {
      const { target } = e;
      const span = el('span', 'item__text', edit);
      span.textContent = target.value;

      target.parentElement.insertBefore(span, target);
      target.remove();

    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    if (/\S/.test(value)) {
      const newItem = document.createElement('li');
      newItem.classList.add('item');

      const input = el('input', 'item__checkbox', finish);
      input.type = 'checkbox';

      const span = el('span', 'item__text', edit);
      span.textContent = value;

      const button = el('button', 'item__button', deleteItem);
      button.textContent = 'Eyða';

      newItem.appendChild(input);
      newItem.appendChild(span);
      newItem.appendChild(button);

      items.appendChild(newItem);

    }
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    const { target } = e;
    target.parentElement.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    const element = document.createElement(type);
    element.classList.add(className);

    if (clickHandler === 'keypress') {
      element.addEventListener('keypress', commit);
    }
    else {
      element.addEventListener('click', clickHandler);
    }
    return element;
  }

  return {
    init: init
  }
})();
