
// DOM Elements
const modalSubscribe = document.getElementById('modalSubscribe');
const openSubscribe = document.querySelectorAll('.modal-btn');
const closeSubscribe = document.getElementById('closeSubscribe');
const modalSubscribeThankYou = document.getElementById('modalSubscribeThankYou');
const openSubscribeThankYou = document.getElementById('register');


// ouverture modal
openSubscribe.forEach((btn) => btn.addEventListener('click', openModal));

function openModal() {
  if (modalSubscribe.classList.contains('hidden')) {
    modalSubscribe.classList.remove('hidden');
  }
}

// fermeture modal  avec la croix
closeSubscribe.addEventListener("click",

  function closeModal() {
    if (!modalSubscribe.classList.contains('hidden')) {
      modalSubscribe.classList.add('hidden')
    }
  });


// ouverture modal thank you
openSubscribeThankYou.addEventListener ('click', openModalThankYou);

function openModalThankYou() {
  if (!modalSubscribeThankYou.classList.contains('hidden')) {
    modalSubscribeThankYou.classList.add('hidden');
  }

};


//modal thankYou  fermeture CROIX 

closeSubscribe.addEventListener("click", closeModalThankYou);

function closeModalThankYou(){
    if (modalSubscribeThankYou.classList.contains('hidden')) {
      !modalSubscribeThankYou.classList.remove('hidden');
    }
    
  };
