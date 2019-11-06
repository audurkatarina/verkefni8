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

    for(let i=0; i<items.children.length; i++){
      items.children[i].children[0].addEventListener('change',finish);
    }
  }

  function formHandler(e) {
    e.preventDefault();

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {

    const { target } = e;
    const element = target.parentElement;
    if(this.checked){
      element.classList.add('item--done');
    }
    else{
      element.classList.remove('item--done');
    }

  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    //þegar ýtt er á enter
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
