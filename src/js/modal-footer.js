
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// no scroll

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-open-modal').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document
        .querySelectorAll('body')
        .forEach(target => target.classList.add('no-scroll'));
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document
        .querySelectorAll('body')
        .forEach(target => target.classList.remove('no-scroll'));
    });
  });

  document.querySelectorAll('.backdrop').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document
        .querySelectorAll('body')
        .forEach(target => target.classList.remove('no-scroll'));
    });
  });
});
