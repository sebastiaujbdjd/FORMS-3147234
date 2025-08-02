import { showModal, hideModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('surbery-form');
  const modal = document.getElementById('modal-success');
  const closeButton = document.getElementById('modal-close');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showModal();
  });

  closeButton.addEventListener('click', () => {
    hideModal();
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      hideModal();
    }
  });
});