const botonModal = document.querySelector('.btn-blog2');
const showModal = document.querySelector('.modal');
const closeModal = document.querySelector('.btn-modal');



botonModal.addEventListener('click', function(e){
    e.preventDefault();
    showModal.classList.add('show-modal');
});  
closeModal.addEventListener('click', function(e){
    e.preventDefault();
    showModal.classList.remove('show-modal');
});  