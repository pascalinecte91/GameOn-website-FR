
// DOM Elements
const modalSubscribe = document.getElementById('modalSubscribe');
const openSubscribe = document.querySelectorAll('.modal-btn');
const closeSubscribe = document.getElementById('closeSubscribe');


// ouverture modal
openSubscribe.forEach((btn) => btn.addEventListener('click', openModal));

function openModal() {
  if (modalSubscribe.classList.contains('hidden')) {
    modalSubscribe.classList.remove('hidden');
  }
}

// fermeture modal
closeSubscribe.addEventListener(
  "click",
  function closeModal() {
    if (!modalSubscribe.classList.contains('hidden')) {
      modalSubscribe.classList.add('hidden')
    }
  });
