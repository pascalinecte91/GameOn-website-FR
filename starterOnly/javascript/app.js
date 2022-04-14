// DOM Elements
const modalSubscribe = document.getElementById('modalSubscribe');
const openSubscribe = document.querySelectorAll('.modal-btn');
const closeSubscribe = document.getElementById('closeSubscribe');
const modalSubscribeThankYou = document.getElementById('modalSubscribeThankYou');
const openSubscribeThankYou = document.getElementById('btn-register');
const closeSubscribeThankYou = document.getElementById('btnModal');

// ouverture avec le button de la modal
openSubscribe.forEach((btn) => btn.addEventListener('click', openModal));

//si la modal du formulaire est fermée , supprime le hidden et affiche la modal
function openModal() {
  if (modalSubscribe.classList.contains('hidden')) {
    modalSubscribe.classList.remove('hidden');
  }
}

// fermeture modal  avec la croix
closeSubscribe.addEventListener("click", closeModal);

// modal FORM  affichée (n'est pas hidden):ajoute le hidden pour qu'elle n'apparaisse plus donc CLOSE
function closeModal() {
  if (!modalSubscribe.classList.contains('hidden')) {
    modalSubscribe.classList.add('hidden')
  }
};


//modal thankYou  fermeture button FERMER
closeSubscribeThankYou.addEventListener("click", closeModalThankYou);

//modal message ouverte --> ajoute la class hidden pour la fermer
function closeModalThankYou() {
  if (!modalSubscribeThankYou.classList.contains('hidden')) {
    modalSubscribeThankYou.classList.add('hidden');
  }
};
